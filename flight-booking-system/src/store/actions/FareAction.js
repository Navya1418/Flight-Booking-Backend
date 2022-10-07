import { addFareService, deleteFareService, fetchAllFareService, fetchFareByIdService } from "../../service/FareService";
import { ADD_FARE, DELETE_FARE, FARE_FETCHALL, FARE_ID } from "./ActionConstants";

export function getFareDetails(id) {
    return (dispatch) => {
        return fetchFareByIdService(id).then(resp => {
            console.log(resp.status);
            dispatch(getFareByIdSuccess(resp.data))

        })
    }
}
export function getFareByIdSuccess(data) {
    return {
        type: FARE_ID,
        payload: data
    }
}
export function addFare(fare) {

    return (dispatch) => {

        return addFareService(fare).then(
            resp => {
                dispatch(addFareSuccess(resp.data));
                alert("Fare added succesfully!!!");


            }
        )
    }
}
export function addFareSuccess(data) {
    return {
        type: ADD_FARE,
        payload: data
    }
}

export function deleteFare(id){
    return(dispatch)=>{
        return deleteFareService(id).then(resp =>{
            console.log(resp.status);
            dispatch(deleteFareSuccess(resp.data));
            
        })
        
    }
}
export function deleteFareSuccess(data){
    return{
        type:DELETE_FARE,        
        payload:data
    }
}

export function getAllFares() {
        
    return (dispatch) => {

        return fetchAllFareService().then(
            resp => { 
                 console.log(resp.status);              
                 dispatch(getAllFareSuccess(resp.data));

            }
        )
    }
}
export function getAllFareSuccess(data) {
    return {
        type: FARE_FETCHALL,
        payload: data
    }
}