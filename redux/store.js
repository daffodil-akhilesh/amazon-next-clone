import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { composeWithDevTools} from 'redux-devtools-extension';
import { useMemo } from "react";
import thunk from "redux-thunk";

let store;

const rootReducer = combineReducers({});
const composeEnhancers =
  process.env.NEXT_PUBLIC_ENV === "development"
    ? composeWithDevTools
    : compose;

const logger = (store) => (next) => (action) => {
  console.log(action.type);
  return next(action);
};

const initStore = (preloadedState) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(logger, thunk))
  );
};

export const initializeStore = (preloadedState) => {
  // whichever is defined is returned
  let _store = store ?? initStore(preloadedState);

  // Navigating from one one page to other store should have updates
  if (store && preloadedState) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });

    // reset the current store
    store = undefined;
  }

  // for ssg and ssr always get the new store
  if (typeof window === "undefined") return _store;
  // load the store once in the client
  if (!store) store = _store;

  //return updated store
  return _store;
};

export const useStore = (initialState) => {
  let store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};
