import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link, Outlet } from 'react-router-dom';


export const ChatListForm = ({ addList, id = 1, list}) =>{
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

    return <>
   <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', wordBreak: 'break-word', }}>
     
     {list.map((l, idx) => {
         
         return <ListItem key = {idx}>
                  <Link to={`/chats/${l.textList}`} > Имя ЧАТА: {l.textList}  </Link> 
                 <ListItemText>ID ЧАТА: {l.id}  </ListItemText>
                </ListItem>
      
     })}
     
 </List>

    <form onSubmit={makeSubmit}>
        
        <TextField id="standard-basic" label ="enter name of your chat" variant="standard" 
        type="text" value ={textList} onChange={event => setList(event.target.value)}/>
        <Button 
        variant="contained" disableElevation
        type='click'
        style ={{height: '48px'}}>
  Submit
</Button>
    </form>
    </> 
}


