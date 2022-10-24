import React from "react";
import HomePage from "./HomePage";
import {Link} from 'react-router-dom';

class LoginPaage extends React.Component {

    // to store id/ps data such that we can use it in register or new login if needed.
  state = {
    idPsData: [],
  };

  constructor(props) {
    super(props);
    this.confirmLogIn = this.confirmLogIn.bind(this);
  }

  //function to fetch id/ps ffrom server and to check if id/ps is correct or not
  confirmLogIn() {
    let enteredId = document.getElementById("form2Example1").value;
    let enteredPs = document.getElementById("form2Example2").value;
    // console.log(enteredId);
    // console.log(enteredPs);

    fetch(
      "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view",
      {
        headers: {
          Authorization: "Bearer keyfXgn8PL6pB3x32",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.records);
        this.setState({ idPsData: res.records }); // id/ps stored in state .
        for (let i = 0; i < res.records.length; i++) {
            //if id/ps correct then alert success and load homepage in parent component.
          if (
            res.records[i].fields.username == enteredId &&
            res.records[i].fields.password == enteredPs
          ) {
            console.log(i + "success");
            alert("Login Successfull..");
            this.props.logInSuccess();
            break;
          }

          if (i == res.records.length - 1) {
            alert("invalid UserName or Password..!");
          }
        }
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
 
      {/* login page UI is taken from mdbootstrap UI provider,
        though register, follow me on fb, insta, github don't work,
        because of no need for it right now!
      */}
        <div className="container login-contain">
          <form>
            {/* Email input */}
            <div className="form-outline mb-4">
              <input type="email" id="form2Example1" className="form-control" />
              <label className="form-label" htmlFor="form2Example1">
                Enter Login Id
              </label>
            </div>
            {/* Password input */}
            <div className="form-outline mb-4">
              <input
                type="password"
                id="form2Example2"
                className="form-control"
              />
              <label className="form-label" htmlFor="form2Example2">
                Enter Password
              </label>
            </div>
            {/* 2 column grid layout for inline styling */}
            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                {/* Checkbox */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="form2Example31"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="form2Example31">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>
              <div className="col">
                {/* Simple link */}
                <a href="#!">Forgot password?</a>
              </div>
            </div>
            {/* Submit button */}
            <button
              type="button"
              className="btn btn-primary btn-block mb-4"
              onClick={this.confirmLogIn}
            >
              Login
            </button>
            {/* Register buttons */}
            <div className="text-center">
              <p>
                Not a member? <a href="#!">Register</a>
              </p>
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github" />
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default LoginPaage;
