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
  
   const messages = useSelector ((state) => state);
   console.log (messages);
   
   //  useEffect(() => {
   //      if (
   //         chatId &&
   //         messages[chatId]?.length > 0 &&
   //         messages[chatId][messages[chatId].length-1].author === Author.user)
   //         {
   //         const timeout = setTimeout(() => {onAddMessage(chatId,{
   //          author: Author.bot,
   //          text: "hi there",
   //         });
   //      }, 1000);
   //         return () => {
   //             clearTimeout(timeout);
   //         };
   //     }
   //  }, [chatId, messages]);

   //   const handleAddMessage = (message) => {
   //      if (chatId) {
   //          onAddMessage (chatId, message);
   //      }
   //   };
    

     if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace/>;
     }

     return (
        <>
        <ChatList />
        <MessageList messages={chatId ? messages[chatId] : []}></MessageList>
        <Form ></Form>
        </>
     );   
};



// {chatId ? messages[chatId] : []}