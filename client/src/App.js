import React from "react";
// import logo from './logo.svg';
// import "./App.css";
import { Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
