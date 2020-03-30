import React, { Component } from "react";
import Sidenav from "../Components/Sidenav";
import Topnav from "../Components/Topnav";
import AddGuest from "../Components/AddGuest";
import Loader from "../Components/Loader";
import fire from "../firebase";
import firebase, { auth } from "../firebase.js";
import M from "materialize-css";
import "./main.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      user: {},
      guests: {}
    };
    // this.dataLoad = this.dataLoad.bind(this);
  }

  componentWillMount() {
    let that = this;
    async function a() {
      return auth.onAuthStateChanged(function(user) {
        if (user) {
          // console.log(user);
          let id = user.uid;
          let email = user.email;
          let name = user.displayName;
          // console.log(id);
          // console.log(email);
          // console.log(name);

          that.setState({
            user: {
              id: id,
              name: name,
              email: email
            }
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
          window.location.href = "/";
        }
      });
    }
    a().then(this.setState({ isLoaded: true }));
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".modalOne");
      M.Modal.init(elems);
    });

    // if (this.state.user) {
    //   // window.location.reload();
    //   this.setState({ isLoaded: true });
    // }
  }

  render() {
    const { isLoaded } = this.state;
    return isLoaded ? (
      <div>
        <AddGuest />
        <Topnav />
        <Sidenav />

        <div id="mainBody">
          <div className="row center">
            <div className="col s12 m8 l8">
              <h2 id="clientName">{this.state.user.name} Guests</h2>
            </div>
          </div>

          <div className="row">
            <div className="col m2" />
            <div className="col s12 m8 l8">
              <table className="striped">
                <thead>
                  <tr>
                    <th>Guest Name</th>
                    <th>Contact</th>
                    <th>RSVP Status</th>
                    <th>Gift</th>
                    <th>Thank You</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>Drop Down</td>
                    <td>CheckBox</td>
                    <td>CheckBox</td>
                  </tr>
                  <tr>
                    <td>Alan</td>
                    <td>Jellybean</td>
                    <td>Drop Down</td>
                    <td>CheckBox</td>
                    <td>CheckBox</td>
                  </tr>
                  <tr>
                    <td>Jonathan</td>
                    <td>Lollipop</td>
                    <td>Drop Down</td>
                    <td>CheckBox</td>
                    <td>CheckBox</td>
                  </tr>
                  <tr>
                    <td>Jonathan</td>
                    <td>Lollipop</td>
                    <td>Drop Down</td>
                    <td>CheckBox</td>
                    <td>CheckBox</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col m2">
              <a
                id="addGuest"
                data-target="modalOne"
                className="btn-flat modal-trigger"
              >
                Add Guest
              </a>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Loader />
    );
  }
}
