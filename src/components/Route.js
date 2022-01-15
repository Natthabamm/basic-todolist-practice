import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';

function Route() {
    return <Routes>
        {user ? (
            <>
            <Route path="/" element={<Home />}></Route>
            </>
        ) : (
            <>
                <Route path="/login" element={<Login />}></Route>
            </>
        )}
    </Routes>
}

export default Route;