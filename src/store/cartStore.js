// CONSTANTS

const ADD_TO_CART = 'add to cart';

// ACTIONS

export const addToCart = (itemPriceInfo) => (dispatch) =>
  dispatch({ type: ADD_TO_CART, payload: itemPriceInfo });

// REDUCER

const initialState = {
  totalCount: 0,
  totalPrice: 0,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        totalCount: state.totalCount + payload.count,
        totalPrice: state.totalPrice + payload.price,
      };
    default:
      return state;
  }
};
