import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

// import Cookies from 'js-cookie';
// import { userHandle, postHandle } from "../components/User";


function Login() {
    const [username, setUsername] = useState(""); // set the username state
    const [password, setPassword] = useState(""); // set the password state
    const navigate = useNavigate(); // use the navigate hook to redirect the user

    // const sampleUser = { // define a sample user
    //     username: "test",
    //     password: "test"
    //   };
      
      const handleSubmit = (e) => { // define function to handle the form submission
        // e.preventDefault(); // prevent the default action of the form submission
      
        // const username = e.target.elements.username.value; // get the username input value
        // const password = e.target.elements.password.value; // get the password input value
      
        // if (username === sampleUser.username && password === sampleUser.password) {
        //   // Perform the action when the input matches the sample user
          navigate('/Navigate'); // redirect user to the Navigation page after successful login
        // } else {
        //   // Handle the case when the input does not match the sample user
        //   console.log('Invalid credentials');
        //   // Display an error message to the user or perform other actions
        // }
      };
      
      
      

    const handleCancel = () => { // define function to handle the cancel button 
      navigate("/WelcomePage"); // redirect the user to the home page when the cancel button is clicked
    }
    

    return (
        // define the form to collect the user's username and password to log them in 
        <div className="login">
        <form onSubmit={handleSubmit} className="loginForm"> 
            <h1>Welcome Back!</h1>
                <br></br>
                <input type="text" value={username} placeholder="Username" onChange={e => setUsername(e.target.value)} required/>
                <br></br>
                <br></br>
                <input type="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)} required/>
                <br></br><br></br>
                <a href="/ForgotPassword">Forgot Password?</a>
                <br></br><br></br>
            <button classname="buttons" id="loginButton" type="submit">Login</button>
            <button id="cancelLogin" onClick={handleCancel}>Cancel</button>
        </form>
        </div>
    );
}
export default Login;