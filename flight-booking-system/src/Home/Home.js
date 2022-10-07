// import HomeNavBar from "../Navbars/HomeNavBar";
import '../CSS/Home.css';
import Navbar from "../Navbars/Navabar";

function Home() {
    return (

        <div className="container-home">
           <Navbar/>


            <header>
                <h1 className="h1">
                    Welcome to Flight Booking System</h1>
            </header>


            <div className="home2">
                <h5 className="h5-info">Hassel-free ,affordable Flights</h5><br></br>
            </div>

            



        </div>


    )

}
export default Home;