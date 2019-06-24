import React, { Component } from "react";
import classes from "./Cart.module.css";

class Cart extends Component {
  state = {};

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
      </div>
    );
  }
}

export default Cart;
