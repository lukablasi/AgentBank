import './App.css';
import { Routes, Route } from "react-router-dom";
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
      </div>
  );
}

export default App;
