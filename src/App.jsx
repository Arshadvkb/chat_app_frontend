import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home_page from "./pages/Home_page";
import Signup_page from "./pages/Signup_page";
import Login_page from "./pages/Login_page";
import Profile_page from "./pages/Profile_page";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import Settings_page from "./pages/Settings_page";
import { Toaster } from "react-hot-toast";
import { useThemeStore } from "./store/useathemeStore";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const{theme}=useThemeStore()

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }
  return (
    <div data-theme={theme}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home_page /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <Signup_page /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login_page /> : <Navigate to="/" />}
        />
        <Route path="/settings" element={<Settings_page />} />
        <Route
          path="/profile"
          element={authUser ? <Profile_page /> : <Navigate to="/login" />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
