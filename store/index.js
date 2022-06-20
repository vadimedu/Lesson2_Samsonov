import { createStore, compose, combineReducers } from "redux";
import { profileReducer } from "./profile/reducer";
import { messageReducer } from './messages/reducer'

export const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messageReducer,
});

export const store = createStore(rootReducer, composeEnhancers());
