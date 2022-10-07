import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import flight3 from '../images/flight3.webp';
import { getFlightDetails } from "../store/actions/FlightAction";
import LogoutNav from "../Navbars/LogoutNav";


function FetchFlightById() {

    const flight = useSelector(state => state.flightReducer.flight)
    const checking = useSelector(state => state.checkinReducer.checking)
    const { id } = useParams();
    const dispatch = useDispatch();

    const fetchFlightById = () => {
        dispatch(getFlightDetails(id));
    }
    useEffect(fetchFlightById, [id]);


    return (
        <div>
            <LogoutNav />
            <div className='contrainer-bkbyid'>
                <div className="h2-bkdetails">
                    <h2> Flight Details</h2>
                </div><hr></hr>
                {
                    flight !== null &&
                    <div className="row">

                        {/* <div className="col">
                            <img src={flight3} style={{width:"90px" ,height:"90px"}} alt="card image" />
                        </div> */}
                        <div className="col">

                            <p>Flight ID:<b>{flight.flightId}</b></p>
                            <p>From:{flight.fromLocation} </p>
                            <p>To:{flight.destination}</p>
                            <p>Flight Name:{flight.flightName}</p>
                            <p>Flight Type:{flight.flightType}</p>
                            <p>Fare Price:{flight.farePrice}</p>




                        </div>

                    </div>
                }


                <div>
                    <Link to="/flight/getall" className="btn btn-secondary">Back</Link>
                </div>
            </div>
        </div>
    )
}
export default FetchFlightById;