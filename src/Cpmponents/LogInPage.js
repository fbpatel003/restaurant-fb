import React from "react";

class LoginPaage extends React.Component {
    state = {
        booksData : []
      };
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         booksData : []
    //     };

    //     fetch('https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view'
    //     ,{
    //         headers: {
    //             Authorization: "Bearer keyfXgn8PL6pB3x32"
    //         }
    //     }
    //     )
    //     .then(res => res.json())
    //     .then(res => {
    //         console.log(res.records)
    //         this.setState({ booksData: res.records })
    //     })
    //     .catch(error => console.log(error));
    // }

    constructor(props){
        super(props);
        this.confirmLogIn = this.confirmLogIn.bind(this); 
    }

  confirmLogIn(){
    let enteredId = document.getElementById("form2Example1").value;
    let enteredPs = document.getElementById("form2Example2").value;
    console.log(enteredId);
    console.log(enteredPs);

        fetch('https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view'
        ,{
            headers: {
                Authorization: "Bearer keyfXgn8PL6pB3x32"
            }
        }
        )
        .then(res => res.json())
        .then(res => {
            console.log(res.records);
            this.setState({ booksData: res.records });
            for(let i=0; i<res.records.length; i++) {
                if(res.records[i].fields.username == enteredId && res.records[i].fields.password == enteredPs){
                    console.log(i + "success");
                }
                else {
                    console.log(i + "failes");
                }
            }
        }) 
        .catch(error => console.log(error));
    // console.log(this.state.booksData);
  }


  render() {
    return (
      <>
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
            <button type="button" className="btn btn-primary btn-block mb-4" onClick={this.confirmLogIn}>
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
