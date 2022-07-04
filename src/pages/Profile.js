import { useSelector } from "react-redux";
import { store } from "../store";
import { changeName, toggleProfile, auth } from "../store/profile/slice";
import { useState } from "react";

export const Profile = () => {
   const visible = useSelector((state) => state.profile.visible);
   const name = useSelector((state) => state.profile.name);
   const isAuth = useSelector((state) => state.profile.isAuth);
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