import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import SoftwarePage from './components/softwarePage';
import Homepage from './components/homePage';
// import { information } from './components/information';
import './App.css';

function App() {
  return (
    <Router>
      <Route path='/' exact render={Homepage}/>
      <Route path='/software-development' component={SoftwarePage}/>
    </Router>
  );
}

export default App;
