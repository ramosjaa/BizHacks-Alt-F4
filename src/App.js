// importing necessary components
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import WelcomePage from "./WelcomePage";
import LogIn from "./LogIn.js";
import EmployeeSignUp from "./EmployeeSignUp";
import EmployerSignUp from "./EmployerSignUp";
import Navigate from "./Navigate";
import JobSearchPage from './JobSearchPage';
// import Profile from "./Profile";

function App() { // main function
  return ( // returns the following
    // router component to route to different pages
    <Router> 
      <div className="App">
        <Routes>{/* the paths to the different pages */}
          <Route path="/WelcomePage" element={<WelcomePage />} />
          <Route path="/Login" element={<LogIn />} />
          <Route path="/EmployeeSignUp" element={<EmployeeSignUp />} />
          <Route path="/EmployerSignUp" element={<EmployerSignUp />} />
          <Route path="/Navigate" element={<Navigate />} />
          <Route path="/JobSearchPage" element={<JobSearchPage />} />
        </Routes>
      </div>      
    </Router>
  );
}

export default App;
