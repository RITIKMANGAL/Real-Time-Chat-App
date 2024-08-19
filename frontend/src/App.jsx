import React from 'react';
import "./App.css";
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';

const App = () => {
  const { authUser } = useAuthContext();

  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        <Router>
          <Routes>
            <Route path='/' element={authUser ? <Home /> : <Navigate to="/login" />} />
            <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
            <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />} />
          </Routes>
        </Router>
        <Toaster />
      </div>
    </>
  );
};

export default App;
