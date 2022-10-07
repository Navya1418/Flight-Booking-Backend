import axios from "axios";
import { API_URL, USER_URL } from "../store/actions/ActionConstants";

export function addUserService(user){
    return axios.post(USER_URL+"/user/save",user);
}
export function loginService(payload){
    return axios.post(API_URL+"/authenticate",payload);
}
