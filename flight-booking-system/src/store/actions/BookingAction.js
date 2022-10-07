import { saveBookingService,deleteBookingByIdService, fetchAllBookingsService, fetchBookingByIdService, fetchBookingByPnrNoService} from '../../service/BookingService';
import { BOOKING_SAVE ,BOOKING_DELETE, BOOKING_FETCH_ALL, BOOKING_FETCH_BYID, BOOKING_FETCH_BYPNRNO} from './ActionConstants';

export function saveBooking(newBooking) {
    return (dispatch) => {
        return saveBookingService(newBooking).then(resp => {
            dispatch(saveBookingSuccess(resp.data));
        })

    }
}
export function saveBookingSuccess(data) {
    return {
        type: BOOKING_SAVE,
        payload: data
    }
}
export function getDeleteBookingById(id) {
    return (dispatch) => {
        return deleteBookingByIdService(id).then(resp => {
            console.log(resp.status);
            dispatch(getDeleteBookingByIdSuccess(resp.data));

        })

    }
}
export function getDeleteBookingByIdSuccess(data) {
    return {
        type: BOOKING_DELETE,
        payload: data
    }
}


export function getAllBookings() {

    return (dispatch) => {
        return fetchAllBookingsService().then(
            resp => {
                
                dispatch(
                    getAllBookingsSuccess(resp.data)
                );

            }
        )
    }
}

export function getAllBookingsSuccess(data) {
    return {
        type: BOOKING_FETCH_ALL,
        payload: data
    }
}
export function getBookingDetails(id) {
    return (dispatch) => {
        return fetchBookingByIdService(id).then(resp => {
            console.log(resp.status);
            dispatch(getBookingByIdSuccess(resp.data))

        })
    }
}
export function getBookingByIdSuccess(data) {
    return {
        type: BOOKING_FETCH_BYID,
        payload: data
    }
}


export function getBookingDetailsByPnr(pnrNo) {
    return (dispatch) => {
        return fetchBookingByPnrNoService(pnrNo).then(resp => {
            console.log(resp.status);
            dispatch(getBookingByPnrSuccess(resp.data))

        })
    }
}
export function getBookingByPnrSuccess(data) {
    return {
        type: BOOKING_FETCH_BYPNRNO,
        payload: data
    }
}