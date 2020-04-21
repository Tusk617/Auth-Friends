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
      <h1>Friends!</h1>
      <Switch>
        <PrivateRoute exact path="/protected" componenet={FriendsList} />
        <Route path="/login" componenet={Login}/>
        <Route component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
