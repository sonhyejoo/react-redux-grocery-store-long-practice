import produceData from "../mockData/produce.json";

const POPULATE = "produce/POPULATE";
console.log(produceData);

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData,
  };
};

export default function produceReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE:
      let normProduce = {};
      let produce = action.produce;
      produce.forEach((el, { id }) => {
        normProduce[id] = el;
      });
      return normProduce;
    default:
      return state;
  }
}
