import './App.css';
import { Routes, Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'



function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
      <ToastContainer />
      </div>
  );
}

export default App;
