import { createContext } from "react";
import { useState } from "react/cjs/react.development";
import jwtDecode from "jwt-decode";
import * as localStorageService from '../services/localStorage';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();
function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null); // { id: username: 'john', email: 'john@gmail.com' } 

    const navigate = useNavigate();
    
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setUser(jwtDecode(token)); 
        }
    }, [])
    
        const login = (username, password) => {
            localStorageService.setToken(token);
            setUser(jwtDecode(token));
            navigate('/');
        }
    
        const logout = () => {
            localStorageService.removeToken(token)
            setUser(null)
    
        }

    const updateUser = newUser => setUser(newUser);

    return <AuthContext.Provider value="">{user, updateUser, login, logout}</AuthContext.Provider>
}

export default AuthContextProvider;
