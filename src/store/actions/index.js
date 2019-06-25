import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const cartOpen = () => {
  return {
    type: actionTypes.CART_OPEN
  };
};

export const cartClose = () => {
  return {
    type: actionTypes.CART_CLOSE
  };
};

export const startLoading = () => {
  return {
    type: actionTypes.STARTLOADING
  };
};

export const finishLoading = () => {
  return {
    type: actionTypes.FINISHLOADING
  };
};

export const setProducts = products => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products
  };
};

export const loadProducts = () => {
  return dispatch => {
    dispatch(startLoading());
    axios
      .get("/products.json")
      .then(res => {
        console.log(res.data);
        dispatch(setProducts(res.data));
        dispatch(finishLoading());
      })
      .catch(e => console.log(e));
  };
};

export const addToCart = product => {
  return {
    type: actionTypes.ADDTOCART,
    product
  };
};

export const removeFromCart = product => {
  return {
    type: actionTypes.REMOVEFROMCART,
    product
  };
};
