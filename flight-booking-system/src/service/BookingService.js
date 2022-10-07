import axios from "axios";

import {  BOOKING_URL } from "../store/actions/ActionConstants";

export function saveBookingService(newBooking) {
    return axios.post(BOOKING_URL + "/booking/save", newBooking);
}
export function deleteBookingByIdService(id) {
    return axios.delete(BOOKING_URL + "/booking/delete/" + id);

}
export function fetchAllBookingsService() {
    return axios.get(BOOKING_URL + "/booking/findAllBooking");

}
export function fetchBookingByIdService(id) {
    return axios.get(BOOKING_URL + "/booking/find/" + id);
}

export function fetchBookingByPnrNoService(pnrNo){
    return axios.get(BOOKING_URL+ "/booking/"+pnrNo)

}