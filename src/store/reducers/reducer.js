import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cartShow: false,
  products: null,
  loading: true,
  cart: {}
};

const reducer = (state = initialState, action) => {
  let cart;
  switch (action.type) {
    case actionTypes.CART_OPEN:
      return {
        ...state,
        cartShow: true
      };
    case actionTypes.CART_CLOSE:
      return {
        ...state,
        cartShow: false
      };
    case actionTypes.STARTLOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FINISHLOADING:
      return {
        ...state,
        loading: false
      };
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.products
      };
    case actionTypes.ADDTOCART:
      cart = { ...state.cart };
      if (cart.hasOwnProperty(action.product))
        cart[action.product] = cart[action.product] + 1;
      else cart[action.product] = 1;
      return {
        ...state,
        cart
      };
    case actionTypes.REMOVEFROMCART:
      cart = { ...state.cart };
      delete cart[action.product];
      return {
        ...state,
        cart
      };
    default:
      return state;
  }
};

export default reducer;
