import { ADD_CHECKIN, CHECKIN_DELETE, CHECKIN_FETCHALL, CHECKIN_ID } from "../actions/ActionConstants";

const initialState = {

    addCheckin: null,
    checkin:null,
    checkins:[],
    
}
export default function checkinReducer(state = initialState, action) {

    if (action.type === ADD_CHECKIN) {
        console.log(action.payload);
        return ({
            ...state,
            addCheckin: action.payload
        })
    }
    if (action.type === CHECKIN_ID) {
        console.log(action.payload);
        return ({
            ...state,
            checkin: action.payload
        })
    }
    if (action.type === CHECKIN_FETCHALL) {
        console.log(action.payload);
        return ({
            ...state,
            checkins: action.payload
        })
    }
    if (action.type ===CHECKIN_DELETE) {
        console.log(action.payload);
        return ({
            ...state,
            checkin: action.payload
        })
        
    }
    else {
        return state;
    }
}