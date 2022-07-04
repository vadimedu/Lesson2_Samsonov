import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import  thunk from 'redux-thunk';
import { profileReducer } from "./profile/slice";
import { messagesReducer } from './messages/slice'
import { configureStore } from "@reduxjs/toolkit";




const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
});

export const store = configureStore({ 
    reducer: rootReducer 
   


});

// export const store = configureStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
