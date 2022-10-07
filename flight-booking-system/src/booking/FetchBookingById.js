import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBookingDetails } from '../store/actions/BookingAction';
import LogoutNav from '../Navbars/LogoutNav';
import '../CSS/BookingById.css';


function FetchBookingById() {
    const booking = useSelector(state => state.bookingReducer.booking)

    const { id } = useParams();

    const dispatch = useDispatch();

    const fetchBookingById = () => {
        dispatch(getBookingDetails(id));
    }

    useEffect(fetchBookingById, [id]);

    return (
        <div>
            <LogoutNav />
            <div className='contrainer-bkbyid'>
                <div className="h2-bkdetails">
                    <h2> Booking Details</h2>
                </div><hr></hr>

                {
                    booking !== null &&
                    <div>


                        <p>BookingId : {booking.bookingId}</p>
                        <p>First Name : {booking.firstName}</p>
                        <p>Last Name : {booking.lastName}</p>
                        <p>Gender : {booking.gender}</p>
                        <p>flightId : {booking.flightId}</p>
                        <p>Fare : {booking.farePrice}</p>

                    </div>
                }
                <div>
                    <Link to="/booking/all" className="btn btn-secondary">Back</Link>
                </div>
            </div>
        </div>
    )
}

export default FetchBookingById;