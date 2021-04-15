// Action Types
export const GET_USER_DETAILS = "amazon/userDetails/GET_USER_DETAILS";

// initial state
const initialState = {
  first_name: "Akhilesh",
  last_name: "Pandey",
  user_id: "0",
  location: "New Delhi 110075",
  itemsCount: "4",
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
