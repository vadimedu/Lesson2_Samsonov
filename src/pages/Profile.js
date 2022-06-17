import { useSelector } from "react-redux";
import { store } from "../store";
import { changeName, toggleProfile } from "../store/profile/actions";
import { useState } from "react";

export const Profile = () => {
   const visible = useSelector((state) => state.visible);
   const name = useSelector((state) => state.name);
   const [value, setValue] = useState('');
  

   return (
      <>
        <h2>Profile page</h2>
        <p>{name}</p>
   <input type="checkbox" checked={visible} readOnly/>
   <button onClick={()=> store.dispatch(toggleProfile())}> change visible</button> 
   <input type='text' onChange={e => setValue(e.target.value)} value={value}/>   
   <button onClick={()=> store.dispatch(changeName(value))}> change name</button> 
      </>
    


   ) 
}