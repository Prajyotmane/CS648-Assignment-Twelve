import React, { Component } from "react";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.handleDestroy = this.handleDestroy.bind(this);
  }
  handleDestroy(id) {
    this.props.onDestroy(id);
  }

  render() {
    let rows = [];

    Object.keys(this.props.products).forEach((key) => {
      console.log(this.props.filterText);
      if (this.props.filterText == "") {
        rows.push(this.props.products[key]);
      } else {
        var foundOrNot = this.props.products[key].name.indexOf(
          Object.values(this.props.filterText)[0]
        );
        if (foundOrNot === 0) rows.push(this.props.products[key]);
      }
    });

    return (
      <div>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <ProductRow row={row} key={row.id} onDestroy={this.handleDestroy}>
                {" "}
              </ProductRow>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
