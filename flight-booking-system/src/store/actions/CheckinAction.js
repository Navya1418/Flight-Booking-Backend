import { addCheckinService, deleteCheckinService, fetchAllCheckinService, fetchCheckinByIdService } from "../../service/CheckinService";
import { ADD_CHECKIN, CHECKIN_DELETE, CHECKIN_FETCHALL, CHECKIN_ID } from "./ActionConstants";

export function addCheckin(checkin) {
        
    return (dispatch) => {

        return addCheckinService(checkin).then(
            resp => {
                dispatch(addCheckinSuccess(resp.data));
                alert("Checkin added succesfully!!!");


            }
        )
    }
}
export function addCheckinSuccess(data) {
    return {
        type: ADD_CHECKIN,
        payload: data
    }
}
export function getCheckinDetails(id) {
    return (dispatch) => {
        return fetchCheckinByIdService(id).then(resp => {
            console.log(resp.status);
            dispatch(getCheckinByIdSuccess(resp.data))

        })
    }
}
export function getCheckinByIdSuccess(data) {
    return {
        type: CHECKIN_ID,
        payload: data
    }
}
export function getAllCheckin() {
        
    return (dispatch) => {

        return fetchAllCheckinService().then(
            resp => { 
                 console.log(resp.status);              
                 dispatch(getAllCheckinSuccess(resp.data));
                


            }
        )
    }
}
export function getAllCheckinSuccess(data) {
    return {
        type: CHECKIN_FETCHALL,
        payload: data
    }
}

export function deleteCheckin(id){
    return(dispatch)=>{
        return deleteCheckinService(id).then(resp =>{
            console.log(resp.status);
            dispatch(deleteCheckinSuccess(resp.data));
            
        })
        
    }
}
export function deleteCheckinSuccess(data){
    return{
        type:CHECKIN_DELETE,        
        payload:data
    }
}