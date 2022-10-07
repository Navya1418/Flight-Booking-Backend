import { combineReducers } from "redux";
import flightReducer from "./FlightReducers";
import bookingReducer from "./BookingReducer";
import checkinReducer from "./CheckinReducer";
import fareReducer from "./FareReducer";
import userReducer from "./UserReducer";




const rootReducers = combineReducers(
    {

        flightReducer,
        bookingReducer,
        checkinReducer,
        fareReducer,
        userReducer


    }
)

export default rootReducers;