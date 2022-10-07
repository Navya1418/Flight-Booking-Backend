import { deleteFlight } from '../store/actions/FlightAction';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

function DeleteFlight() {
    const flight = useSelector(state => state.flightReducer.deleteFlight);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteHandler = () => {
        dispatch(deleteFlight(id));
    }
    useEffect(deleteHandler, []);

    // dispatch(deleteFlight(flight.id));

    return (

        <div className='container-fluid'>
            {
                flight !== null &&
                alert("Flight deleted")
            }



        </div >

    )
}


export default DeleteFlight;