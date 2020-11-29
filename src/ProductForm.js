import React, { Component } from "react";

const RESET_VALUES = { id: "", category: "", price: "", name: "" };

class ProductForm extends Component {
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState((prevState) => {
      prevState.product[name] = value;
      return { product: prevState.product };
    });
  }

  handleSave(e) {
    this.props.onSave(this.state.product);
    this.setState({
      product: Object.assign({}, RESET_VALUES),
      errors: {},
    });
    e.preventDefault();
  }
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      product: Object.assign({}, RESET_VALUES),
      errors: {},
    };
  }
  render() {
    return (
      <form>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.product.name}
        />
        <br />
        <label>Category:</label> <br />
        <input
          type="text"
          name="category"
          onChange={this.handleChange}
          value={this.state.product.category}
        />
        <br />
        <label>Price:</label>
        <br />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.state.product.price}
        />
        <br /> <br />
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleSave}
        >
          Save
        </button>
      </form>
    );
  }
}

export default ProductForm;
