// Reducer for searchbar

import { CHANGE_SEARCHTERM, CHANGE_BOOKS } from "./actions.js";

export const searchTerm = (state = "", action) => {
    switch(action.type){
        case CHANGE_SEARCHTERM:    
            // console.log("object received but i can use it");
            return action.payload;
        default:
            return state;
    }
}

export const books = (state = [], action) => {
    switch(action.type){
        case CHANGE_BOOKS:
            return action.payload;
            // console.log("object received but cant use it yet");
        default:
            return state;
    }
}