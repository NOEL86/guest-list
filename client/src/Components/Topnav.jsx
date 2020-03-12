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
              <a href="#">Plans</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">
                Profile <i className=" material-icons left">account_circle</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
