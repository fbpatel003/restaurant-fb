import React from 'react'
import LoginPage from './LogInPage'
import HomePage from './HomePage'
import { Link } from "react-router-dom";


class MainScreen extends React.Component {
    state = { 
        showPage : "HomePage"
    } 
    
    logOutClicked = () =>{
        this.setState({showPage : "Login"});
    }

    logInSuccess = () =>{
        this.setState({showPage : "HomePage"})
    }

    render() { 
        return (
            <>
            {this.state.showPage=="Login" ? <LoginPage logInSuccess={this.logInSuccess} /> : null}
            {this.state.showPage=="HomePage" ? <HomePage logOutClicked={this.logOutClicked} /> : null}
            </>
        );
    }
}
 
export default MainScreen;