import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import LogoutNav from "../Navbars/LogoutNav";
import { getCheckinDetails } from "../store/actions/CheckinAction";

function CheckinById(){
    const checkin = useSelector(state => state.checkinReducer.checkin)
    
    const { id } = useParams();
    const dispatch = useDispatch();

    const fetchCheckinById = () => {
        dispatch(getCheckinDetails(id));
    }
    useEffect(fetchCheckinById, [id]);


    return (
        <div>
        <LogoutNav />
        <div className='contrainer-bkbyid'>
            <div className="h2-bkdetails">
                <h2> Checkin Details</h2>
            </div><hr></hr>

            {
                checkin !== null &&
                <div>


                    <p>Checkin : {checkin.checkInId}</p>
                    <p>FlightId : {checkin.flightId}</p>
                    <p>Seat number : {checkin.seat}</p>
                    <p>Status : {checkin.status}</p>
                    

                </div>
            }
            <div>
                <Link to="/checkin/all" className="btn btn-secondary">Back</Link>
            </div>
        </div>
    </div>
    )

}
export default CheckinById;