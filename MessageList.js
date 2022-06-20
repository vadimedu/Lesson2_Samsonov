import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, green } from '@mui/material/colors';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Author } from './constants';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ChatListForm } from './ChatListForm';
import { useSelector } from 'react-redux';



export const MessageList = ({messages}) => (
   

  
      <>
          <ul>
            {messages.map((message, idx) => (
              <li key={idx}>
                  {message.author}: {message.text}

              </li>
            ))}
        </ul>
      </>   
   
)





  // const [text, setValue] = useState('');
  
  // const makeSubmit = (event) => {
  //     event.preventDefault();
  //     addMessage({
  //         author: Author.user,
  //         text,
  //         nameChat
  //     });

     
  //   setValue('');
  // };
  

//   useEffect(() => {
//     if (messages[messages.length-1].author === Author.user){
//         setTimeout(() => {addMessage({
//          author: Author.bot,
//          text: "hi there",
//         })}, 1000);
//     }
//  }, [messages])


//     return <> <form onSubmit={makeSubmit}>
        
//     <TextField id="standard-basic" label ="enter your text here" variant="standard" 
//         type="text" value ={text} onChange={event => setValue(event.target.value)}/>
//          <Button 
//             variant="contained" disableElevation
//             type='click'
//             style ={{height: '48px'}}>
//             Submit
//         </Button>
// </form>
//       <ul>
//         {messages.map((m, idx) => {
//          if (m.author === 'USER') {
//             return <li key = {idx}>
//             <Avatar sx={{ bgcolor: green[500]  }} variant="rounded"  style={{ minHeight: '50px', width: '150px', 
//             marginBottom: '5px', height: '100%', wordBreak: 'break-word', padding: '5px', marginTop: '5px'}}>
//                    {m.author}: {m.text}  
                 
//             </Avatar>     
//        </li>
//          } else {
//             return <li key = {idx}>
             
//             <Avatar sx={{ bgcolor: deepOrange[500]  }} variant="rounded"  style={{width: '150px', 
//             marginBottom: '5px', marginLeft: '92px'}}>
//                    {m.author}: {m.text}
//             </Avatar>     
//        </li>
//          }
         
//         })}
//     </ul>
     
//     </>
    



// export const MessageList = ({ messages }) => (
//   <ul>
//      {messages.map((message, idx) =>(
//        <li key={idx}>
//          {message.text}
//          {/* {console.log(message.text)}; */}
//        </li>

//      ))}

//   </ul>
  
// )