import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import BookMark from "./BookMarks";
import { Routes, Route } from "react-router-dom";

class HomePage extends React.Component {
  state = {
    RestaurantNames : [
      {id: 1, name: "McDonalds"},
      {id: 2, name: "Taco Bell"},
      {id: 3, name: "Wendys"},
      {id: 4, name: "Burger King"},
      {id: 5, name: "Dunkin"}
    ],

    BookMarkedRestaurants : []
  };

  constructor(props) {
    super(props);
    this.addToBook = this.addToBook.bind(this)
  }

  addToBook(resto){
    console.log("add to book reached")
    console.log(resto);
    const tempRestoNames = [];
    const tempBook = [];
    this.state.RestaurantNames.forEach(element => {
      if(element.name != resto){
        tempRestoNames.push(element);
      } else {
        tempBook.push(element);
      }
    });
    this.state.BookMarkedRestaurants.forEach(element => {
      tempBook.push(element);
    });
    this.setState(state=>({
      BookMarkedRestaurants : tempBook
    }))
    this.setState(state=>({
      RestaurantNames : tempRestoNames
    }))

    console.log(this.state.BookMarkedRestaurants)
    console.log(this.state.RestaurantNames)
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/Home" className="active" id="1" onClick={()=> {
              document.getElementById("1").className = "active"
              document.getElementById("2").className = "inActive"
              document.getElementById("3").className = "inActive"
              document.getElementById("4").className = "inActive"
            }}>
              Home
            </Link>
          </li>
          <li>
            <Link className="Inactive" to="/BookMark" id="2" onClick={()=>{
              document.getElementById("2").className = "active"
              document.getElementById("1").className = "inActive"
              document.getElementById("3").className = "inActive"
              document.getElementById("4").className = "inActive"
            }}
            >BookMark</Link>
          </li>
          <li>
            <a className="Inactive" id="3" onClick={()=>{
              document.getElementById("3").className = "active"
              document.getElementById("1").className = "inActive"
              document.getElementById("2").className = "inActive"
              document.getElementById("4").className = "inActive"
            }}>Favorites</a>
          </li>
          <li>
            <a className="Inactive" id="4" onClick={()=>{
              document.getElementById("4").className = "active"
              document.getElementById("1").className = "inActive"
              document.getElementById("2").className = "inActive"
              document.getElementById("3").className = "inActive"
            }}>Settings</a>
          </li>
        </ul>
        <div
          style={{ marginLeft: "25%", padding: "1px 16px", height: "1000px" }}
        >
          <Routes>
            <Route path="/Home" element={<Home RestaurantNames={this.state.RestaurantNames} addToBook={this.addToBook} />} />
            <Route path="/BookMark" element={<BookMark />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default HomePage;
