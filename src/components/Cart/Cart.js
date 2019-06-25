import React, { Component } from "react";
import classes from "./Cart.module.css";
import {} from "react-redux";
import { connect } from "net";

class Cart extends Component {
  render() {
    const classesCart = [classes.Cart];
    if (this.props.cartShow) {
      classesCart.push(classes.Open);
    } else classesCart.push(classes.Close);

    return (
      <div
        style={{ display: this.props.cartShow }}
        className={classesCart.join(" ")}
      >
        <button onClick={this.props.handleCart} className={classes.ToggleCart}>
          X
        </button>
        <h1>Cart</h1>
        <div>
          {!(this.props.cart === {}) ? (
            Object.keys(this.props.cart).map(k => <p>{k}</p>)
          ) : (
            <p>add some products</p>
          )}
        </div>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart
  };
};

export default connect(
  MapStateToProps,
  null
)(Cart);
