import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import LogoutNav from "../Navbars/LogoutNav";
import { getFlightSearch } from "../store/actions/FlightAction";
import '../CSS/FlightSearch.css';

function FlightSearch() {

    const flight = useSelector(state => state.flightReducer.flights)
    const fare = useSelector(state => state.flightReducer.fare)
    const navigate = useNavigate();

    const [fromLocation, setFromLocation] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const dispatch = useDispatch();

    const [formErrors, setFormErrors] = useState({});


    const flightSearch = () => {

        let errors = {};

        if (!fromLocation) {
            errors['fromLocationError'] = "fromLocation is Required"
        }
        else if (fromLocation.length < 3) {
            errors['fromLocationError'] = "fromLocation should contain more than 3 characters "
        }
        var pattern = new RegExp(/^[A-Za-z]+$/);
        if (!pattern.test(fromLocation)) {
            errors["fromLocationError"] =
                "Please type only alphabets not number or special character";
        }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;


        if (noErrors) {

            dispatch(getFlightSearch(fromLocation, destination, date));
        }
    }
    useEffect(flightSearch, []);


    return (
        <body className="flsearch-body">
            <div >

                <LogoutNav />
                <div className="container-flightSearch" >
                    <div style={{ float: "left" }}>
                        <button onClick={() => navigate(-1)} className="btn btn-secondary">Back</button>
                    </div><br></br>

                    <div>
                        <h2 className="h2-fs">Flight Search</h2>
                    </div><hr></hr>


                    <div>
                        <label htmlFor="fromLocation"><b>Travelling from:</b>

                            <input type="text" className="form-control" name="fromLocation" value={fromLocation} onChange={e => setFromLocation(e.target.value)} />

                        </label>
                        {/* {

                            formErrors.fromLocationError &&

                            <div style={{ color: "red" }}>{formErrors.fromLocationError}</div>

                        } */}
                    </div><br></br>
                    <div>
                        <label htmlFor="destination"><b>Going to:</b>

                            <input type="text" className="form-control" name="destination" value={destination} onChange={e => setDestination(e.target.value)} />

                        </label>
                    </div><br></br>
                    <div>
                        <label htmlFor="date"><b>Planning on:</b>

                            <input type="date" className="form-control" name="date" value={date} onChange={e => setDate(e.target.value)} />

                        </label>
                    </div><br></br>
                    {/* <div style={{ float: "right" }}>

                        <button onClick={() => navigate(-1)} className="btn btn-warning">Back</button>
                    </div> */}


                    <div className="container">

                        <button className='btn btn-primary' onClick={flightSearch} > Search </button><br></br><br></br><br></br>


                        {

                            flight.length > 0 ?

                                <table className="table">
                                   
                                    <tr>
                                    
                                        <th>FlightId</th>&nbsp;
                                        <th>From</th>&nbsp;&nbsp;                                        
                                        <th>To</th>&nbsp;&nbsp;
                                        <th>Flight Name</th>&nbsp;&nbsp;
                                        <th>Date</th>&nbsp;
                                        <th>Fare</th>&nbsp;
                                        <th>       </th>
                                    </tr>
                                    {
                                        flight.map((b, index) =>
                                            <tr key={index}>
                                                <td>{b.flightId} </td>&nbsp;
                                                <td>{b.fromLocation} </td>&nbsp;
                                                <td>{b.destination}</td>&nbsp;
                                                <td>{b.flightName}</td>&nbsp;

                                                <td>{b.date}</td>&nbsp;
                                                <td>{b.farePrice}</td>&nbsp;
                                                {/* <td><Link to="/booking/save">  Book  </Link></td> */}
                                                <td><Link to={`/booking/save/${b.flightId}/${b.farePrice}`}>Book</Link></td>

                                            </tr>
                                        )
                                    }
                                </table>
                                : <h6 style={{ color: "white" }}></h6>
                        }
                    </div>


                </div>

            </div>
        </body>
    )
}
export default FlightSearch;