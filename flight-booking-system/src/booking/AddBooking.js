import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { saveBooking } from '../store/actions/BookingAction';
import '../CSS/AddBooking.css';
import LogoutNav from "../Navbars/LogoutNav";

function AddBooking() {

    const newBooking = useSelector(state => state.bookingReducer.newBooking)
    const flight = useSelector(state => state.flightReducer.flight)
    const fare = useSelector(state => state.fareReducer.fare)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id1 } = useParams();
    const { id2 } = useParams();


    const [bookingId, setBookingId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [flightId, setFlightId] = useState(id1);
    const [farePrice, setFarePrice] = useState(id2);
    const [pnrNo, setPnrNo] = useState("");

    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = () => {
        let errors = {};

        if (!firstName) {
            errors['firstNameError'] = "firstName is Required"
        }
        else if (firstName.length < 3) {
            errors['firstNameError'] = "FirstName should contain more than 3 characters "
        }
        else if (typeof firstName !== "undefined") {
            var pattern = new RegExp(/^[A-Za-z]+$/);
            if (!pattern.test(firstName)) {
                errors["firstNameError"] =
                    "Please type only alphabets not number or special character";
            }
        }


        if (!lastName) {
            errors['lastNameError'] = "lastName is Required"
        }
        else if (typeof firstName !== "undefined") {
            var pattern = new RegExp(/^[A-Za-z]+$/);
            if (!pattern.test(firstName)) {
                errors["firstNameError"] =
                    "Please type only alphabets not number or special character";
            }
        }
        else if (!lastName <= 0) {
            errors['lastNameError'] = "last name should be character "
        }

        if (!gender) {
            errors['genderError'] = "gender is Required"
        }
        else if (!gender) {
            errors['genderError'] = "please select gender"
        }
        if (!flightId) {
            errors['flightIdError'] = "flightId Id is Required"
        } else if (flightId <= 0) {
            errors['flightIdError'] = "flightId is in correct format"
        }



        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            const paylaod = {
                bookingId: bookingId,
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                flightId: flightId,
                farePrice: farePrice,
                pnrNo: pnrNo

            }
            dispatch(saveBooking(paylaod));
            alert("booking saved with" + bookingId)
        }
    }


    return (
        <body className='body-adbk'>
            <div >
                <LogoutNav />

                <div className='container-addbk'>


                    <div className='h2-adbk'>
                        <h2><b>Booking Form</b></h2><hr></hr>
                    </div><br></br>

                    <div> <b >Firstname: </b>&nbsp;
                        <label htmlFor="firstName">
                            <input type="text" className="form-control" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        </label>

                        {

                            formErrors.firstNameError &&

                            <div style={{ color: "red" }}>{formErrors.firstNameError}</div>

                        }

                    </div><br></br>

                    <div ><b >Lastname: </b>&nbsp;
                        <label htmlFor="lastName">
                            <input type="text" className="form-control" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                        </label>
                        {

                            formErrors.lastNameError &&

                            <div style={{ color: "red" }}>{formErrors.lastNameError}</div>

                        }

                    </div><br></br>

                    <div class="form-group">
                        <div class="maxl"><b>Gender:</b> &nbsp;
                            <label class="radio inline">
                                <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} ></input>
                                <span> Male </span>&nbsp;&nbsp;
                            </label>
                            <label class="radio inline">
                                <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} ></input>
                                <span>Female </span>
                            </label>
                            {

                                formErrors.genderError &&

                                <div style={{ color: "red" }}>{formErrors.genderError}</div>

                            }

                        </div>
                    </div>


                    <div>
                        <button onClick={handleSubmit} className="btn btn-success">BOOK</button>&nbsp;

                    </div>
                    <div style={{ float: "right" }}>
                        <p> <Link to="/search/booking" className="btn btn-sm btn-primary">Next</Link></p>

                    </div>


                    <div style={{ float: "left" }}>
                        <button onClick={() => navigate(-1)} className="btn btn-sm btn-warning">Back</button>
                    </div>
                    {
                        newBooking !== null &&
                        <div >

                            <div className='adbk-p'  >

                                <p >
                                    {/* <b>Booking Id:</b>{newBooking.booking.bookingId}&nbsp;&nbsp; */}
                                    {/* <b>Flight Id:</b>{newBooking.flight.flightId}&nbsp;&nbsp; */}
                                    <b>From: </b>{newBooking.flight.fromLocation}&nbsp;
                                    <b>To: </b>{newBooking.flight.destination}&nbsp;
                                    <b> Date: </b>{newBooking.flight.date}&nbsp;&nbsp;
                                    <b>Fare:</b>{newBooking.fare.farePrice}&nbsp;&nbsp;
                                    <b>PNR No:</b>{newBooking.booking.pnrNo}

                                </p>

                            </div>

                        </div>
                    }




                </div>

            </div>
        </body>
    )



}
export default AddBooking;