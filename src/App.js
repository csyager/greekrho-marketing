import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home.js';
import Register from './components/Register.js';
import Documentation from './components/Documentation.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
	<>
		<div className="content-div">
    <Router>
      <Switch>
        <Route path="/documentation">
          <Documentation />
        </Route>
        <Route path="/greekrho+">
          <Register />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
		</div>
		{/* <Footer /> */}
	</>
  );
}

export default App;
