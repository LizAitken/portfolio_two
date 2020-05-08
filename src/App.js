import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
// import configureStore from './store/configure-store';

import Homepage from './components/homePage';
import './App.css';

function App() {
  return (
      <Router>
        <Route path='/portfolio_two' exact render={Homepage}/>
      </Router>
  );
}

export default App;
