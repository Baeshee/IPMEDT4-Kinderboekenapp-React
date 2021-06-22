// Reducer for searchbar

import { CHANGE_SEARCHTERM, CHANGE_BOOKS, CHANGE_USERBOOKS, CHANGE_ACTIVEBOOK, CHANGE_COLORVALUE, CHANGE_USERDATA, CHANGE_BASEURL, CHANGE_USERASSIGNMENTS} from "../actions.js";


export const searchTerm = (state = "", action) => {
    switch(action.type){
        case CHANGE_SEARCHTERM:    
            return action.payload;
        default:
            return state;
    }
}

export const books = (state = [], action) => {
    switch(action.type){
        case CHANGE_BOOKS:
            return action.payload;
        default:
            return state;
    }
}

export const userBooks = (state = [], action) => {
    switch (action.type){
        case CHANGE_USERBOOKS:
            return action.payload;
        default:
            return state;
    }
}

export const activeBook = (state = '', action) => {
    switch (action.type){
        case CHANGE_ACTIVEBOOK:
            return action.payload;
        default:
            return state;
    }
}

export const colorValue = (state = "", action) =>{  
    switch(action.type){
        case CHANGE_COLORVALUE:
            return action.payload;
        default:
            return state;
    }
}

export const userData = (state = [], action) =>{  
    switch(action.type){
        case CHANGE_USERDATA:
            return action.payload;
        default:
            return state;
    }
}

export const BASE_URL = (state = "https://kinderboekenapp-laravel.herokuapp.com", action) =>{  
    switch(action.type){
        case CHANGE_BASEURL:
            return action.payload;
        default:
            return state;
    }
}

export const userAssignments = (state = [], action) => {
    switch (action.type){
        case CHANGE_USERASSIGNMENTS:
            return action.payload;
        default:
            return state;
    }
}