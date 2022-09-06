import { combineReducers } from 'redux'

const user = (state = null) => state;

const listings = (state = [], action) => {
    switch (action.type){
        case "ADD_LISTINGS":
            return[...state, action.value];
        case "REMOVE_LISTINGS":
            const newState = [...state];
            newState.splice(action.value, 1);
            return newState;
            default:
                return state;
    }
};
const map = (state = [], action)=> {
    switch(action.type){
        case 'ADD_MAPLOCATIONS':
            return action.value
            default:
                return state
    }
};

export default combineReducers({ user, listings, map });