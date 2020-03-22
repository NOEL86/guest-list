import React, { Component } from "react";
import fire from "../firebase";
import firebase, { auth } from "../firebase.js";
import "./profile.css";
import Topnav from "../Components/Topnav";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      phone: "",
      id: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleUpdateProfile = this.handleUpdateProfile.bind(this);
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    // console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  handleUpdateProfile = (e, id, name, email, phone, password) => {
    e.preventDefault();
    console.log("submit clicked");

    firebase
      .database()
      .ref("user/" + id)
      .set({
        displayName: name,
        email: email,
        password: password,
        phone: phone
      });
  };

  componentWillMount() {
    let that = this;
    auth.onAuthStateChanged(function(user) {
      if (user) {
        let id = user.uid;
        let email = user.email;
        let name = user.displayName;
        console.log(id);
        console.log(email);
        console.log(name);

        that.setState({
          name: name,
          email: email
        });

        console.log(that.state.user);

        let userInfo = fire.database().ref("users/" + id);
        // userInfo
        // .child("vote")
        // .once("value")
        // .then(snap => {
        //   // console.log(snap.val());
        //   if (snap.val()) {
        //     that.setState({
        //       name: snap.child("displayName").val(),
        //      email: snap.child("email").val()
        //     });
        //   } else {
        //     return;
        //   }
        // });
      } else {
        window.location.href = "/login";
      }
    });
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <Topnav />
        <div className="row">
          <form className="col s6" onSubmit={this.handleUpdateProfile}>
            <div id="profileCard" className="card">
              <div className="row">
                <div className="col s12">
                  <h4 style={{ textAlign: "center" }}>Update Profile</h4>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s4 offset-s2">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    id="icon_prefix"
                    type="text"
                    className="validate"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                  {/* <label for="icon_prefix">Name</label> */}
                </div>

                <div className="input-field col s4">
                  <i className="material-icons prefix">phone</i>
                  <input
                    id="icon_telephone"
                    type="tel"
                    className="validate"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                  />
                  {/* <label for="icon_telephone">Telephone</label> */}
                </div>
                <div className="row">
                  <div className="input-field col s4 offset-s2">
                    <i className="material-icons prefix">email</i>
                    <input
                      id="email"
                      type="email"
                      className="validate"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                    {/* <label for="email">Email</label> */}
                  </div>

                  <div className="input-field col s4 ">
                    <i className="material-icons prefix">security</i>
                    <input
                      id="password"
                      type="password"
                      className="validate"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />
                    {/* <label for="password">Password</label> */}
                  </div>
                </div>
                <button
                  id="contactBtn"
                  className="btn-flat"
                  type="submit"
                  onSubmit={this.handleUpdateProfile}
                  name="action"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
