import React, { Component } from "react";
import Sidenav from "../Components/Sidenav";
import Topnav from "../Components/Topnav";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Topnav />
        <Sidenav />
      </div>
    );
  }
}
