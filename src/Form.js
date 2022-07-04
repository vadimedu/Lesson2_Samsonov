import { useEffect, useState } from 'react';
import { Author } from './constants';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addMessage, addMessageWithReply } from './store/messages/slice';
import { Navigate, useParams } from "react-router-dom";

export const Form = () =>{
    
    const [text, setValue] = useState('');
    
    const dispatch = useDispatch();
    const { chatId } = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();
        
      
            dispatch(addMessageWithReply({ chatName: chatId, message: {author: Author.user, text}
            })
            );

      setValue('');
    };

    return ( <form onSubmit={handleSubmit}>
        
        <TextField id="standard-basic" label ="enter your text here" variant="standard" 
            type="text" value ={text} onChange={(event) => setValue(event.target.value)}/>
             <Button 
                
                variant="contained" disableElevation
                type='click'
                style ={{height: '48px'}}>
                Submit
        </Button>
    </form>
    );
};

