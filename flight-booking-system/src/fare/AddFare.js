import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFare } from "../store/actions/FareAction";

function AddFare() {
    const fare = useSelector(state => state.flightReducer.addFare);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [fareId, setFareId] = useState();
    const[fareType,setFareType]=useState("");
    const[farePrice,setFarePrice]=useState("");


    const handleSubmit = () => {

        const payload = {
            fareId: fareId,
            farePrice:farePrice,
            fareType:fareType
           

        }
        dispatch(addFare(payload));

        alert("Fare added Successfully!!!" + fare.fareId);
        navigate(-1);

    }
    return (
        <div>
            <h2 style={{ fontStyle: "italic", color: "blue" }}>Adding Fare </h2>

           

            <div className="form-group">
                    <label htmlFor='fareType' class="control-label">Fare Type:
                        <select className='form-control' name="fareType" value={fareType} onChange={e => setFareType(e.target.value)}>
                            <option>----Select--------</option>
                            <option value={"Premium "}>Premium</option>
                            <option value={"Business"}>Business</option>
                            <option value={"Economy"}>Economy</option>

                        </select>
                    </label>

                    
                </div>

                <div >
                <label htmlFor="farePrice">
                    <b> Fare:</b>
                    <input type="text" className="form-control" name="farePrice" placeholder="Enter Fare " value={farePrice} onChange={e => setFarePrice(e.target.value)} />
                </label>
            </div>
            
           

            
            <div>
                <button onClick={handleSubmit} className="btn btn-secondary">
                    ADD FARE</button>&nbsp;
            </div>
            <div style={{ float: "left" }}>
            
            <button onClick={() => navigate(-1)} className="btn btn-secondary">Back</button>
            </div>







        </div>
    )

}
export default AddFare;