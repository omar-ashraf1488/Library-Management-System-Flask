import React, { Fragment } from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
