import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Products.module.css";

import Product from "./Product/Product";
import Spinner from "../UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";

class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    let spinner = this.props.loading ? <Spinner /> : null;

    let prod = null;
    if (this.props.products) {
      prod = Object.keys(this.props.products).map(k => {
        return <Product key={k} {...this.props.products[k]} />;
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

const MapStateToProps = state => {
  return {
    products: state.products,
    loading: state.loading
  };
};

const MapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(actions.loadProducts())
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Products);
