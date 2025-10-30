import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home_page from "./pages/Home_page"
import Signup_page from "./pages/Signup_page";
import Login_page from "./pages/Login_page";
import Profile_page from "./pages/Profile_page";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";

function App() {
 const {authUser,checkAuth}=useAuthStore()
 useEffect(() => {
   checkAuth();
 }, [checkAuth]);
  return (
    <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home_page/>}/>
    <Route path="/signup" element={<Signup_page/>}/>
    <Route path="/login" element={<Login_page/>}/>
    <Route path="/profile" element={<Profile_page/>}/>
   </Routes>
    </>
  );
}

export default App
