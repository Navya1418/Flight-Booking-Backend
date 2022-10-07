import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import LogoutNav from "../Navbars/LogoutNav";
import { getFareDetails } from '../store/actions/FareAction';

function FetchFareById() {

    const fare = useSelector(state => state.fareReducer.fare)
    const { id } = useParams();
    const dispatch = useDispatch();

    const fetchFareById = () => {
        dispatch(getFareDetails(id));
    }
    useEffect(fetchFareById, [id]);


    return (
        <div>
            <LogoutNav />
            <div className='contrainer-bkbyid'>
                <div className="h2-bkdetails">
                    <h3> Fare Details</h3>
                </div><hr></hr>

                {
                    fare !== null &&
                    <div>


                        <h3>Fare Details</h3>
                        <p>Id: {fare.fareId}</p>
                        <p>Fare Type: <b>{fare.fareType}</b></p>
                        <p>Fare Price: {fare.farePrice} </p>

                    </div>
                }
                <div>
                    <Link to="/fare/all" className="btn btn-secondary">Back</Link>
                </div>
            </div>
        </div>
    )
}
export default FetchFareById;


