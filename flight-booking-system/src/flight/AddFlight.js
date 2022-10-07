import { addFlight } from "../store/actions/FlightAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoutNav from "../Navbars/LogoutNav";
import '../CSS/AddFlight.css';

function AddFlight() {

    const flight = useSelector(state => state.flightReducer.addFlight);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [aFlightId, setFlightId] = useState();
    const [aFromLocation, setFromLocation] = useState("");
    const [aDestination, setDestination] = useState("");
    const [aDate, setDate] = useState("");
    const [aFlightStatus, setFlightStatus] = useState("");
    const [aflightName, setFlightName] = useState("");
    const [aFlightType, setFlightType] = useState("");
    const [aFarePrice, setFarePrice] = useState();

    const handleSubmit = () => {

        const payload = {

            flightId: aFlightId,
            fromLocation: aFromLocation,
            destination: aDestination,
            date: aDate,
            flightName: aflightName,
            flightType: aFlightType,
            farePrice: aFarePrice

        }
        dispatch(addFlight(payload));

        alert("Flight added Successfully!!!" + flight.flightId);
        navigate(-1);

    }
    return (
        <body className="body-addflight">

            <div>
                <LogoutNav />


                <div className="container-addflight">
                    <div className="addflight-h2">
                        <h2 ><b>Add Flight </b></h2>
                    </div><hr></hr>

                    <div className="form-group">
                        <label htmlFor='aFlightType' class="control-label">Flight Type:
                            <select className='form-control' name="aFlightType" value={aFlightType} onChange={e => setFlightType(e.target.value)}>
                                <option>----Select--------</option>
                                <option value={"Domestic"}>Domestic</option>
                                <option value={"International"}>International</option>

                            </select>
                        </label>
                    </div>


                    <div>
                        <label htmlFor="aDate">
                            <b> Date: </b>
                            <input type="date" className="form-control" name="aDate" placeholder="Enter Date" value={aDate} onChange={e => setDate(e.target.value)} />
                        </label>
                    </div>

                    <div >
                        <label htmlFor="aFromLocation">
                            <b> From</b>
                            <input type="text" className="form-control" name="afromLocation" placeholder="Enter from Location " value={aFromLocation} onChange={e => setFromLocation(e.target.value)} />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="aDestination">
                            <b> Destination: </b>
                            <input type="text" className="form-control" name="aDestination" placeholder="Enter your Destination" value={aDestination} onChange={e => setDestination(e.target.value)} />
                        </label>
                    </div>


                    <div>
                        <label htmlFor="aflightName">
                            <b> Flight Name:</b>
                            <input type="text" className="form-control" name="aflightName" placeholder="Enter Flight Name" value={aflightName} onChange={e => setFlightName(e.target.value)} />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="aFareId">
                            <b> Fare Price:</b>
                            <input type="text" className="form-control" name="aFarePrice" placeholder="Enter FarePrice" value={aFarePrice} onChange={e => setFarePrice(e.target.value)} />
                        </label>
                    </div><br></br>
                    <div>
                        <button onClick={handleSubmit} className="btn btn-primary">
                            ADD Flight</button>&nbsp;
                    </div>
                    <div style={{ float: "right" }}>

                        <button onClick={() => navigate(-1)} className="btn btn-warning">Back</button>
                    </div>
                </div>



            </div>
        </body>
    )

}
export default AddFlight;