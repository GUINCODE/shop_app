import { combineReducers, createStore } from "redux";
import phoneReducer from "./phone/reducerPhone";
import tvReducer from "./tv/reducerTv";


// je combine mes reducers dans un meme objet, afin d'y acceder par la clé
const reducersCombines= {
    key_phoneReducer: phoneReducer,
    key_tvReducer:tvReducer
}

const routerReducer=combineReducers(reducersCombines);

export  const store = createStore(routerReducer);
