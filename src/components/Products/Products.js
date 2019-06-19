import React, { Component } from "react";
import classes from "./Products.module.css";
import axios from "../../axios";
import Product from "./Product/Product";
import Spinner from "../UI/Spinner/Spinner";

class Products extends Component {
  state = {
    products: null,
    loading: true
  };
  componentDidMount() {
    axios
      .get("/products.json")
      .then(res => {
        console.log(res.data);
        this.setState({ products: res.data, loading: false });
      })
      .catch(e => console.log(e));
  }
  render() {
    let spinner = this.state.loading ? <Spinner /> : null;

    let prod = null;
    if (this.state.products) {
      prod = Object.keys(this.state.products).map(k => {
        return <Product key={k} {...this.state.products[k]} />;
      });
    }

    return (
      <div className={classes.ProductContainer}>
        {spinner}
        <div className={classes.Products}>{prod}</div>
      </div>
    );
  }
}

export default Products;
