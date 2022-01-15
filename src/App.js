import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';
import Register from './pages/Register';
import AuthContextProvider from './contexts/AuthContext';

function App() {

  return (
    <AuthContextProvider>
      <Header />
      <div className="container">
        <div className="mt-5 mx-auto mw-xs">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>  
      </div>
    </AuthContextProvider>
  );
}

export default App;

