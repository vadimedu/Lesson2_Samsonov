import { Author } from "../../constants";

export const ADD_CHAT = 'MESSAGE::ADD_CHAT'
export const ADD_MESSAGE = 'MESSAGE::ADD_MESSAGE'
export const DELETE_CHAT = 'MESSAGE::DELETE_CHAT'

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    newChat,
});

export const addMessage = (chatName, message) => ({
    type: ADD_MESSAGE,
        chatName,
        message,
});

export const deleteChat = (chatName) => ({
    type: DELETE_CHAT,
    chatName,
});

let timeout;

export const addMessageWithReply = (chatName, message) => (dispatch) =>{
    dispatch(addMessage(chatName, message));

        if (message.author !== Author.bot) {
            if (timeout) {
                clearTimeout(timeout);
            }

            timeout = setTimeout(
                ()=>
                    dispatch(
                        addMessage(chatName, {
                            author:Author.bot,
                            text: "i`m BOT"
                        })
                    ),
                    1000
            );
        }
}
