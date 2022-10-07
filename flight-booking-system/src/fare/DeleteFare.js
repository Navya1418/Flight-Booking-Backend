import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
// import {getDeleteBookingById} from '../store/actions/BookingAction';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteFare } from '../store/actions/FareAction';

function DeleteFare() {
    const fare = useSelector(state => state.fareReducer.fare)

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate=useNavigate();

    const deleteBookingById = () => {
        dispatch(deleteFare(id));
    }
    useEffect(() => { deleteFare(); }, [id]);

    return (
        <div className='alert'>

            {
                fare !== null && 
                alert("fare deleted successfully!!!" +id )
                
            }
        </div>
    )



}
export default DeleteFare;