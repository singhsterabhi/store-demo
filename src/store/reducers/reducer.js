import * as actionTypes from "../actions/actionTypes";

const initialState = {
  allproducts: null,
  products: null,
  cartShow: false,
  loading: true,
  cart: {},
  filters: []
};

const filterProducts = (filters, state) => {
  let filteredProducts = {};
  Object.keys(state.allproducts).map(k => {
    let inSize = false;
    state.allproducts[k].availableSizes.map(s => {
      if (filters.includes(s)) inSize = true;
      return 0;
    });
    if (inSize) filteredProducts[k] = state.allproducts[k];
    return 0;
  });
  return filteredProducts;
};

const reducer = (state = initialState, action) => {
  let cart, filters, filteredProducts;
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
        products: action.products,
        allproducts: action.products
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
    case actionTypes.ADD_FILTER:
      filters = state.filters.concat(action.filter);
      filteredProducts = filterProducts(filters, state);
      return {
        ...state,
        filters,
        products: filteredProducts
      };
    case actionTypes.REMOVE_FILTER:
      filters = [...state.filters].filter(v => v !== action.filter);
      filteredProducts = filters.length
        ? filterProducts(filters, state)
        : state.allproducts;
      return {
        ...state,
        filters,
        products: filteredProducts
      };
    default:
      return state;
  }
};

export default reducer;
