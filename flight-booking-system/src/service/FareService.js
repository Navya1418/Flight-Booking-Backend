import axios from "axios";
import { FARE_URL } from "../store/actions/ActionConstants";

export function fetchFareByIdService(id){
    return axios.get(FARE_URL+"/fare/find/" + id);
}
export function addFareService(fare){
    return axios.post(FARE_URL+"/fare/save",fare);
}
export function deleteFareService(id){
    return axios.delete(FARE_URL+"/fare/delete/" +id);   
}
export function fetchAllFareService(){
    return axios.get(FARE_URL+"/fare/getallfares");
}