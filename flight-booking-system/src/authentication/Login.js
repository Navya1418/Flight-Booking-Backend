import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import LogoutNav from '../Navbars/LogoutNav';
import { doLogin } from '../store/actions/UserAction';



function Login() {
    const loggedInUser = useSelector(state => state.userReducer.loggedInUser)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formErrors, setFormErrors] = useState({});


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userRole, setUserRole] = useState("");

    const doSignIn = () => {

        let errors = {};
        if (!username) {
            errors['UsernameError'] = "username cannot be empty";
        }
       
        if (!password) {
            errors['passwordError'] = "Password cannot be empty";
        }
        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            console.log("data is valid");
            const payload = {
                username: username,
                password: password,
                userRole: userRole
            }
            dispatch(doLogin(payload));
        }

    }

    return (
        
        <div className="container-login">
            <LogoutNav />
            <header>
                <h1 className="h1">
                    Welcome to Flight Booking System</h1>
            </header>


            {/* <div className="home2">
                <h5 className="h5-info">Hassel-free ,affordable Flights</h5><br></br>
            </div> */}
            {
                
                loggedInUser !== null ?
                
                loggedInUser.userRole === "admin" ?
                
                navigate("/admin")
                :
                    navigate('/flight/search')
                    
                    :
                    
                    
                    
                    <div>
                        <div>
                            <h2 className='h2-loginpage'>Login Page</h2><br></br>
                            

                        </div>




                        <div className="form-group">
                            <label htmlFor='email'>Username
                                <input type="username" className="form-control" placeholder="Enter your userName" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                            </label>
                            {
                                formErrors.UsernameError &&
                                <div style={{ color: 'red' }}>{formErrors.UsernameError}</div>
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor='password'>Password:
                                <input type="password" className="form-control" name="password" placeholder="Enter your Password" value={password} onChange={e => setPassword(e.target.value)} />
                            </label>
                            {
                                formErrors.passwordError &&
                                <div style={{ color: 'red' }}>{formErrors.passwordError}</div>
                            }
                        </div>

                        <div className="form-group">
                            <label htmlFor='userRole'>UserRole:
                            <select type='userRole' className='form-control' name="userRole" value={userRole} onChange={e => setUserRole(e.target.value)}>
                                <option>----Select--------</option>
                                <option value={"user"}>User</option>
                                <option value={"admin"}>Admin</option>

                            </select>
                            </label>
                            
                        </div>

                        <div>
                            <button onClick={doSignIn} className="btn btn-outline-success">Login</button>&nbsp;

                            


                        </div>&nbsp;&nbsp;
                        <div>
                            <p style={{color:"red"}}>If you are not a registered User, Please <Link to={'/user/add'}>Register</Link></p>
                        </div>






                    </div>

            }
           
        </div>
    )
}

export default Login;