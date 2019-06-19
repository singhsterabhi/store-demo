import React from "react";
import classes from "./Controls.module.css";

const Controls = () => {
  const sizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"].map(m => (
    <button key={m}>{m}</button>
  ));
  return (
    <div className={classes.Controls}>
      <h3>Sizes:</h3>
      <div className={classes.Sizes}>{sizes}</div>
    </div>
  );
};

export default Controls;
