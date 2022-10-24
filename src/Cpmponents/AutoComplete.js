import React from "react";

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
      finaleReturn: "",
      totalNames: [],
      map: "off",
    };
    this.returnName = this.returnName.bind(this);
    this.sendToBookMark = this.sendToBookMark.bind(this);
  }
  onChange = (e) => {
    const { suggestions } = this.props;
    this.setState((state) => ({
      totalNames: suggestions,
    }));
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
    });
  };
  onClick = (e) => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
    });
  };
  onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
      });
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  returnName() {
    const searched = document.getElementById("addInput").value;
    this.setState((state) => ({
      finaleReturn: searched,
    }));
    console.log("searched");
    console.log(searched);
    this.props.getName(searched);
    this.setState({ map: "off" });
    this.state.totalNames.forEach((element) => {
      if (element == searched) {
        this.setState({ map: "on" });
      }
    });
  }

  sendToBookMark() {
    console.log("autocomp reached")
    this.setState({map:"off"})
    console.log(this.state.finaleReturn);
    this.props.midwayToBook(this.state.finaleReturn);
  }

  RemoveItem(){
    this.onChange();
  }

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
      },
    } = this;

    let suggestionsListComponent;
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }
              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions available.</em>
          </div>
        );
      }
    }

    return (
      <>
        <div className="Container justify-content-evenly">
          <input
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
            id="addInput"
          />
          <button
            type="button"
            class="btn btn-success"
            onClick={this.returnName}
          >
            Add
          </button>
          {suggestionsListComponent}
        </div>
        <div className="Container">
          {this.state.map == "on" ? (
            <>
              <div className="card">
                <h5 className="card-header">{this.state.finaleReturn}</h5>
                <div className="card-body">
                  <iframe
                    width={600}
                    height={450}
                    // src={loadSrc}
                    src="https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC"
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreens
                  />
                </div>
              </div>

              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
                id="Fav"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-file-x-fill"
                viewBox="0 0 16 16"
                id="Remove"
                onClick={this.RemoveItem}
              >
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.854 6.146 8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 1 1 .708-.708z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-bookmark-fill"
                viewBox="0 0 16 16"
                id="Book"
                onClick={this.sendToBookMark}
              >
                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
              </svg>
            </>
          ) : (
            <>Not Selected Any / not available in options</>
          )}
        </div>
      </>
    );
  }
}

export default AutoComplete;
