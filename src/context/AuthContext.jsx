import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [userPayload, setUserPayload] = useState(null);

  const login = (token) => {
    localStorage.setItem("token", token);
    const payload = jwtDecode(token);
    setIsAuth(true);
    setUserPayload(payload);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    setUserPayload(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = jwtDecode(token);
        setIsAuth(true);
        setUserPayload(payload);
      } catch (error) {
        console.error("Error decoding token:", error.message);
        localStorage.removeItem("token");
        setIsAuth(false);
        setUserPayload(null);
      }
    }
  }, []);

  const dataContext = { login, logout, isAuth, userPayload };
  return (
    <AuthContext.Provider value={dataContext}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
