// Action Types
export const SET_USER_DETAILS = "amazon/userDetails/SET_USER_DETAILS";

// initial state
const initialState = {
  email: undefined,
  userToken: undefined,
  userId: undefined,
  expiresIn: undefined
};


// Action creators
export const setUserDetails = (data) => {
  const newData = {
    email: data.email,
    userToken: data.idToken,
    userId: data.localId,
    expiresIn: data.expiresIn
  }
  return {
    type: SET_USER_DETAILS,
    payload: newData
  };
}
// Action Map

const getReducer = {
  [SET_USER_DETAILS]: (state, action) => {
    let data = action.payload;
    return { ...state, ...data }
  }
};

// default Reducer
const reducer = (state = initialState, action) => {
  let doAction = getReducer[action.type];
  return doAction ? doAction(state, action) : state;
};

export default reducer;
