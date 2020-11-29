import React, { Component } from "react";

class Filters extends Component {
  onUpdateSearchField = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="my-3">
        <input
          className="form-control"
          type="text"
          placeholder="Search..."
          onChange={this.onUpdateSearchField}
        ></input>
      </div>
    );
  }
}

export default Filters;
