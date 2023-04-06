const ADD_TO_CART = "cart/addToCart";
const REMOVE_FROM_CART = "cart/removeFromCart";
const PLUS_CART = "cart/plusCart";
const SET_CART = "cart/setCart";

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

export const plusCart = (id, delta) => {
  return {
    type: PLUS_CART,
    id,
    delta,
  };
};
export const setCart = (id, newCount) => {
  return {
    type: SET_CART,
    id,
    newCount,
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
      const newState2 = { ...state };
      delete newState2[action.id];
      return newState2;
    case PLUS_CART:
      const newState3 = {
        ...state,
        [action.id]: {
          id: action.id,
          count: state[action.id].count + action.delta,
        },
      };
      return newState3;
    case SET_CART:
      const newState4 = {
        ...state,
        [action.id]: {
          id: action.id,
          count: action.newCount,
        },
      };
      return newState4;
    default:
      return state;
  }
}
