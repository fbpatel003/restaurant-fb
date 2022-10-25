import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import BookMark from "./BookMarks";
import { Routes, Route } from "react-router-dom";
import Favorites from "./Favorites";
import Settings from "./Settings";
import LoginPage from "./LogInPage";

class HomePage extends React.Component {

  state = {
    // current added restaurant names with id
    RestaurantNames: [
      { id: 1, name: "McDonalds" },
      { id: 2, name: "Taco Bell" },
      { id: 3, name: "Wendys" },
      { id: 4, name: "Burger King" },
      { id: 5, name: "Dunkin" },
    ],

    // bookmarked restaurant, which will be empty at first
    BookMarkedRestaurants: [],

    // to show login or homepage
    showPage: "Login",
  };

  constructor(props) {
    super(props);
    this.addToBook = this.addToBook.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  // this function takes a restaurant name as an argument and
  // add that restaurant to bookmakrk, also removes it from
  // current restaurant names too.
  addToBook(resto) {
    // console.log("add to book reached");
    // console.log(resto);
    const tempRestoNames = [];
    const tempBook = [];
    this.state.RestaurantNames.forEach((element) => {
      if (element.name != resto) {
        tempRestoNames.push(element);
      } else {
        tempBook.push(element);
      }
    });
    this.state.BookMarkedRestaurants.forEach((element) => {
      tempBook.push(element);
    });
    this.setState((state) => ({
      BookMarkedRestaurants: tempBook,
    }));
    this.setState((state) => ({
      RestaurantNames: tempRestoNames,
    }));
    // console.log(this.state.BookMarkedRestaurants);
    // console.log(this.state.RestaurantNames);
  }

  // this function takes a restaurant namee as an argument and
  // removes it from current restaurant name.
  removeItem(restoName) {
    const tempRestoNames = [];
    this.state.RestaurantNames.forEach((element) => {
      if (element.name != restoName) {
        tempRestoNames.push(element);
      }
    });
    this.setState((state) => ({
      RestaurantNames: tempRestoNames,
    }));
  }

  // when logout is clicked, hide home
  logOutClicked = () => {
    this.setState({ showPage: "Login" });
  };

  // when login success, show home and hide login page
  logInSuccess = () => {
    this.setState({ showPage: "HomePage" });
  };

  render() {
    return (
      <>
      {this.state.showPage=="Login" ? <LoginPage logInSuccess={this.logInSuccess} /> : null}
      
      {this.state.showPage=="HomePage" ?
      <div>
        <ul>
          <li>
            <Link
              to="/Home"
              className="active"
              id="1"
              onClick={() => {
                document.getElementById("1").className = "active";
                document.getElementById("2").className = "inActive";
                document.getElementById("3").className = "inActive";
                document.getElementById("4").className = "inActive";
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="Inactive"
              to="/BookMark"
              id="2"
              onClick={() => {
                document.getElementById("2").className = "active";
                document.getElementById("1").className = "inActive";
                document.getElementById("3").className = "inActive";
                document.getElementById("4").className = "inActive";
              }}
            >
              BookMark
            </Link>
          </li>
          <li>
            <Link
              className="Inactive"
              to="/Favorites"
              id="3"
              onClick={() => {
                document.getElementById("3").className = "active";
                document.getElementById("1").className = "inActive";
                document.getElementById("2").className = "inActive";
                document.getElementById("4").className = "inActive";
              }}
            >
              Favorites
            </Link>
          </li>
          <li>
            <Link
              className="Inactive"
              to="/Settings"
              id="4"
              onClick={() => {
                document.getElementById("4").className = "active";
                document.getElementById("1").className = "inActive";
                document.getElementById("2").className = "inActive";
                document.getElementById("3").className = "inActive";
              }}
            >
              Settings
            </Link>
          </li>
          <li id="LogOut">
            <Link onClick={this.logOutClicked}>LogOut</Link>
          </li>
        </ul>
        <div
          style={{ marginLeft: "25%", padding: "1px 16px", height: "1000px" }}
        >
          <Routes>
            <Route
              path="/Home"
              element={
                <Home
                  RestaurantNames={this.state.RestaurantNames}
                  addToBook={this.addToBook}
                  removeItem={this.removeItem}
                />
              }
            />
            <Route
              path="/BookMark"
              element={
                <BookMark
                  BookMarkedRestaurants={this.state.BookMarkedRestaurants}
                />
              }
            />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
      : null }
      </>
    );
  }
}

export default HomePage;
