import { useEffect, useState } from 'react';
import { Author } from './constants';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
// import { Button } from './Button';

export const Form = ({ addMessage, messages}) =>{
    
    const [text, setValue] = useState('');

    const makeSubmit = (event) => {
        event.preventDefault();
        addMessage({
            author: Author.user,
            text,
        });
      setValue('');
    };

    useEffect(() => {
       if (messages[messages.length-1].author === Author.user){
           setTimeout(() => {addMessage({
            author: Author.bot,
            text: "hi there",
           })}, 1000);
       }
    }, [messages])

    return  <form onSubmit={makeSubmit}>
        
        <TextField id="standard-basic" label ="enter your text here" variant="standard" 
            type="text" value ={text} onChange={event => setValue(event.target.value)}/>
             <Button 
                variant="contained" disableElevation
                type='click'
                style ={{height: '48px'}}>
                Submit
        </Button>
    </form>
}

Form.propTypes = {
    messages: PropTypes.array,
    addMessage: PropTypes.func,
  };


