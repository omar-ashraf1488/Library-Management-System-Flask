import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Books from "./components/pages/Books";
import SignUp from "./components/pages/SignUp";
import MainNavbar from "./components/navbar/MainNavbar";

const App = () => {
  return (
    <Fragment>
      <Router>
        {/* <Navbar /> */}
        <MainNavbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/books" element={<Books/>} />
          <Route path="/sign-up" element={<SignUp/>} />
        </Routes>
      </Router>
      
    </Fragment>
  );
};

export default App;
