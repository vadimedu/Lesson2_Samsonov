import React from 'react';
import { MessageList } from './MessageList.js';
import { useState } from 'react';
import { Author } from './constants.js';
import { Form } from './Form.js';

export const defMes = [{
  author: Author.user,
  text: 'hello',
}
];

export const App = () => {
  const [messages, setMessages] = useState(defMes);

const addMessage = (m) =>{
  setMessages([...messages, m]);
};

  return (
   <>
   <MessageList messages = {messages}/>
   <Form addMessage = {addMessage} messages={messages}></Form>
   </>
  );
}

