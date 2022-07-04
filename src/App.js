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
import { Articles } from './pages/Articles.js';
import { SignIn } from './pages/SignIn.js';
import { PrivateRoute } from './PrivateRoute.js';
import { PublicRoute } from './PublicRoute.js';
import { SignUp } from './pages/SignUp.js';

 
const defaultMessages = {
  default: [],
};

 export const App = () => {


  return (
  <>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Header/>}>
          <Route  index element={<Main/>}/>
          <Route  path ="profile" element={<PrivateRoute component={<Profile />}/>}/>
          <Route  path ="articles" element={<Articles/>}/>
          <Route  path ="signin" element={<PublicRoute component={<SignIn />} /> } />
          <Route  path ="signup" element={<SignUp />} />
          <Route  path ="chats" element={<PrivateRoute />} > 
                <Route index element={<ChatList ></ChatList>} />
                <Route path= ":chatId" element={<ChatPage />} />
          </Route>  
        </Route>
          <Route path ="*" element={<h2> 404 not found page </h2>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
   
  </>
   
  );
}
