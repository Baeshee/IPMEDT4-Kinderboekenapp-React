import {CHANGE_COLORVALUE, CHANGE_USERDATA, CHANGE_BASEURL} from './actions';

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