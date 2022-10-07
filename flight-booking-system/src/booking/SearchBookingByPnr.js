import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getBookingDetails, getBookingDetailsByPnr } from "../store/actions/BookingAction";
import '../CSS/SearchBook.css';
import LogoutNav from "../Navbars/LogoutNav";

function SearchBookingByPnr() {

    const [pnrNo, setPnrNo] = useState("");
    const booking = useSelector(state => state.bookingReducer.booking)
    const flight = useSelector(state => state.flightReducer.flight);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = () => {

        let errors = {};

        if (!pnrNo) {
            errors['bookingIdError'] = "Please enter PNR number"
        }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            dispatch(getBookingDetailsByPnr(pnrNo));
        }
    }

    return (

        <body className="bd-srbk">
            <div >
                <LogoutNav />
                <div className='container-srbk'>
                    <div style={{ float: "left" }}>
                        <button onClick={() => navigate(-1)} className="btn btn-secondary">Back</button>
                    </div><br></br><br></br>
                    <div className='h2-srbk'>
                        <h3><b>Search Your Booking Details</b></h3><hr></hr>
                    </div><br></br>

                    <div><b>Pnr num: </b>&nbsp;

                        <label htmlFor="pnrNo">
                            <input type="text" className="form-control" name="pnrNo" value={pnrNo} onChange={e => setPnrNo(e.target.value)} />
                        </label>
                        {

                            formErrors.bookingIdError &&

                            <div style={{ color: "red" }}>{formErrors.bookingIdError}</div>

                        }
                    </div><br></br>

                    <div>

                        <button onClick={handleSubmit} className="btn btn-success"> Submit </button><hr></hr>
                        {
                            booking !== null &&
                            <div>
                                <h4>Your Booking Details</h4>
                                {/* <p><b>BookingId : </b>{booking.bookingId}</p> */}
                                <p><b>First Name :</b> {booking.firstName}</p>
                                <p><b>First Name :</b>{booking.lastName}</p>
                                <p><b>Gender : </b>{booking.gender}</p>
                                <p><b>Flight Id : </b>{booking.flightId}</p>
                                <p><b>Fare : </b>{booking.farePrice}</p>


                                <p> <Link to={`/payment/${booking.farePrice}`} className="btn btn-warning">Next</Link></p>


                            </div>
                        }
                    </div>




                </div>
            </div>

        </body>
    )
}

export default SearchBookingByPnr;