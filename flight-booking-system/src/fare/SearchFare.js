import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFareDetails } from "../store/actions/FareAction";


function SearchFare() {

    const [fareId, setFareId] = useState("");
    const fare = useSelector(state => state.fareReducer.fare)

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(getFareDetails(fareId));
    }

    return (

        <div className='contrainer-fluid'>
           
            <label htmlFor="fareId"><b className="h">FareId</b>
                <input type="text" className="form-control" name="fareId" value={fareId} onChange={e => setFareId(e.target.value)} />
            </label>
            <button onClick={handleSubmit}> Submit </button>
            {
                fare !== null &&
                <div>
                    <h3>Fare Details</h3>
                        <p>Id: {fare.fareId}</p>
                        <p>Economy Fare: <b>{fare.economyFare}</b></p>
                        <p>premiumFare: {fare.premiumFare} </p>                       
                        <p>businessFare: {fare.businessFare}</p>
                </div>
            }
            <div>
                <Link to="/" className="btn btn-secondary">Back</Link>
            </div>
            {/* <div>
                <Link to="/" className="btn btn-secondary">checkin</Link>
            </div> */}
        </div>
    )
}

export default SearchFare;