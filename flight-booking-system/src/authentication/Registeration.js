import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../store/actions/UserAction";
import '../CSS/RegisterUser.css';

function Registration() {

    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userRole, setUserRole] = useState("");

    const [formErrors, setFormErrors] = useState({});

    const newUser = useSelector(state => state.userReducer.newUser)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = () => {


        let errors = {};
        if (!userName) {
            errors['userNameError'] = "User Name is required";
        }


        if (!mobileNumber) {
            errors['MobileNumberError'] = "Phone number cannot be empty";
        }

        var pattern = new RegExp(/^[6-9][0-9]{0,9}$/);
        if (!pattern.test(mobileNumber)) {
            errors["MobileNumberError"] = "Please enter only valid 10 digit phone numbers";

        }

        if (!age) {
            errors['AgeError'] = "Age is required";
        }          
        var pattern = new RegExp(/^[1-9]{1,2}$/);
        if (!pattern.test(age)) {
            errors["AgeError"] = "Please enter valid age";

        }

        if (!email) {
            errors['EmailError'] = "Email cannot be empty";
        }
      
            var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})*(\.\w{2,3})+$/);
            if (!pattern.test(email)) {
                errors["EmailError"] = "Please enter valid email address";

            }
        

        if (!password) {
            errors['PasswordError'] = "Password is required";
        }
        // var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,12}");
        // if (!pattern.test(password)) {
        //     errors["PasswordError"] = "Please enter valid Password,Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";

        // }

        if (!firstName) {
            errors['FirstNameError'] = "FirstName is required";
        }
        else if (firstName.length < 3) {
            errors['firstNameError'] = "FirstName should contain more than 3 characters "
        }
        var pattern = new RegExp(/^[A-Za-z]+$/);
        if (!pattern.test(firstName)) {
            errors["firstNameError"] =
                "Please type only alphabets not number or special character";
        }

        if (!lastName) {
            errors['LastNameError'] = "Last name is required";
        }
        var pattern = new RegExp(/^[A-Za-z]+$/);
        if (!pattern.test(firstName)) {
            errors["LastNameError"] =
                "Please type only alphabets not number or special character";
        }
        if (!userRole) {
            errors['UserRoleError'] = "Please select UserRole ";
        }

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        //if data is valid dispatch the requset to middleware
        if (noErrors) {
            const payload = {
                userId: userId,
                userName: userName,
                mobileNumber: mobileNumber,
                age: age,
                email: email,
                password: password,
                userRole: userRole,
                firstName: firstName,
                lastName: lastName
            }

            dispatch(addUser(payload));
            alert("User saved");
        }


    }

    return (
        <body className="reg-body">
            <div className="container-user">

                <div className="h2-regis">
                    <h2> Registration Form</h2><hr></hr>
                </div>


                <div className="form-group">
                    <label className="control-label" for="userName">Username
                        <input type="text" className="form-control" name="userName" placeholder='Enter userName' value={userName} onChange={e => setUserName(e.target.value)} />
                        {

                            formErrors.userNameError &&

                            <div style={{ color: "red" }}>{formErrors.userNameError}</div>

                        }</label>
                </div>

                <div className="form-group">
                    <label htmlFor='firstName' className="control-label"> First Name:
                        <input type="text" className="form-control" name="firstName" placeholder='Enter firstName' value={firstName} onChange={e => setFirstName(e.target.value)} />
                        {

                            formErrors.FirstNameError &&

                            <div style={{ color: "red" }}>{formErrors.FirstNameError}</div>

                        }</label>
                </div>

                <div className="form-group">
                    <label htmlFor='lastName' className="control-label">Last Name
                        <input type="text" className="form-control" name="lastName" placeholder='Enter Your Lastname' value={lastName} onChange={e => setLastName(e.target.value)} />
                        {

                            formErrors.LastNameError &&

                            <div style={{ color: "red" }}>{formErrors.LastNameError}</div>

                        } </label>
                </div>

                <div className="form-group">
                    <label htmlFor='email' className="control-label"> Email
                        <input type="text" className="form-control" name="email" placeholder='Enter email' value={email} onChange={e => setEmail(e.target.value)} />
                        {

                            formErrors.EmailError &&

                            <div style={{ color: "red" }}>{formErrors.EmailError}</div>

                        }</label>
                </div>

                <div className="form-group" >
                    <label htmlFor='password' className="control-label">Password:
                        
                        <input type="password" className="form-control" name="password" placeholder='Enter password' value={password} onChange={e => setPassword(e.target.value)} />
                       
                        {

                            formErrors.PasswordError &&

                            <div style={{ color: "red" }}>{formErrors.PasswordError}</div>

                        } </label>
                </div>    





                <div className="form-group">
                    <label htmlFor='mobileNumber'>Phone :
                        <input type="text" className="form-control" name="mobileNumber" placeholder='Enter mobileNumber' value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} />
                        {

                            formErrors.MobileNumberError &&

                            <div style={{ color: "red" }}>{formErrors.MobileNumberError}</div>

                        }
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor='age'>  Age:
                        <input type="text" className="form-control" name="age" placeholder='Enter age' value={age} onChange={e => setAge(e.target.value)} />
                        {

                            formErrors.AgeError &&

                            <div style={{ color: "red" }}>{formErrors.AgeError}</div>

                        }
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor='userRole' className="control-label">User Role:
                        <select className='form-control' name="userRole" value={userRole} onChange={e => setUserRole(e.target.value)}>
                            <option>----Select--------</option>
                            <option value={"user"}>User</option>
                            <option value={"admin"}>Admin</option>

                        </select>
                    </label>

                    {

                        formErrors.UserRoleError &&

                        <div style={{ color: "red" }}>{formErrors.UserRoleError}</div>

                    }
                </div>

                <div>
                    <button onClick={handleSubmit} className="btn btn-success">Register</button>
                </div>
                <div style={{ float: "right" }}>
                    <button onClick={() => navigate(-1)} className="btn btn-warning">Go to Home</button>
                </div>
            </div>
        </body>

    )










}
export default Registration;