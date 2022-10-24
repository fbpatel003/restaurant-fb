import React from "react";
import AutoComplete from "./AutoComplete";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      NamesArray: [],
      SearchedName : "",
      refresh : "0"
    };
    this.getarr = this.getarr(this)
    this.getSetSearchedName = this.getSetSearchedName.bind(this)
    this.midwayToBook = this.midwayToBook.bind(this)
  }

  midwayToBook(bookname){
    console.log(bookname);
    this.props.addToBook(bookname);
    const tempR = this.state.refresh + 1;
    this.setState(state=>({
      refresh : tempR
    }))
  }

  getarr(nul) {
    const temparr = [];
    this.props.RestaurantNames.forEach((element) => {
      temparr.push(element.name);
    });
    return temparr;
  }

  getSetSearchedName(name){
    const arr = this.getarr;
    this.setState(state => ({
      SearchedName : name
    }))
    this.setState(state=>({
      NamesArray : arr
    }))
  }

  render() {
    return (
      <>
        <AutoComplete suggestions={this.getarr} getName={this.getSetSearchedName} midwayToBook={this.midwayToBook} />
      </>
    );
  }
}

export default Home;