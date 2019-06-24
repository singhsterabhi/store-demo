import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cartShow: false,
  products: null,
  loading: true,
  cart: {}
};

const reducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default reducer;
