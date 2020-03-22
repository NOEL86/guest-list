import React, { Component } from "react";
// import M from "materialize-css";

export default class AddGuest extends Component {
  // componentDidMount() {
  //   M.AutoInit();
  // }
  render() {
    return (
      <div>
        <div id="modalOne" className="modal">
          <div id="modal-content" className="modal-content">
            <h4>Add Guest</h4>
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
