import React from "react";
import AutoComplete from "./AutoComplete";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      NamesArray: [],
      SearchedName : "",
      refresh : 1
    };
    this.getarr = this.getarr(this)
    this.getSetSearchedName = this.getSetSearchedName.bind(this)
    this.midwayToBook = this.midwayToBook.bind(this)
    this.midwayToRemove = this.midwayToRemove.bind(this)
  }

  // just a midway path function which will pass callback to parent received from child
  midwayToRemove(restoName){
    this.props.removeItem(restoName);
  }

  // just a midway path function which will pass callback to parent received from child
  midwayToBook(bookname){
    // console.log(bookname);
    this.props.addToBook(bookname);
    const tempR = this.state.refresh + 1;
    this.setState(state=>({
      refresh : tempR
    })) 
  }

  // get current restaurant name array from parent
  // and update to autocomplete so that it won't show 
  // bookmarked or removed names.
  getarr() {
    const temparr = [];
    this.props.RestaurantNames.forEach((element) => {
      temparr.push(element.name);
    });
    return temparr;
  }

  // update in state current searched name 
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
        <AutoComplete suggestions={this.getarr} getName={this.getSetSearchedName} midwayToBook={this.midwayToBook} midwayToRemove={this.midwayToRemove} />
      </>
    );
  }
}

export default Home;