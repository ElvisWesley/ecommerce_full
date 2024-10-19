const initialState = {
    items: [],
  };
  
  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const item = action.payload;
        const existItem = state.items.find((i) => i.id === item.id);
  
        if (existItem) {
          return {
            ...state,
            items: state.items.map((i) => (i.id === existItem.id ? item : i)),
          };
        } else {
          return { ...state, items: [...state.items, item] };
        }
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          items: state.items.filter((i) => i.id !== action.payload),
        };
      default:
        return state;
    }
  };
  