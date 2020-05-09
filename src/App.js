import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from './components/homePage';
import './App.css';

function App() {
  return (
      <Router>       
          <Route path='/' exact render={Homepage}/>
      </Router>
  );
}

export default App;
