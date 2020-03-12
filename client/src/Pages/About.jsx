import React, { Component } from "react";

import "./about.css";
class About extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div id="about">
        <div className="row">
          <div className="col m4 l3"></div>
          <div className="col s12 m7 l6">
            <div id="aboutCard" className="card">
              <div className="row center">
                <div className="col s12">
                  <img id="headshot" src="./headshotMe.png" alt="Ashley" />
                </div>
              </div>
              <div className="row center">
                <div id="paragraph" className="col s12">
                  <p>
                    I built this app using react, materialize, and firebase. The
                    purpose of this app is to utilize skills in react,
                    javascript and CRUD. Hope you like it!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
