import React, { Component } from "react";
import Filters from "./Filters";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";

let PRODUCTS = {
  1: { id: 1, category: "Home Decor", price: "459.99", name: "Wall Stickers" },
  2: { id: 2, category: "Personal Care", price: "5,000", name: "Shampoo" },
  3: { id: 3, category: "Lifestyle", price: "4,500", name: "CasualWear" },
  4: { id: 4, category: "Food", price: "799", name: "Pizza" },
  5: { id: 5, category: "Health", price: "1,300", name: "Cough Syrup" },
  6: { id: 6, category: "Entertainment", price: "100", name: "Music CDs" },
};

var style = {
  width: 600,
};

class Product extends Component {
  state = {
    filterInput: "",
    products: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      filterInput: "",
      products: PRODUCTS,
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
  }
  handleSave(product) {
    if (!product.id) {
      product.id = new Date().getTime();
    }
    this.setState((prevState) => {
      let products = prevState.products;
      products[product.id] = product;
      return { products };
    });
  }
  handleDestroy(productId) {
    this.setState((prevState) => {
      let products = prevState.products;
      delete products[productId];
      return { products };
    });
  }

  handleFilter(filterInput) {
    this.setState({ filterInput: filterInput });
  }

  render() {
    return (
      <div className="container">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <h1>My Inventory</h1>
            <Filters
              products={this.state.products}
              onFilter={this.handleFilter}
            ></Filters>
            <ProductTable
              products={this.state.products}
              filterText={this.state.filterInput}
              onDestroy={this.handleDestroy}
            ></ProductTable>
            <ProductForm
              products={this.state.products}
              onSave={this.handleSave}
            ></ProductForm>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
