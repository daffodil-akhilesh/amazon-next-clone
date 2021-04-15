export const DISPLAY_HOVER_MENU = "amazon/hoverMenu/DISPLAY_HOVER_MENU ";
export const HIDE_HOVER_MENU = "amazon/hoverMenu/HIDE_HOVER_MENU";

const initialState = {
    show:{
        "DoubleTextAcc":false,
        "SelectCountry":false
    }
}

const getReducer = {
    [DISPLAY_HOVER_MENU]:(state,action)=>{
        return {...state,show:{
            ...state.show,
            [action.parent]:true
        }}
    },
    [HIDE_HOVER_MENU]:(state,action)=>{
        return {...state,show:{
            ...state.show,
            [action.parent]:false
        }}
    }
};

const reducer = (state=initialState,action)=>{
    let doAction = getReducer[action.type];
    return doAction?doAction(state,action):state;
}
export default reducer;