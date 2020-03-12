import React, { Component } from "react";

import firebase, { auth, provider } from "../firebase";
import "./login.css";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      last_name: "",
      first_name: "",
      error: {
        message: ""
      }
    };
  }
  signUp() {
    console.log("this.state", this.state);
    const { email, password } = this.state;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userData => {
        console.log("signUp", userData);
        alert("Success");
        window.location.href = "/#/news";
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  componentDidMount() {}

  render() {
    return (
      <div id="signUp">
        <div className="row">
          <div className="col s4" />
          <form className="col s8">
            <h5>New Here? Sign Up</h5>
            <div className="row">
              <div className="input-field col s12 m4">
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
              <div className="input-field col s12 m4">
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

            <button
              id="btn"
              className="btn waves-effect waves-light"
              type="button"
              onClick={() => this.signUp()}
              name="action"
            >
              Submit
            </button>
          </form>
        </div>
        <div>{this.state.error.message}</div>
      </div>
    );
  }
}
export default SignUp;
