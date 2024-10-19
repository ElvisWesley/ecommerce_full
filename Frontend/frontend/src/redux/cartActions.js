export const addToCart = (product) => (dispatch, getState) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
  
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.items));
  };
  
  export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    });
  
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.items));
  };
  