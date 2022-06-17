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
import { Provider } from 'react-redux';
import { store } from './store/index.js';

 
export const defMes = [{
  author: Author.user,
  text: 'hello',
}
];
 export const listArr = [{
   id: 1,
   TextList: 'First Chat',
 }]

 export const App = () => {
   const [messages, setMessages] = useState(defMes);
   const [list, setList] = useState([])


   const addMessage = (m) =>{
   setMessages([...messages, m]);
   console.log(messages);
 };

   const addList = (l) => {
   setList([...list, l]);
      console.log(list);
   };

  return (
  <>
    <Provider store={store}>
    <BrowserRouter>
 
        <Routes>
        <Route path ="/" element={<Header/>}>
          <Route  index element={<Main/>}/>
          <Route  path ="/profile" element={<Profile/>}/>
          <Route  path ="/chats"> 
                <Route index element={<ChatListForm addList={addList} list={list}></ChatListForm>}/>
                <Route path= ":chatid" element={<MessageList addMessage={addMessage} messages={messages}/>} />
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