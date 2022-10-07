import { FLIGHT_DELETE,FLIGHT_FETCHALL,SEARCH_FLIGHT,FETCH_FLIGHT_BYID,ADD_FLIGHT } from "../actions/ActionConstants";

const initialState = {
    flights: [],
    addFlight: null,
    deleteFlight: null,
    flight:null
    

}
export default function flightReducer(state = initialState, action) {

    if (action.type === FLIGHT_FETCHALL) {
        console.log(action.payload);
        return ({
            ...state,
            flights: action.payload
        })
    }
    if (action.type === ADD_FLIGHT) {
        console.log(action.payload);
        return ({
            ...state,
            addFlight: action.payload
        })
    }
    if (action.type === SEARCH_FLIGHT) {
        console.log(action.payload);
        return ({
            ...state,
            flights: action.payload
        })
    }
    if (action.type ===FLIGHT_DELETE) {
        console.log(action.payload);
        return ({
            ...state,
            deleteFlight: action.payload
        })
        
    }
    if (action.type === FETCH_FLIGHT_BYID) {
        console.log(action.payload);
        return ({
            ...state,
            flight: action.payload
        })
    }

    else {
        return state;
    }
}