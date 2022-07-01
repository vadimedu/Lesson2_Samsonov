import { useState, useEffect } from "react";
import { Form } from '../Form';
import { MessageList } from "../MessageList";
import { Author } from "../constants";
import { ChatList } from "../ChatList";
import { Navigate, useParams } from "react-router-dom";
import { defMes } from "../App";
import { useSelector } from "react-redux";


export const ChatPage = () => {
    const { chatId } = useParams();
  
   const messages = useSelector ((state) => state.messages);

     if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace/>;
     }

     return (
        <>
        <ChatList />
        <MessageList messages={messages[chatId]}></MessageList>
        <Form ></Form>
        </>
     );   
};
