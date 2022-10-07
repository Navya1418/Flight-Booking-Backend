import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import '../CSS/SearchBook.css';
import LogoutNav from "../Navbars/LogoutNav";
import { getCheckinDetails } from "../store/actions/CheckinAction";

function SearchCheckin(){
    const [checkInId, setCheckInId] = useState("");
    const checkIn = useSelector(state => state.checkinReducer.checkin)
    const flight=useSelector(state=>state.flightReducer.flight);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = () => {

        let errors = {};

        if (!checkInId) {
            errors['bookingIdError'] = "Please enter Id"
        }
        var pattern = new RegExp(/^[1-9]{1,9}$/);
        if (!pattern.test(checkInId)) {
            errors["bookingIdError"] = "Please enter valid Id";

        }
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
        dispatch(getCheckinDetails(checkInId));}
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
                        <h3><b>Checkin Details</b></h3><hr></hr>
                    </div><br></br>

                    <div><b>Checkin Id: </b>&nbsp;

                        <label htmlFor="checkInId">
                            <input type="text" className="form-control" placeholder="Enter your Checkin-Id" name="checkInId" value={checkInId} onChange={e => setCheckInId(e.target.value)} />
                        </label>
                        {

                            formErrors.bookingIdError &&

                            <div style={{ color: "red" }}>{formErrors.bookingIdError}</div>

                        }
                    </div><br></br>

                    <div>

                        <button onClick={handleSubmit} className="btn btn-success"> Submit </button><hr></hr>
                        {
                            checkIn !== null &&
                            <div>
                                <h4> Your Checkin Details</h4>
                                <p>Check-In Id : <b>{checkIn.checkInId}</b></p>
                                <p>Status :<b> {checkIn.status}</b></p>
                                <p>Seat number :<b>{checkIn.seatNo}</b></p>
                                {/* <p>PNR number : <b>{checkIn.pnrNo}</b></p> */}
                                
                               
                                {/* <p> <Link to={`/checkin/add/${checkIn.flightId}`} className="btn btn-warning">Next</Link></p> */}
                                <p> <Link to="/" className="btn btn-warning">Exit </Link></p>
                                

                            </div>
                        }
                    </div>




                </div>
            </div>

        </body>
    )

}
export default SearchCheckin;