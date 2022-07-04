import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


export const PrivateRoute = ({component}) => {
    const isAuth = useSelector ((state) => state.profile.isAuth);

    if(!isAuth) {
        return <Navigate to='/signin' />;
    }

    return component ? component : <Outlet/>;
}