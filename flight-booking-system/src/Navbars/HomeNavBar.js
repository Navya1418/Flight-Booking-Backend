import { Link, useParams } from 'react-router-dom';
import logo from '../images/logo.png';

function HomeNavBar() {   
   
    const { id } = useParams();

    return (
        <nav className="navbar navbar-expand-sm  navbar-dark sticky-top" style={{ fontSize: "30Px", marginLeft: "0px" }}>

            <Link className="nav-link" to="/"><img className="card-img-top rounded-circle" src={logo} style={{ width: "35px", height: "35px" }} alt="Card image" /></Link>

            <ul className="navbar-nav ml-auto">
                

                <li>
                    <button  class="btn btn-sm" >
                        <Link to="/login" className='nav-link'>Login
                       </Link>
                    </button>&nbsp;
                   

                </li>
               

                <li>
                    <button type="button" class="btn btn-sm btn-outline-success dropdown-toggle" data-toggle="dropdown">
                       Flight
                    </button>&nbsp;
                    <div class="dropdown-menu">
                    <a class="dropdown-item" href="/flight/getall/">All Flights</a>
                        <a class="dropdown-item" href="/flight/add/">Add Flight</a>
                        <a class="dropdown-item" href="/flight/delete/:id">Delete Flight</a>

                        {/* <a class="dropdown-item" href="/flight/search/">search flight</a> */}
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>

                </li>

                <li>
                    <button type="button" class="btn btn-sm btn-outline-success dropdown-toggle" data-toggle="dropdown">
                        Booking
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="/booking/all">All Bookings</a>
                        <a class="dropdown-item" href="/booking/search">Search Book</a>
                    </div>
                </li>

                <li>
                    <button type="button" class="btn btn-sm btn-outline-success dropdown-toggle" data-toggle="dropdown">
                        Fare
                    </button>&nbsp;
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="/fare/all">All Fares</a>
                        <a class="dropdown-item" href="/fare/search">Search fare</a>
                        <a class="dropdown-item" href="/fare/add">Add fare</a>
                    </div>

                </li>
                <li>
                    <button type="button" class="btn btn-sm btn-outline-success dropdown-toggle" data-toggle="dropdown">
                        USER
                    </button>&nbsp;
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="/user/add">Register</a>
                    </div>
                </li>
                <li>
                    <button type="button" class="btn btn-sm btn-outline-success dropdown-toggle" data-toggle="dropdown">
                        Checkin
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="/checkin/all">All Checkin</a>
                    </div>
                </li>
            </ul>
        </nav>
    )
}
export default HomeNavBar;