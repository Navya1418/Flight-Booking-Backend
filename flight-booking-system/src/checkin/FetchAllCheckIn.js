import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCheckin } from "../store/actions/CheckinAction";
import flight3 from '../images/flight4.webp';
import { Link, useNavigate } from "react-router-dom";
import LogoutNav from "../Navbars/LogoutNav";

function FetchAllCheckIn() {


    const checkins = useSelector(state => state.checkinReducer.checkins)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const myFunction = async () => {
        dispatch(getAllCheckin())
    };
    useEffect(() => { myFunction() }, []);


    return (

       
            <body className="body-allbooking">
                <div >
                    <LogoutNav />
                    <div className="container-allbooking">

                        <div style={{ float: "left" }}>

                            <button onClick={() => navigate(-1)} className="btn btn-secondary">Back</button>
                        </div><br></br>

                        <div className="h2-allbook">
                            <h2> CHECK-INS</h2>
                        </div>



                        {
                            checkins.length > 0 ?
                                <table className="table">
                                    <tr>
                                        <th>CheckinId</th>
                                        <th>FlightId</th>
                                        <th>SeatNumber</th>
                                        <th>Status</th>

                                        <th>View</th>
                                        <th>Delete</th>


                                    </tr>
                                    {
                                        checkins.map((b, index) =>
                                            <tr key={index}>
                                                <td>{b.checkInId} </td>
                                                <td>{b.flightId}</td>
                                                <td>{b.seat}</td>
                                                <td>{b.status}</td>

                                                <td><Link to={`/checkin/find/${b.checkInId}`}>View</Link></td>
                                                <td><Link to={`/checkin/delete/${b.checkInId}`}>Delete</Link></td>


                                            </tr>
                                        )
                                    }
                                </table>
                                : <h3>No Checkin Available</h3>
                        }

                    </div>
                </div>
                
            </body>




            )

}
            export default FetchAllCheckIn;