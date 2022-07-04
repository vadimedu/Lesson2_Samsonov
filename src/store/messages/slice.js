import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Author } from "../../constants";
import { nanoid } from 'nanoid';

const initialState = {
    default: [
        {
            id: '1',
            author: Author.user,
            text: 'welcome',
        }
    ]
   
};

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addChat(state, action) {
            state[action.payload.name] =[];
        },
        deleteChat(state, action) {
            delete state[action.payload.name];
        },
        addMessage(state, action) {
            state[action.payload.chatName].push({
                id: nanoid(),
                author: action.payload.message.author,
                text: action.payload.message.text,
            });
        },
    },
});

let timeout;

export const addMessageWithReply = createAsyncThunk('messages/addMessageWithReply', async ({chatName, message}, {dispatch}) => {
    dispatch(addMessage({ chatName, message }));

    if (message.author !== Author.bot) {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            dispatch (addMessage({
                chatName,
                message: {
                    author: Author.bot,
                    text: 'I am BOT',
                }
            }))
        }, 1000)

        
    }

});

export const { addChat, deleteChat, addMessage } = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;