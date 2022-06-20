import { Author } from "../../constants";
import { ADD_CHAT, ADD_MESSAGE } from "./actions";
import { nanoid } from 'nanoid';
const initialMessages = {
    default: [
        {
            id: '1',
            author: Author.bot,
            text: 'Hello',
        },
    ],
    
};


export const messageReducer = (state = initialMessages, action) => {

    switch(action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                [action.newChat]: [],
            };
        }

        // case DELETE_CHAT: {
        //     const chats = { ...state };
        //     delete chats = [action.chatName];
        //     return chats;
        // }

        case ADD_MESSAGE: {
          
            return {
                ...state,
                [action.chatName]: [
                    ...state[action.chatName], {
                        id: nanoid(),
                        author: Author.user,
                        text: action.text,
                    },
                ],
            };
        }
       
        default:
            return state;
    }
}