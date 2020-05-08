import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";


import Homepage from './components/homePage';
import './App.css';

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} exact render={Homepage}/>
        </Switch>
      </Router>
  );
}

export default App;
