import { BASE_URL } from "../store/actions/ActionConstants";
import axios from "axios";

export function fetchAllFlightsService(){
    return axios.get(BASE_URL+"/flight/getallflights");
}
export function addFlightService(flight){
    return axios.post(BASE_URL+"/flight/addFlight",flight);
}
export function flightSearch(fromLocation,destination,date){
    return axios.get(BASE_URL+"/flight/"+fromLocation+"/"+destination+"/"+date);
}
export function deleteFlightService(id){
    return axios.delete(BASE_URL+"/flight/delete/" +id);   
}
export function fetchFlightByIdService(id){
    return axios.get(BASE_URL+"/flight/get/" + id);
}