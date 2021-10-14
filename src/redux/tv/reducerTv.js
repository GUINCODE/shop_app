import { BUY_TV } from "./type";

const initialeStateTv = {
  quantite: 87,
};
const tvReducer = (state = initialeStateTv, action) => {
  switch (action.type) {
    case BUY_TV:
 
      return {
        ...state,
        quantite: state.quantite - action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};
export default tvReducer;