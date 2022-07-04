import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from './store/index.js';
import { auth } from "./store/profile/slice";


export const PublicRoute = ({component}) => {
    const isAuth = useSelector ((state) => state.profile.isAuth);
    // const navigate = useNavigate;

    if(isAuth) {
       return  <Navigate to='/' replace />;
    }

    return component ? component : <Outlet/>;
};