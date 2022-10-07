import { ADD_FARE, DELETE_FARE, FARE_FETCHALL, FARE_ID } from "../actions/ActionConstants";

const initialState = {
    fares: [],
    addFare: null,
    deleteFare: null,
    fare: null


}
export default function fareReducer(state = initialState, action) {

    if (action.type === ADD_FARE) {
        console.log(action.payload);
        return ({
            ...state,
            addFare: action.payload
        })
    }
    if (action.type === FARE_ID) {
        console.log(action.payload);
        return ({
            ...state,
            fare: action.payload
        })
    }

    if (action.type === FARE_FETCHALL) {
        console.log(action.payload);
        return ({
            ...state,
            fares: action.payload
        })
    }
    if (action.type ===DELETE_FARE) {
        console.log(action.payload);
        return ({
            ...state,
            fare: action.payload
        })
        
    }

    else {
        return state;
    }
}
