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

export const ChatList = ({ list, addList }) => {
    const idList = nanoid();
    const [textList, setList] = useState('');
        
    const makeSubmit = (event) => {
        
        event.preventDefault();
        console.log()
        addList({
            id: idList,
            textList,
        });
        setList('');
    };
    return 
       
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', wordBreak: 'break-word', }}>
     
        {list.map((l, idx) => {
            
            return 
            <ListItem key = {idx}>
                    <ListItemText>ИМЯ ЧАТА: {l.textList}  </ListItemText>
                    <ListItemText>ID ЧАТА: {l.id}  </ListItemText>
                   </ListItem>
         
        })}
        
    </List>
  
       
    


}



