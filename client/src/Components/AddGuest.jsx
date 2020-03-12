import React, { Component } from "react";

export default class AddGuest extends Component {
  render() {
    return (
      <div>
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close  btn-flat">
              Agree
            </a>
          </div>
        </div>
      </div>
    );
  }
}
