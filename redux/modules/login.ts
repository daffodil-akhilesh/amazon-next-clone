import call from '../../api';
import endpoints from '../../api/apiEndpoints';
import { setUserDetails, resetUser } from './userDetails';

export const START_LOGIN = "amazon/login/START_LOGIN";
export const END_LOGIN = "amazon/login/END_LOGIN";
export const SAVE_TOKEN = "amazon/login/SAVE_TOKEN";
export const REMOVE_TOKEN = "amazon/login/REMOVE_TOKEN";



const initialState = {
    isLogin: false
}

export const saveToken = (data) => {
    return {
        type: SAVE_TOKEN,
        data
    }
}
export const removeToken = () => {
    return {
        type: REMOVE_TOKEN
    }
}

export const autoLogin = () => {
    const email = localStorage.getItem("USER_EMAIL");
    const idToken = localStorage.getItem("USER_TOKEN");
    const localId = localStorage.getItem("USER_ID");
    const data = { email, idToken, localId };
    // get new expiration time
    return (dispatch) => {
        dispatch(setUserDetails(data));
    }
}

export const login = (type, data, cb) => {
    return (dispatch, getState) => {
        // console.log("Inside login cb")
        dispatch({
            type: START_LOGIN
        });

        call({
            method: "post",
            url: type === "login" ? endpoints.LOGIN : endpoints.SIGNUP,
            data: data,
            cbSuccess: (response) => {
                // console.log(response.data);
                dispatch(setUserDetails(response.data));
                dispatch(saveToken(response.data));
                setTimeout(() => {
                    dispatch(removeToken());
                    logout()(dispatch);
                }, +response.data.expiresIn * 1000)
                dispatch({
                    type: END_LOGIN
                });
                cb && cb();
            },
            cbError: (error) => {
                console.log(error);
                dispatch({
                    type: END_LOGIN
                });
            },
            cbFinally: null
        });
    }
}
export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem("USER_TOKEN");
        localStorage.removeItem("USER_ID");
        localStorage.removeItem("USER_EMAIL");
        dispatch(resetUser());
    }
}

const getReducer = {
    [START_LOGIN]: (state, action) => {
        return {
            ...state,
            isLogin: true
        };
    },
    [END_LOGIN]: (state, action) => {
        return {
            ...state,
            isLogin: false
        }
    },
    [SAVE_TOKEN]: (state, action) => {
        localStorage.setItem("USER_TOKEN", action.data.idToken);
        localStorage.setItem("USER_ID", action.data.localId);
        localStorage.setItem("USER_EMAIL", action.data.email);
        return state;
    },
    [REMOVE_TOKEN]: (state, action) => {
        localStorage.removeItem("USER_TOKEN");
        localStorage.removeItem("USER_ID");
        localStorage.removeItem("USER_EMAIL");
        return state;
    },
};

const reducer = (state = initialState, action) => {
    let doAction = getReducer[action.type];
    return doAction ? doAction(state, action) : state;
}

export default reducer;
