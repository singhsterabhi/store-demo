import React from "react";
import classes from "./Product.module.css";

const product = props => {
  //   console.log(props);
  return (
    <div className={classes.Product}>
      <div className={classes.Title}>
        <img
          src={require(`../../../assets/images/${props.sku}_1.jpg`)}
          alt={props.title}
        />
        <p>{props.title}</p>
      </div>
      <div className={classes.Description}>
        <hr />
        <h3>
          {props.currencyFormat} {props.price}
        </h3>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
};

export default product;
