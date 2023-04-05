const ADD_TO_CART = "cart/addToCart";

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id: id,
  };
};

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const newState = {
        ...state,
        [action.id]: { id: action.id, count: 1 },
      };
      console.log(newState);
      return newState;
    default:
      return state;
  }
}
