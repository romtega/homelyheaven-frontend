import { createContext, useState, useEffect } from "react";
import { getUserService } from "@/services/useServices";

const UserContext = createContext();

function UserProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const response = await getUserService();
      console.log("Response from getUserService:", response); // Respuesta
      setUserData(response.data);
    } catch (error) {
      console.error("Error al cargar datos del usuario:", error.response || error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const dataContext = { userData, loading };
  return (
    <UserContext.Provider value={dataContext}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserProvider };
