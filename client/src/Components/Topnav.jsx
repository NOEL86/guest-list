import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase, { auth, provider } from "../firebase.js";
import "./topnav.css";

export default class Topnav extends Component {
  logout = e => {
    firebase
      .auth()
      .signOut()
      .then(
        function() {
          console.log("Signed Out");
          window.location.href = "/";
        },
        function(error) {
          console.error("Sign Out Error", error);
        }
      );
  };
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
              <Link to="/profile">
                Profile{" "}
                <i
                  className="material-icons left modal-trigger"
                  data-target="modalP"
                >
                  account_circle
                </i>
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => this.logout()}>
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
