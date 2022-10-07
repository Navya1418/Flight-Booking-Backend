import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getBookingDetails } from "../store/actions/BookingAction";
import '../CSS/SearchBook.css';
import LogoutNav from "../Navbars/LogoutNav";

function SearchBooking() {

    const [bookingId, setBookingId] = useState("");
    const booking = useSelector(state => state.bookingReducer.booking)
    const flight=useSelector(state=>state.flightReducer.flight);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = () => {

        let errors = {};

        if (!bookingId) {
            errors['bookingIdError'] = "Please enter Id"
        }
        var pattern = new RegExp(/^[1-9]{1,9}$/);
        if (!pattern.test(bookingId)) {
            errors["bookingIdError"] = "Please enter valid Id";

        }
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
        dispatch(getBookingDetails(bookingId));}
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
                        <h2><b>Booking Details</b></h2><hr></hr>
                    </div><br></br>

                    <div><b>Booking ID: </b>&nbsp;

                        <label htmlFor="bookingId">
                            <input type="text" className="form-control" name="bookingId" value={bookingId} onChange={e => setBookingId(e.target.value)} />
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
                                <h2>Booking Details</h2>
                                <p><b>BookingId : </b>{booking.bookingId}</p>
                                <p><b>First Name :</b> {booking.firstName}</p>
                                <p><b>First Name :</b>{booking.lastName}</p>
                                <p><b>Gender : </b>{booking.gender}</p>
                                <p><b>Flight Id : </b>{booking.flightId}</p>
                                <p><b>Fare : </b>{booking.farePrice}</p>
                                <p> <Link to={`/checkin/add/${booking.flightId}`} className="btn btn-warning">Next</Link></p>
                                

                            </div>
                        }
                    </div>




                </div>
            </div>

        </body>
    )
}

export default SearchBooking;