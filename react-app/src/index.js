import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import Books from './components/pages/BooksPage/Books';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/books" element={<Books />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
