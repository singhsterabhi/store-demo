import React from "react";
import classes from "./Controls.module.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

const Controls = props => {
  const sizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"].map(m =>
    props.filters.length && props.filters.includes(m) ? (
      <button
        className={classes.Selected}
        onClick={() => props.removeFilter(m)}
        key={m}
      >
        {m}
      </button>
    ) : (
      <button onClick={() => props.addFilter(m)} key={m}>
        {m}
      </button>
    )
  );
  return (
    <div className={classes.Controls}>
      <h3>Sizes:</h3>
      <div className={classes.Sizes}>{sizes}</div>
    </div>
  );
};

const MapStateToProps = state => {
  return {
    filters: state.filters
  };
};

const MapDispatchToProps = dispatch => {
  return {
    addFilter: filter => dispatch(actions.addFilter(filter)),
    removeFilter: filter => dispatch(actions.removeFilter(filter))
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Controls);
