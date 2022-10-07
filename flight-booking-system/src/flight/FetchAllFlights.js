import { useEffect } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../CSS/AllBooking.css';

import { getAllFlights } from "../store/actions/FlightAction";
import LogoutNav from "../Navbars/LogoutNav";

function FetchAllFlights() {


    const flights = useSelector(state => state.flightReducer.flights)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const myFunction = async () => {
        dispatch(getAllFlights())
    };
    useEffect(() => { myFunction() }, []);


    return (

        <body className="body-allbooking">
            <div >
                <LogoutNav />
                <div className="container-allbooking">

                    <div style={{ float: "left" }}>

                        <button onClick={() => navigate(-1)} className="btn btn-secondary">Back</button>
                    </div><br></br>

                    <div className="h2-allbook">
                        <h2> FLIGHTS</h2>
                    </div>

                    <div className="container-table">

                        {
                            flights.length > 0 ?
                                <table class="table">
                                    <tr>

                                        <th>FlightId</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Date</th>
                                        <th>View</th>
                                        <th>Delete</th>


                                    </tr>
                                    {
                                        flights.map((b, index) =>
                                            <tr key={index}>
                                                <td>{b.flightId} </td>
                                                <td>{b.fromLocation}</td>
                                                <td>{b.destination}</td>
                                                <td>{b.date}</td>


                                                <td><Link to={`/flight/get/${b.flightId}`}>View</Link></td>
                                                <td><Link to={`/flight/delete/${b.flightId}`}>Delete</Link></td>


                                            </tr>
                                        )
                                    }
                                </table>
                                : <h3>No Flights Available</h3>
                        }
                    </div>

                </div>
            </div>

        </body>




    )
}
export default FetchAllFlights;