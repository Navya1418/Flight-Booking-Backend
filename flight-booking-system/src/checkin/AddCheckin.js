import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { addCheckin } from "../store/actions/CheckinAction";
import '../CSS/AddCheckin.css';

function AddCheckin() {
    const checkin = useSelector(state => state.checkinReducer.addCheckin);
    const flight = useSelector(state => state.flightReducer.flight);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const [checkInId, setCheckInId] = useState("");
    const [status, setStatus] = useState("");
    // const [flightId, setFlightId] = useState(id);
    const [seatNo, setSeatNo] = useState("");
    const [pnrNo, setPnrNo] = useState("");

    const handleSubmit = () => {

        const payload = {
            checkInId: checkInId,
            status: status,
            // flightId: flightId,
            seatNo: seatNo,
            pnrNo: pnrNo
        }
        dispatch(addCheckin(payload));
        alert("Checkin added Successfully!!!");


    }
    return (
        <body className="checkin-body">
            <div >

                <div className="container-checkinAdd">
                    <h2 className="h2-checkinAdd"><b>CHECK-IN FORM</b> </h2><br></br>



                    {/* <div>
                        <label htmlFor="seatNo"><b> Seat number: </b>

                            <input type="text" className="form-control" name="seatNo" placeholder="Select your Seat" value={seatNo} onChange={e => setSeatNo(e.target.value)} />
                        </label>
                    </div> */}

                    <div className="form-group">
                        <label htmlFor='status' class="control-label">Do you want to checkin?
                            <select className='form-control' name="status" value={status} onChange={e => setStatus(e.target.value)}>
                                <option>----Select--------</option>
                                <option value={"CheckedIn"}>Yes</option>
                                
                                <option value={"Cancelled"}>No</option>
                                {/* {
                                    status === "Cancelled" &&
                                    
                                    navigate('-1')
                                } */}

                            </select>
                        </label>
                    </div>

                    {/* <div>
                        <label htmlFor="pnrNo"><b> PNR number: </b>

                            <input type="text" className="form-control" name="pnrNo" placeholder="Select your Seat" value={seat} onChange={e => setSeat(e.target.value)} />
                        </label>
                    </div> */}

                    <div>
                        <button onClick={handleSubmit} className="btn btn-success">
                            CHECK-IN</button>&nbsp;
                    </div><br></br><hr></hr>
                    {
                        checkin !== null &&
                        <div >

                            <div className='addcheckin-p'  >


                                <p >Your CheckinId is:<b>{checkin.checkInId}</b></p>
                                    {/* status:<b> {checkin.status}</b>&nbsp;
                                    PNR:<b>{checkin.pnrNo}</b>&nbsp;
                                    Seat Number: <b>{checkin.seatNo}</b></p>&nbsp;&nbsp; */}


                            </div>
                        </div>
                    }
                    <div style={{ float: "right" }}>

                        <Link to="/checkin/search" className="btn btn-warning">Next</Link>
                    </div>
                    <div style={{ float: "left" }}>

                        <button onClick={() => navigate(-1)} className="btn btn-warning">Back</button>
                    </div>
                </div>
            </div>
        </body>

    )









}
export default AddCheckin;