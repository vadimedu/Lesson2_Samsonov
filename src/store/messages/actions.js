import { Author } from "../../constants";

export const ADD_CHAT = 'MESSAGE::ADD_CHAT'
export const ADD_MESSAGE = 'MESSAGE::ADD_MESSAGE'
export const DELETE_CHAT = 'MESSAGE::DELETE_CHAT'

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    newChat,
});

export const addMessage = (chatName, text) => ({
    type: ADD_MESSAGE,
        chatName,
        text,
});

export const deleteChat = (chatName) => ({
    type: DELETE_CHAT,
    chatName,
});


export const AddMessageWithReply = (chatName, message) => (dispatch) => {
    dispatch(addMessage(chatName, message));

    if (message.author !== Author.bot) {
        dispatch(
            addMessage(chatName, {
                author: Author.bot,
                text: "i am bot",
            })
        );
    }
};