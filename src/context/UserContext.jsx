import { createContext, useState, useEffect } from "react";
import { getUserService } from "@/services/useServices";
import { AuthProvider } from "@/context/AuthContext";

const UserContext = createContext();

function UserProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const { isAuth } = AuthProvider();
  console.log("IsAuth: " + isAuth);

  const fetchUserData = async () => {
    const token = localStorage.getItem("token");
    console.log("Retrieved Token in fetchUserData:", token); // Log token
    if (!token) {
      console.error("Token not found in fetchUserData");
      setLoading(false);
      return;
    }

    try {
      const response = await getUserService();
      console.log("Response from getUserService:", response); // Verify response
      setUserData(response.data);
    } catch (error) {
      console.error(
        "Error al cargar datos del usuario:",
        error.response || error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuth) {
      fetchUserData();
    }
  }, [isAuth]);

  const dataContext = { userData, loading };
  return (
    <UserContext.Provider value={dataContext}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserProvider };
