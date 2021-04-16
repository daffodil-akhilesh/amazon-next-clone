import Axios from 'axios';


const call = ({
    method,
    url,
    data,
    cbSuccess,
    cbError,
    cbFinally
}) => {

    let config = {
        method, url, data, headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    };
    return Axios(config).then((response) => {
        cbSuccess && cbSuccess(response);
    }).catch((error) => {
        cbError && cbError(error);
    }).finally(() => {
        cbFinally && cbFinally();
    })
};


export default call;