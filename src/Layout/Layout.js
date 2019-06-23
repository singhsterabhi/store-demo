import React, { Component } from "react";
import classes from "./Layout.module.css";

import Header from "../components/Header/Header";
import Controls from "../components/Controls/Controls";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";

class Layout extends Component {
  state = {};
  render() {
    return (
      <div className={classes.Layout}>
        <Header />
        <Cart />
        <main className={classes.Main}>
          <Controls />
          <Products />
        </main>
      </div>
    );
  }
}

export default Layout;
