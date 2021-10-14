import { BUY_TV } from "./type";


export const buyTv = (nombreTv) => {
  return {
    type: BUY_TV,
    payload: nombreTv,
  };
};

