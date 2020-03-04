import React from "react";
// import logo from './logo.svg';
// import "./App.css";
import { Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/contact" component={Contact} />
            <Route exact path="/assembly" component={Assembly} /> */}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
