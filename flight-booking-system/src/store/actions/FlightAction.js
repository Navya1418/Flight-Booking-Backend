import { FLIGHT_DELETE,FLIGHT_FETCHALL,SEARCH_FLIGHT,FETCH_FLIGHT_BYID,ADD_FLIGHT } from "../actions/ActionConstants";
import { addFlightService, fetchAllFlightsService ,flightSearch,deleteFlightService,fetchFlightByIdService} from "../../service/FlightService";


export function getAllFlights() {
        
    return (dispatch) => {

        return fetchAllFlightsService().then(
            resp => { 
                 console.log(resp.status);              
                 dispatch(getAllFlightSuccess(resp.data));
                


            }
        )
    }
}
export function getAllFlightSuccess(data) {
    return {
        type: FLIGHT_FETCHALL,
        payload: data
    }
}
export function addFlight(flight) {
        
    return (dispatch) => {

        return addFlightService(flight).then(
            resp => {
                dispatch(addFlightSuccess(resp.data));
                alert("Flight added succesfully!!!");


            }
        )
    }
}
export function addFlightSuccess(data) {
    return {
        type: ADD_FLIGHT,
        payload: data
    }
}
export function getFlightSearch(fromLocation,destination,date) {
        
    return (dispatch) => {

        return flightSearch(fromLocation,destination,date).then(
            resp => {
                dispatch(getFlightSearchSuccess(resp.data));
              


            }
        )
    }
}
export function getFlightSearchSuccess(data) {
    return {
        type: SEARCH_FLIGHT,
        payload: data
    }
}
export function deleteFlight(id){
    return(dispatch)=>{
        return deleteFlightService(id).then(resp =>{
            console.log(resp.status);
            dispatch(deleteFlightSuccess(resp.data));
            
        })
        
    }
}
export function deleteFlightSuccess(data){
    return{
        type:FLIGHT_DELETE,        
        payload:data
    }
}
export function getFlightDetails(id) {
    return (dispatch) => {
        return fetchFlightByIdService(id).then(resp => {
            console.log(resp.status);
            dispatch(getFlightByIdSuccess(resp.data))

        })
    }
}
export function getFlightByIdSuccess(data) {
    return {
        type: FETCH_FLIGHT_BYID,
        payload: data
    }
}