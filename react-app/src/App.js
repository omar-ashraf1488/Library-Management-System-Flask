import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <Fragment>
     <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
     
    </Fragment>
  );
};

export default App;
