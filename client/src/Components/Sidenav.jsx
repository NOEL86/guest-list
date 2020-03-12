import React, { Component } from "react";
import M from "materialize-css";
import "./sidenav.css";
export default class Sidenav extends Component {
  componentDidMount() {
    // M.AutoInit();
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".modal");
      M.Modal.init(elems);
    });
  }
  render() {
    return (
      <div id="side-nav">
        <ul id="slide-out" className="sidenav sidenav-fixed">
          <li>
            <a href="#!" className="modal-trigger" href="#modal1">
              Guest List <i className="small material-icons left">people</i>
            </a>
          </li>
          <li>
            <a href="#!">
              Budget Manager
              <i className="small material-icons left">attach_money</i>
            </a>
          </li>
        </ul>
        <a href="#" datatarget="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    );
  }
}
