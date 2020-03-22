import React, { Component } from "react";
import LoginNav from "../Components/LoginNav";
import firebase, { auth, provider } from "../firebase.js";
// import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import "./login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",

      error: {
        message: ""
      }
    };
  }
  login() {
    console.log("this.state", this.state);
    const { email, password } = this.state;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userData => {
        // console.log("login", userData);

        window.location.href = "/#/main";
        // alert('success');
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  // googleLogIn() {
  //   auth.signInWithPopup(provider).then(result => {
  //     console.log(result);
  //     window.location.href = "/#/news";
  //   });
  // }

  componentDidMount() {}

  render() {
    return (
      <div>
        <LoginNav />
        <div id="login">
          <div className="row">
            <div className="col s3" />
            <form id="loginForm" className="col s6">
              <h5>Welcome Back!</h5>

              <div className="row">
                <div className="col s2" />
                <div className="input-field col s8">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    className="form-control"
                    type="email"
                    //   placeholder="email"
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s2" />
                <div className="input-field col s8">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    //   placeholder="password"
                    onChange={event =>
                      this.setState({ password: event.target.value })
                    }
                  />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  {/* <GoogleButton
                  onClick={() => this.googleLogIn()}
                  className="googlesCool"
                /> */}
                  <button
                    id="btn"
                    className="btn waves-effect"
                    style={{ float: "left" }}
                    type="button"
                    onClick={() => this.login()}
                    name="action"
                  >
                    Submit
                  </button>

                  {/* <Link to="/signup">
                    <button
                      id="btn"
                      className="btn waves-effect"
                      style={{ float: "left" }}
                      type="button"
                    >
                      Sign-Up
                    </button>
                  </Link> */}
                </div>
              </div>
            </form>
          </div>

          <div>{this.state.error.message}</div>
        </div>
      </div>
    );
  }
}
export default Login;
