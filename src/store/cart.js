const ADD_TO_CART = "cart/addToCart";
const REMOVE_FROM_CART = "cart/removeFromCart";

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id: id,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id: id,
  };
};

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const newState1 = {
        ...state,
        [action.id]: { id: action.id, count: 1 },
      };
      return newState1;
    case REMOVE_FROM_CART:
      const newState2 = state;
      console.log("newState2", newState2);
      delete newState2[action.id];
      console.log("after newState2", newState2);
      return newState2;
    default:
      return state;
  }
}
