

import React from 'react';
import './App.css';
import  { BrowserRouter as Router , Route } from 'react-router-dom';
import {Switch}  from 'react-router';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './components/Quiz';
//import Home from './components/Home';
function App() {
  return (

     <Router>
    <div className="App">
       <Header/>
      
      <Quiz/>
      
     
      
    </div>
    </Router>
  );
}

export default App;
