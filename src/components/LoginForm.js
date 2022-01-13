import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmitLogin = e => {
        e.preventDefualt();
        axios.post('/auth/login', { username, password })
        .then(res=> {
            console.log(res.data);
            localStorage.setItem('token', res.data.token)
            navigate('/')
        })
        .catch(err =>{ 
            console.log(err)
            setError('Invalid username or password.')
            setTimeout(() => setTimeout(''), 5000)
        });
};

    return (
        <>
        {error && <div className="alert alert-danger">{error}</div>}    
        <form>
        <div className="mb-3">
            <label for="username" className="form-label">
                Username
            </label>
            <input 
                type="text" 
                className="form-control" 
                id="username" 
                value={username} 
                onChange={e.traget.value} 
            />
        </div>
        <div className="mb-3">
            <label for="password" className="form-label">
                Password
            </label>
            <input 
                type="password" 
                className="form-control" 
                id="password"
                value={password}
                onChange={e.traget.value}
            />
        </div>
        <button 
            type="submit" 
            className="btn 
            btn-primary"
            onSubmit={handleSubmitLogin}
        >
            Login
        </button>
        </form>
    

        </>
    );
}

export default LoginForm;