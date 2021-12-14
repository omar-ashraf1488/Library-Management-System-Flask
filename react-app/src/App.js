import React, { Fragment } from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Header from "./components/Header/Header"
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
      <Header/>
    </Fragment>
  );
};

export default App;
