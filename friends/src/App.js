import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


//components
import {Login} from "./components/LoginPage";
import {FriendsList} from "./components/Friends";
import PrivateRoute from "./components/ProtectedRoute";

function App() {

  return (
    <Router>
    <div className="App">
      <header>
        <nav>
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
