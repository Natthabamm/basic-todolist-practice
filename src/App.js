import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';
import Register from './pages/Register';

function App() {

  return (
    <>
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
    </>
  );
}

export default App;

