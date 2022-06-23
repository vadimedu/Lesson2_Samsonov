import { useEffect, useState } from 'react';
import { Author } from './constants';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addMessage, AddMessageWithReply } from './store/messages/actions';
import { Navigate, useParams } from "react-router-dom";

// import { Button } from './Button';

export const Form = () =>{
    
    const [text, setValue] = useState('');
    
    const dispatch = useDispatch();
    const { chatId } = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();
        
      
            dispatch(AddMessageWithReply(chatId, text));
       
        
        // addMessage({
        //     author: Author.user,
        //     text,
            
        // });
      setValue('');
    };
   
    // useEffect(() => {
    //    if (messages[messages.length-1].author === Author.user){
    //        setTimeout(() => {addMessage({
    //         author: Author.bot,
    //         text: "hi there",
    //        })}, 1000);
    //    }
    // }, [messages])

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


// if(chatId){
//     dispatch(addMessage(chatId, text));
// }