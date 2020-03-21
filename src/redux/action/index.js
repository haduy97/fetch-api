import {GET_USER, GET_USER_FAIL} from '../constant/action-types';
const api = "http://jsonplaceholder.typicode.com/users";

export const getUser = () => (dispatch) => {
    const data = fetch(`${api}`)
    .then(res => {
        return res.json();
    })
    .then(users => {
        dispatch({
            type: GET_USER,
            payload: users,
            meta: {resource: "usersManagement"}
        })
    })
    .catch(error => {
        const errorgetfail={
            error: true,
            message: `Lỗi: ${error}`
        }
        dispatch({
            type: GET_USER_FAIL,
            error: errorgetfail,
            meta: {resource: "usersManagement"}
        });
    })
    return data;
}

