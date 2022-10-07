import { ADD_USER, LOGIN_SUCCESS } from "../actions/ActionConstants";

const initialState = {
   newUser:null,
   loggedInUser:null,
    isLoggedIn:false,
    

}
export default function userReducer(state = initialState, action) {

    if (action.type === ADD_USER) {
        console.log(action.payload);
        return ({
            ...state,
            newUser: action.payload
        })
    }
    if (action.type === LOGIN_SUCCESS) {
        console.log(action.payload);
        return ({
            ...state,
            loggedInUser: action.payload,
            isLoggedIn : true
        })
    }
    
    else {
        return state;
    }

}