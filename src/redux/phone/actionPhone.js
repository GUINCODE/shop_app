import { BUY_PHONE } from "./type";



export const buyPhone=(nombrePhone)=>{
    return {
      type: BUY_PHONE,
      payload: nombrePhone,
    };
}