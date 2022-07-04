import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../store/profile/slice";



export const SignIn = () => {
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [err, setErr] = useState(false);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setErr(false);
        if (login === 'gb' && pass === 'gb') {
            dispatch(auth(true));
            navigate('/', { replace: true });
        } else {
            setErr(true);
        }
    };
    return (
        <>
        <h2>SignIn</h2>
        <form onSubmit={handleSubmit}>
        <p>Логинг</p>
        <input type='text' value={login} onChange={(e) => setLogin(e.target.value)}/>
        <p>Пароль</p>
        <input type='password'  value={pass} onChange={(e) => setPass(e.target.value)}/>
        <br />
        <button>Логин</button>
        </form>
        {err && <p style = {{ color: 'red' }}>Логин или пароль не верны</p>}
        </>
    )
}