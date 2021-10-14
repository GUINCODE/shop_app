import { BUY_PHONE } from "./type";


const initialeStatePhone = {
  quantite: 13,
};
const phoneReducer = (state = initialeStatePhone, action) => {
  switch (action.type) {
    case BUY_PHONE:
     
       return{
           ...state,
           quantite: state.quantite - action.payload
       }
      
      break;

    default:
          return state
      break;
  }
};
export default phoneReducer;
