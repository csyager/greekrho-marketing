import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home.js';
import Register from './components/Register.js';
import Demos from './components/Demos.js';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/demos">
          <Demos />
        </Route>
        <Route path="/greekrho+">
          <Register />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
