import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

function EmployerSignUp() {
    const [FirstName, setFirstName] = useState(""); // set the username state
    const [MiddleName, setMiddleName] = useState(""); // set the username state
    const [LastName, setLastName] = useState(""); // set the username state
    const [CompanyName, setCompanyName] = useState(""); // set the username state
    const [Email, setEmail] = useState(""); // set the username state
    const [PhoneNumber, setPhoneNumber] = useState(""); // set the username state

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
          navigate('/Profile'); // redirect user to the Navigation page after successful login
        // } else {
        //   // Handle the case when the input does not match the sample user
        //   console.log('Invalid credentials');
        //   // Display an error message to the user or perform other actions
        // }
      };
    

    return (
        // define the form to collect the user's information to create an account
        <div className="login">
        <form onSubmit={handleSubmit} className="loginForm"> 
            <h1>Tell us about yourself...</h1>
                <br></br>
                <input type="text" value={FirstName} placeholder="First Name" onChange={e => setFirstName(e.target.value)} required/>
                <br></br>
                <input type="text" value={MiddleName} placeholder="Middle Name" onChange={e => setMiddleName(e.target.value)} required/>
                <br></br>
                <input type="text" value={LastName} placeholder="Last Name" onChange={e => setLastName(e.target.value)} required/>
                <br></br>
                <input type="text" value={CompanyName} placeholder="Company Name" onChange={e => setCompanyName(e.target.value)} required/>
                <br></br>
                <input type="text" value={Email} placeholder="Email" onChange={e => setEmail(e.target.value)} required/>
                <br></br>
                <input type="text" value={PhoneNumber} placeholder="Phone Number" onChange={e => setPhoneNumber(e.target.value)} required/> 
                <br></br>  
                <label for="cars">Write a short bio about yout business:</label> 
                <br></br>    
                <textarea id="bio" name="bio" rows="4" cols="50"></textarea>        
                <br></br>
            <button classname="buttons" id="getstarted" type="submit" onClick={handleSubmit}>Get started!</button>
        </form>
        </div>
    );
}
export default EmployerSignUp;