// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './authentication/Login';
import Logout from './authentication/Logout';

import Registration from './authentication/Registeration';

import AddBooking from './booking/AddBooking';
import DeleteBooking from './booking/DeleteBooking';
import FetchAllBooking from './booking/FetchAllBooking';
import FetchBookingById from './booking/FetchBookingById';
import SearchBooking from './booking/SearchBooking';
import SearchBookingByPnr from './booking/SearchBookingByPnr';
import AddCheckin from './checkin/AddCheckin';
import CheckinById from './checkin/CheckinById';
import DeleteCheckin from './checkin/DeleteCheckin';
import FetchAllCheckIn from './checkin/FetchAllCheckIn';
import SearchCheckin from './checkin/SearchCheckin';
import AddFare from './fare/AddFare';
import AllFares from './fare/AllFares';
import DeleteFare from './fare/DeleteFare';
import FetchAllFare from './fare/FetchAllFare';
import FetchFareById from './fare/FetchFareById';
import SearchFare from './fare/SearchFare';
import AddFlight from './flight/AddFlight';
// import AvailableFlights from './flight/AvailableFlights';
import DeleteFlight from './flight/DeleteFlight';
import FetchAllFlights from './flight/FetchAllFlights';
import FetchFlightById from './flight/FetchFlightById';
import FlightSearch from './flight/FlightSearch';
import Admin from './Home/Admin';
import Home from './Home/Home';
import RazorPay from './payment/RazorPay';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/flight/getall' element={<FetchAllFlights />} />
          <Route path='/flight/add' element={<AddFlight />} />         
          <Route path='/flight/search/' element={<FlightSearch/>}/>
          <Route path='/flight/delete/:id' element={<DeleteFlight />} />
          <Route path='/booking/save/:id1/:id2' element={<AddBooking />} />
          <Route path='/booking/delete/:id' element={<DeleteBooking />} />
          <Route path='/flight/get/:id' element={<FetchFlightById/>}/>
          <Route path='/checkin/add/:id' element={<AddCheckin/>}/>
          <Route path='/booking/all' element={<FetchAllBooking/>}/>
          <Route path='/booking/search' element={<SearchBooking/>}/>
          <Route path='/booking/find/:id' element={<FetchBookingById/>}/>
          <Route path='/checkin/find/:id' element={<CheckinById/>}/>
          <Route path='/fare/find/:id' element={<FetchFareById/>}/>
          <Route path='/fare/search' element={<SearchFare/>}/>
          <Route path='/checkin/all' element={<FetchAllCheckIn/>}/>
          <Route path='/checkin/delete/:id' element={<DeleteCheckin/>}/>
          <Route path='/fare/add' element={<AddFare/>}/>
          <Route path='/user/add' element={<Registration/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/payment/:id' element={<RazorPay/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/fare/all' element={<FetchAllFare/>}/>
          <Route path='/all/fare' element={<AllFares/>}/>
          <Route path='/fare/delete/:id' element={<DeleteFare/>}/>
          <Route path='/checkin/search' element={<SearchCheckin/>}/>
          <Route path='/search/booking' element={<SearchBookingByPnr/>}/>
          
          
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
