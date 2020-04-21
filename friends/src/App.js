import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


//components
import {Login} from "./components/LoginPage";

function App() {

  return (
    <Router>
    <div className="App">
      <h1>Friends!</h1>
      <Switch>
      <Login />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
