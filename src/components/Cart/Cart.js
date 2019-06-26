import React, { Component } from "react";
import classes from "./Cart.module.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Cart extends Component {
  render() {
    const classesCart = [classes.Cart];
    if (this.props.cartShow) {
      classesCart.push(classes.Open);
    } else classesCart.push(classes.Close);

    let totalPrice = 0;

    return (
      <div
        style={{ display: this.props.cartShow }}
        className={classesCart.join(" ")}
      >
        <button onClick={this.props.handleCart} className={classes.ToggleCart}>
          X
        </button>
        <div className={classes.CartFlex}>
          <h1>Cart</h1>
          <div className={classes.CartItemsContainer}>
            {Object.keys(this.props.cart).length > 0 ? (
              Object.keys(this.props.cart).map(k => {
                totalPrice += this.props.products[k].price * this.props.cart[k];
                return (
                  <div key={k} className={classes.CartItem}>
                    <img
                      src={require(`../../assets/images/${
                        this.props.products[k].sku
                      }_2.jpg`)}
                      alt={this.props.products[k].title}
                    />
                    <div>
                      <button onClick={() => this.props.removeFromCart(k)}>
                        X
                      </button>
                      <p>{this.props.products[k].title}</p>
                      <p>
                        Price : {this.props.products[k].currencyFormat}{" "}
                        {this.props.products[k].price} X {this.props.cart[k]}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Add some products to the Cart</p>
            )}
          </div>
          <div className={classes.Checkout}>
            <button>
              CHECKOUT {totalPrice ? `~ $ ${totalPrice.toFixed(2)}` : null}
            </button>
          </div>
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

const MapDispatchToProps = dispatch => {
  return {
    removeFromCart: product => dispatch(actions.removeFromCart(product))
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Cart);
