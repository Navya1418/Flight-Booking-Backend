import axios from "axios";
import { CHECKIN_URL } from "../store/actions/ActionConstants";

export function addCheckinService(checkin){
    return axios.post(CHECKIN_URL+"/checkin/save",checkin);
}
export function fetchCheckinByIdService(id){
    return axios.get(CHECKIN_URL+"/checkin/find/" + id);
    
}
export function deleteCheckinService(id){
    return axios.delete(CHECKIN_URL+"/checkin/delete/" +id);   
}
export function fetchAllCheckinService(){
    return axios.get(CHECKIN_URL+"/checkin/getallcheckin");
}