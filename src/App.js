import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Header'
import Home from './Home';

function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route exact path="/login">
            <h1>Login</h1>
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
