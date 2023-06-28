import React from 'react';
import { useNavigate } from 'react-router-dom';


function WelcomePage() { // define the WelcomePage component

    const navigate = useNavigate(); // use the navigate hook to redirect the user

    const handleLogin = () => { // define the handleLogin function
        navigate("/LogIn"); // navigate to the LogIn page when the Logon button is clicked
    }

    const handleCreateAccount = () => { // define the handleCreateAccount function
        navigate("/Navigate"); // navigate to the Navigation page when the Create Account button is clicked

    }
    return (
        <div className="welcome"> {/* returns a div with the following content for the welcome page*/}
            <h1>Welcome</h1>
            <button className="login" onClick={handleLogin}>Log In</button>
            <br></br><br></br>
            <button className="signup" onClick={handleCreateAccount}>Create Account</button> 
        </div>
    );
}


export default WelcomePage;