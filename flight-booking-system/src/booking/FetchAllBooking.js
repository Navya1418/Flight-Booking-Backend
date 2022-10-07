import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllBookings } from "../store/actions/BookingAction";
import '../CSS/AllBooking.css';
import LogoutNav from "../Navbars/LogoutNav";

function FetchAllBooking() {
    const bookings = useSelector(state => state.bookingReducer.bookings)
    const flight = useSelector(state => state.flightReducer.flight)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const myFunction = () => {
        dispatch(getAllBookings())
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
                        <h2> All Bookings</h2>
                    </div>


                    <div className="container-table">

                        {
                            bookings.length > 0 ?
                                <table border={1}>
                                    <tr>
                                        <th>bookingId</th>
                                        <th>firstName</th>
                                        <th>Lastname</th>
                                        <th>gender</th>
                                        <th>flightId</th>
                                        <th>farePrice</th>
                                        <th>View</th>
                                        <th>Delete</th>


                                    </tr>
                                    {
                                        bookings.map((b, index) =>
                                            <tr key={index}>
                                                <td>{b.bookingId} </td>
                                                <td>{b.firstName} </td>
                                                <td>{b.lastName}</td>
                                                <td>{b.gender}</td>
                                                <td>{b.flightId}</td>
                                                <td>{b.farePrice}</td>

                                                <td><Link to={`/booking/find/${b.bookingId}`}>View</Link></td>
                                                <td><Link to={`/booking/delete/${b.bookingId}`}>Delete</Link></td>


                                            </tr>
                                        )
                                    }
                                </table>
                                : <h3>No Bookings Available</h3>
                        }
                    </div>
                </div>

            </div>
        </body>
    )

}
export default FetchAllBooking;