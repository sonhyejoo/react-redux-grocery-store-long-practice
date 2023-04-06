import produceData from "../mockData/produce.json";

const POPULATE = "produce/POPULATE";
const LIKE_PROD = "produce/LIKE";

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData,
  };
};

export const likedProduce = (id) => {
  return {
    type: LIKE_PROD,
    id,
  };
};

export default function produceReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE:
      let normProduce = {};
      let produce = action.produce;
      produce.forEach((el) => {
        normProduce[el.id] = el;
      });
      return normProduce;
    case LIKE_PROD:
      const newState1 = {
        ...state,
        [action.id]: {
          ...state[action.id],
          liked: !state[action.id].liked,
        },
      };
      return newState1;
    default:
      return state;
  }
}
