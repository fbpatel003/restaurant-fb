import React from 'react'
import LoginPage from './LogInPage'
import HomePage from './HomePage'

class MainScreen extends React.Component {
    state = { 
        showPage : "Login"
    } 
    
    logOutClicked = () =>{
        this.setState({showPage : "Login"});
    }

    logInSuccess = () =>{
        this.setState({showPage : "Home"})
    }

    render() { 
        return (
            <>
            {this.state.showPage=="Login" ? <LoginPage logInSuccess={this.logInSuccess} /> : null}

            {this.state.showPage=="Home" ? <HomePage logOutClicked={this.logOutClicked} /> : null}
            MainScreen
            </>
        );
    }
}
 
export default MainScreen;