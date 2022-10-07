import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LogoutNav from "../Navbars/LogoutNav";
import { getAllFares } from "../store/actions/FareAction";

function FetchAllFare(){
    const fares = useSelector(state => state.fareReducer.fares)
    const flight = useSelector(state => state.flightReducer.flight)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const myFunction = () => {
        dispatch(getAllFares())
    };

    useEffect(() => {
        myFunction();
    }, []);

    return (
        <body className="body-allbooking">
            <div >
                <LogoutNav />
                <div className="container-allbooking">

                    <div style={{ float: "left" }}>

                        <button onClick={() => navigate('/admin')} className="btn btn-secondary">Back</button>
                    </div><br></br>

                    <div className="h2-allbook">
                        <h2> All Fares</h2>
                    </div>


                    <div className="container-table">

                        {
                            fares.length > 0 ?
                                <table class="table">
                                    <tr>
                                        <th>fareId</th>
                                        <th>premium</th>
                                        <th>economy</th>
                                        
                                        
                                        <th>View</th>
                                        <th>Delete</th>


                                    </tr>
                                    {
                                        fares.map((b, index) =>
                                            <tr key={index}>
                                                <td>{b.fareId} </td>
                                                <td>{b.fareType} </td>
                                                <td>{b.farePrice}</td>
                                                
                                                

                                                <td><Link to={`/fare/find/${b.fareId}`}>View</Link></td>
                                                <td><Link to={`/fare/delete/${b.fareId}`}>Delete</Link></td>


                                            </tr>
                                        )
                                    }
                                </table>
                                : <h3>No Fares Available</h3>
                        }
                    </div>
                </div>

            </div>
        </body>
    )
}
export default FetchAllFare;