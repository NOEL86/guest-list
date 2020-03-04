import React, { Component } from "react";
import M from "materialize-css";
import "./sidenav.css";
export default class Sidenav extends Component {
  componentDidMount() {
    // M.AutoInit();
  }
  render() {
    return (
      <div id="side-nav">
        <ul id="slide-out" className="sidenav sidenav-fixed">
          <li>
            <a href="#!">First Sidebar Link</a>
          </li>
          <li>
            <a href="#!">Second Sidebar Link</a>
          </li>
        </ul>
        <a href="#" datatarget="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    );
  }
}
