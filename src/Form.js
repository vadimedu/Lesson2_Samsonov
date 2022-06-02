import { useEffect, useState } from 'react';
import { Author } from './constants';

export const Form = ({ addMessage, messages }) =>{
    
    const [text, setValue] = useState('');

    const makeSubmit = (event) => {
        event.preventDefault();
        addMessage({
            author: Author.user,
            text,
        });
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
        <input type="text" value ={text} onChange={event => setValue(event.target.value)} />
        <button>Submit</button>
    </form>
}
