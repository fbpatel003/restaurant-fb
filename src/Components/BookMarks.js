import React from "react";

class BookMark extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      BookMarkedRestaurants: [],
    };
    this.setState((state) => ({
      BookMarkedRestaurants: this.props.BookMarkedRestaurants,
    }));
    // console.log(this.props.BookMarkedRestaurants);
    // console.log(this.state.BookMarkedRestaurants);
  }

  render() {
    return (
      <>
        {this.props.BookMarkedRestaurants.map((element) => {
          return (
            <>
              <div className="raw">
                <div className="card">
                  <h5 className="card-header">{element.name}</h5>
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
                  id="Book-2"
                >
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                </svg>
              </div>
            </>
          );
        })}
      </>
    );
  }
}

export default BookMark;
