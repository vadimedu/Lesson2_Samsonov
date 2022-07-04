import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/firebase";
import { auth } from "../store/profile/slice";



export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [err, setErr] = useState('');
    const [loading, setLoading] =useState(false);

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setErr('');
            await signUp(email, pass);
            navigate('/signin', { replace: true });
        } catch (err) {
            setErr({err}.message)
        } finally {
            setLoading(false);
        }

    };
    return (
        <>
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit}>
        <p>Логин</p>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <p>Пароль</p>
        <input type='password'  value={pass} onChange={(e) => setPass(e.target.value)}/>
        <br />
        <button>Sign up</button>
        </form>
        {loading && <div>loading...</div>}
        {err && <p style = {{ color: 'red' }}>{err}</p>}
        </>
    )
}