import React, { Component } from "react";
import classes from "./Layout.module.css";
import { connect } from "react-redux";

import Header from "../components/Header/Header";
import Controls from "../components/Controls/Controls";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";
import * as actions from "../store/actions/index";

class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Header handleCart={this.props.openCart} />
        <Cart
          cartShow={this.props.cartShow}
          handleCart={this.props.closeCart}
        />
        <main className={classes.Main}>
          <Controls />
          <Products />
        </main>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    cartShow: state.cartShow
  };
};

const MapDispatchToProps = dispatch => {
  return {
    openCart: () => dispatch(actions.cartOpen()),
    closeCart: () => dispatch(actions.cartClose())
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Layout);
