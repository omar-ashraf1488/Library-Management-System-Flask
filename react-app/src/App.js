import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import MainNavbar from "./components/navbar/MainNavbar";
import Home from "./components/pages/Home";
import Books from "./components/pages/BooksPage/Books";

import classes from "./App.module.css";

const App = () => {
  return (
    <Fragment>
      <MainNavbar />
      <div className={classes.app}>
        <Routes>
          <Route index exact element={<Home />} />
          <Route path="books" element={<Books />}>
            <Route path=":bookId" />
            <Route path="new" />
          </Route>
        </Routes>
      </div>
    </Fragment>
  );
};

export default App;
