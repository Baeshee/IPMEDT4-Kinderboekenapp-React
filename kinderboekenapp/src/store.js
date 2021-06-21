import {combineReducers, createStore} from "redux";
import{colorValue, userData, BASE_URL} from "./reducers";

export const store = createStore(
    combineReducers({
        colorValue,
        userData,
        BASE_URL
    })
);
