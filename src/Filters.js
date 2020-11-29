import React, { Component } from "react";

class Filters extends Component {
  constructor(props) {
    super(props);
    this.onUpdateSearchField = this.onUpdateSearchField.bind(this);
  }
  onUpdateSearchField = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.props.onFilter({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="my-3">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            name="name"
            onChange={this.onUpdateSearchField}
          />
        </form>
      </div>
    );
  }
}

export default Filters;
