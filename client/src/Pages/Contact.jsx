import React, { Component } from "react";
import Topnav from "../Components/Topnav";
import "./contact.css";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fName: "",
      lName: "",
      comment: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleContact = this.handleContact.bind(this);
    // this.validatePhone = this.validatePhone.bind(this);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    // console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  handleContact = e => {
    e.preventDefault();
    console.log("submit button clicked");

    const contactInfo = {
      firstName: this.state.fName,
      lastName: this.state.lName,
      email: this.state.email,
      comment: this.state.comment
    };

    console.log(contactInfo);
  };
  render() {
    return (
      <div>
        <Topnav />

        <div className="row">
          <div className="col s3"></div>
          <form className="col s6" onSubmit={this.handleContact}>
            <div id="contactCard" className="card">
              <div className="row">
                <div className="col s12">
                  <h4 style={{ textAlign: "center" }}>Contact Us</h4>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s4 offset-s2">
                  <input
                    id="first_name"
                    type="text"
                    className="validate"
                    name="fName"
                    value={this.state.fName}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s4">
                  <input
                    id="last_name"
                    type="text"
                    name="lName"
                    className="validate"
                    value={this.state.lName}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor="last_name">Last Name</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s6 offset-s3">
                  <i className="material-icons prefix">mode_edit</i>
                  <textarea
                    id="icon_prefix2"
                    name="comment"
                    className="materialize-textarea"
                    value={this.state.comment}
                    onChange={this.handleInputChange}
                  ></textarea>
                  <label htmlFor="icon_prefix2">Message</label>
                </div>
              </div>
              <button
                id="contactBtn"
                className="btn-flat"
                type="submit"
                onSubmit={this.handleContact}
                name="action"
              >
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
