import React, { Component } from "react";
import "./topnav.css";

export default class Topnav extends Component {
  render() {
    return (
      <nav id="top-nav">
        <div className="nav-wrapper">
          <a id="logo" href="#" className="brand-logo">
            Guest List
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
