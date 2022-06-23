import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import  thunk  from 'redux-thunk';
import { profileReducer } from "./profile/reducer";
import { messageReducer } from './messages/reducer';

export const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messageReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
