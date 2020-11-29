import React, { Component } from "react";

class ProductRow extends Component {
  destroy() {
    console.log(this.props.row.id);
    this.props.onDestroy(this.props.row.id);
  }

  constructor(props) {
    super(props);
    this.destroy = this.destroy.bind(this);
  }

  render() {
    return (
      <tr>
        <td>{this.props.row.name}</td>
        <td>{this.props.row.category}</td>
        <td>{"$" + this.props.row.price}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.destroy}
          >
            {" "}
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductRow;
