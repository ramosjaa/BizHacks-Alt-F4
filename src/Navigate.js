import React from 'react';
import { useNavigate } from 'react-router-dom';


function Navigate() { // define the WelcomePage component

    const navigate = useNavigate(); // use the navigate hook to redirect the user

    const handleHiring = () => { // define the handleLogin function
        navigate("/EmployerSignUp"); // navigate to the LogIn page when the Logon button is clicked
    }

    const handleApplying = () => { // define the handleLogin function
        navigate("/EmployeeSignUp"); // navigate to the LogIn page when the Logon button is clicked
    }

    return (
        <div className="welcome"> {/* returns a div with the following content for the welcome page*/}
            <h1>Hi, what are you looking to do today?</h1>
            <button className="hiring" onClick={handleHiring}>I'm Hiring</button>
            <br></br><br></br>
            <button className="apply" onClick={handleApplying}>I'm Applying</button> 
        </div>
    );
}


export default Navigate;