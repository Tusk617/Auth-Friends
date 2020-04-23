import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import "./App.css"


//components
import {Login} from "./components/LoginPage";
import {FriendsList} from "./components/Friends";
import PrivateRoute from "./components/ProtectedRoute";

function App() {

  return (
    <Router>
    <div className="App">
      <p>Note: This project requires a server to be able to log in</p>
      <header>
        <nav className="links">
          <Link to="/login">Login</Link>
          <Link to="/protected">FriendsList</Link>
        </nav>
      </header>
      <Switch>
        
        <PrivateRoute exact path="/protected" component={FriendsList} />
        
        <Route path="/login" component={Login}/>
        <Route component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
