import { NAVI } from "./constants"
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./store/profile/slice";




export const Header = () => {
    const isAuth = useSelector((state) => state.profile.isAuth);
    const dispatch = useDispatch();

    const navigate = useNavigate(); 

    const handleLogin = () => {
        navigate ('/signin', { replace: true })
    }

    const handleSignUp = () => {
        navigate ('/signup', { replace: true })
    }

    return  (
    <>
            <header>
        <ul style={{ display: "flex", justifyContent: "space-around"  }}>
            {NAVI.map((link) => (<li key={link.id}>
                <Link to={link.to}> {link.name} </Link>
                </li>
            ))}

        </ul>
                <div>
                    {isAuth && <button onClick={() => dispatch(auth(false))}>Logout</button>}
                    {!isAuth && 
                    <>
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleSignUp}>Sign up</button>
                    </>
                    

                    }

                </div>
    </header>
    <main>
        <Outlet/>
    </main>
    </>

    );
}