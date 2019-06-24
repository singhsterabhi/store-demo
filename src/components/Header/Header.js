import React from "react";
import classes from "./Header.module.css";

const header = props => {
  return (
    <header className={classes.Header}>
      <h1>STORE</h1>
      <nav>
        <img
          onClick={props.handleCart}
          src={require("../../assets/icons/bag-icon.png")}
          alt="cart"
        />
      </nav>
    </header>
  );
};

export default header;
