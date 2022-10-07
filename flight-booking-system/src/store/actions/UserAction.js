import axios from "axios";
import { addUserService, loginService } from "../../service/UserService";
import { ADD_USER, LOGIN, LOGIN_SUCCESS } from "./ActionConstants";

export function addUser(user) {
        
    return (dispatch) => {

        return addUserService(user).then(
            resp => {
                dispatch(addUserSuccess(resp.data));
                alert("User added succesfully!!!");


            }
        )
    }
}
export function addUserSuccess(data) {
    return {
        type: ADD_USER,
        payload: data
    }
}
export function doLogin(payload) {
    return (dispatch) => {
        return loginService(payload).then(
            resp => {
                console.log(resp);                
                localStorage.setItem("myUser", JSON.stringify(resp.data));
                dispatch(doLoginSuccess(resp.data));
            })
            .catch(error => {
                console.log(error);
                alert(error.response.data);
            })
    }
}
export function doLoginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}