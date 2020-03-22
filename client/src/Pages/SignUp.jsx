import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignUpNav from "../Components/SignUpNav";
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
  // signUp() {
  //   console.log("this.state", this.state);
  //   const { email, password } = this.state;
  //   const name = this.state.first_name + " " + this.state.last_name;
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(userData => {
  //       userData.user.updateProfile({
  //         displayName: name
  //       });
  //       console.log("signUp", userData);
  //       alert("Success");
  //       window.location.href = "/#/main";
  //     })
  //     .catch(error => {
  //       this.setState({ error });
  //     });
  //   .then( function(user) {

  //     user
  //       .updateProfile({
  //         displayName: name
  //       })
  //       .then()(
  //       function() {
  //         console.log("Success!!");
  //       },
  //       function(err) {
  //         console.log(err);
  //       }
  //     )
  //   );
  // }
  // }
  signUp() {
    console.log("this.state", this.state);
    const { email, password } = this.state;
    const name = this.state.first_name + " " + this.state.last_name;
    auth.createUserWithEmailAndPassword(email, password).then(userData => {
      userData
        .updateProfile({
          displayName: name
        })
        .then()(
        function() {
          // Update successful.
          console.log("signUp", userData);
          alert("Success");
          window.location.href = "/#/main";
        },
        function(error) {
          this.setState({ error });
        }
      );
    });
  }

  // componentDidMount() {}

  render() {
    return (
      <div id="signup">
        <SignUpNav />
        <div className="row">
          <div className="col s4" />
          <form id="loginForm" className="col s6">
            <h5>New Here? Sign Up</h5>
            <div className="row">
              <div className="input-field col s12">
                <input
                  // placeholder="Placeholder"
                  id="first_name"
                  type="text"
                  className="validate"
                  onChange={event =>
                    this.setState({ first_name: event.target.value })
                  }
                />
                <label for="first_name">First Name</label>
              </div>
              <div className="input-field col s12">
                <input
                  id="last_name"
                  type="text"
                  className="validate"
                  onChange={event =>
                    this.setState({ last_name: event.target.value })
                  }
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
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

              <div className="input-field col s12">
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
            {/* <Link to="/">
              <button
                id="btn"
                className="btn waves-effect waves-light"
                type="button"
                name="action"
              >
                Login
              </button>
            </Link> */}
          </form>
        </div>
        <div>{this.state.error.message}</div>
      </div>
    );
  }
}
export default SignUp;
