import React from 'react';
import { MessageList } from './MessageList.js';
import { useState } from 'react';
import { Author } from './constants.js';
import { Form } from './Form.js';
import { ChatListForm } from './ChatListForm.js';
import { ChatList } from './ChatList.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main.js';
import { Profile } from './pages/Profile.js';
import { Header } from './Header';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store/index.js';
import { ChatPage } from './pages/ChatPage';
import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import { addChat, addMessage, deleteChat } from './store/messages/actions.js';

 
const defaultMessages = {
  default: [],
};

 export const App = () => {
// const [messages, setMesseges] = useState (defaultMessages);


// const dispatch = useDispatch();


// const chats = useMemo(
//   () =>
//   Object.keys(messages).map((chat) => ({
//     id: nanoid(),
//     name: chat,
//   })),
//   [Object.keys(messages).length]
// );

// const onAddChat =  (newChat) => {
//   dispatch(addChat(newChat));
// };

// const onDeleteChat = (name) => {
//   dispatch(deleteChat(name));
// };

// const onAddMessage = (chatName, newMessage) => {
//   dispatch(addMessage(chatName, newMessage));
// };



  return (
  <>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Header/>}>
          <Route  index element={<Main/>}/>
          <Route  path ="profile" element={<Profile/>}/>
          <Route  path ="chats"> 
                <Route index element={<ChatList ></ChatList>}/>
                <Route path= ":chatid" element={<ChatPage />} />
          </Route>  
        </Route>
          <Route path ="*" element={<h2> 404 not found page </h2>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
   
  </>
   
  );
}

 {/* <MessageList messages = {messages}/>
    <Form addMessage = {addMessage} messages={messages}></Form>
    <ChatListForm addList={addList} list={list}></ChatListForm>
    <ChatList list={list}></ChatList> */}