import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import {getDeleteBookingById} from '../store/actions/BookingAction';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function DeleteBooking() {
    const undoBooking = useSelector(state => state.bookingReducer.undoBooking)

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate=useNavigate();

    const deleteBookingById = () => {
        dispatch(getDeleteBookingById(id));
    }
    useEffect(() => { deleteBookingById(); }, [id]);

    return (
        <div className='alert'>

            {
                undoBooking !== null && 
                alert("Booking deleted successfully!!!" +id )
                
            }
        </div>
    )



}
export default DeleteBooking;