import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, green } from '@mui/material/colors';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChatListForm } from './ChatListForm';
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { listArr } from './App';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from './store/messages/actions';


export const ChatList = () => {
   const [value, setValue] = useState('');

   const dispatch = useDispatch();

   const chats = useSelector ((state) => 
    Object.keys(state.messages).map((chat) => ({
        id: nanoid(),
        name: chat,
    }))
   );

   

   const handleChange = (e) => {
    setValue(e.target.value);
   };

   const handleSubmit = (e) => {
    e.preventDefault();

    if(value) {
        dispatch(addChat(value));
 

        setValue('');
    }
   };

   return ( 
       <>
            <ul>
                {chats.map((chat)  => (
                    <ListItem key={chat.id}>
                        <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
                         {/* <button onClick={() => onDeleteChat(chat.name)}>X</button> */}
                    </ListItem>
                ))}
            </ul>
            <form onSubmit ={handleSubmit}>
                <input type="text" value={value} onChange={handleChange}/>
                <button>CreatChat</button>
            
            </form>
       </>
   );
};
