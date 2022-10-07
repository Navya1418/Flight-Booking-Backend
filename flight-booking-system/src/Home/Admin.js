// import LogoutNav from "../Navbars/LogoutNav";
import '../CSS/Admin.css';
import { Link } from "react-router-dom";
import HomeNavBar from "../Navbars/HomeNavBar";
function Admin() {


    return (
        <body>

            <HomeNavBar/>
            <div class="container">
                <div>
                    <h2>Welcome Admin</h2><hr></hr>
                </div>
               




            </div>
        </body>
    )

}
export default Admin;



<div class="row row-flex">
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="price-table pt-bg-black">
                            <div>
                                <span>Flight</span>
                                <span>CRUD</span>
                                <span>Features included!</span>
                            </div>
                            <ul>
                                <li><Link to={'/flight/getall'} >All Flights </Link></li>
                                <li><Link to={"/flight/add/"}>Add Flight </Link></li>

                            </ul>

                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="price-table pt-bg-green">
                            <div>
                                <span>Fare</span>
                                <span>CRUD</span>
                                <span>Features included!</span>
                            </div>
                            <ul>
                                <li><Link to="/fare/all">All Fares</Link></li>
                                <li><Link to="/fare/add">Add fare </Link></li>
                            </ul>
                            {/* <a href="#">purchase</a> */}
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="price-table pt-bg-red">
                            <div>
                                <span>Booking</span>
                                <span>CRUD</span>
                                <span>Features included!</span>
                            </div>
                            <ul>
                                <li><Link to="/booking/all">All Bookings</Link></li>
                                
                            </ul>
                            {/* <a href="#">purchase</a> */}
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="price-table pt-bg-blue">
                            <div>
                                <span>Check-In</span>
                                <span>CRUD</span>
                                <span>Features included!</span>
                            </div>
                            <ul>
                            <li><Link to="/checkin/all">All Checkin</Link></li>
                            </ul>
                            {/* <a href="#">purchase</a> */}
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="price-table pt-bg-red">
                            <div>
                                <span>User</span>
                                <span>CRUD</span>
                                <span>Features included!</span>
                            </div>
                            <ul>
                            <li><Link to="/user/all">All users</Link></li>
                            </ul>
                            {/* <a href="#">purchase</a> */}
                        </div>
                    </div>
                </div>