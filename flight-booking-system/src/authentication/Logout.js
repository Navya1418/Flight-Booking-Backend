import { useEffect } from "react"
import { useNavigate } from "react-router";

function Logout() {

    const navigate = useNavigate();

    
    useEffect(() => {
        localStorage.removeItem('myUser');
      
        alert("Logged out successfully")
        navigate('/')
    })
    return (
       
        <div></div>
    )
}
export default Logout;