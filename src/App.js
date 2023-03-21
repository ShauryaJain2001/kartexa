import './App.css';
import Home from './home/home.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
