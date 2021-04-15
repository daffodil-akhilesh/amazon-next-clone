// Action Types
export const GET_USER_DETAILS = "amazon/userDetails/GET_USER_DETAILS";

// initial state
const initialState = {
  firstName: undefined,
  lastName: undefined,
  userId: undefined,
  location: undefined,
  itemsCount: "0",
};

// Action Map

const getReducer = {
  [GET_USER_DETAILS]: (state, action) => {
    return state;
  },
};

// default Reducer
const reducer = (state = initialState, action) => {
  let doAction = getReducer[action.type];
  return doAction ? doAction(state, action) : state;
};

export default reducer;
