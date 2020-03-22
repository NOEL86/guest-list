import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase, { auth, provider } from "../firebase.js";
import "./topnav.css";

export default class LoginNav extends Component {
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
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            {/* <li>
              <Link to="#" onClick={this.logout}>
                Log Out
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}
