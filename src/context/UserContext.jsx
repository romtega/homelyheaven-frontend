import { createContext, useState, useEffect } from "react";
import axiosInstance from "@/services/axiosConfig.js";

const UserContext = createContext();

function UserProvider({ children }) {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      const response = await axiosInstance.get("/api/v1/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data); // Suponiendo que `response.data` es un array de usuarios
    } catch (error) {
      console.error("Fetching users failed", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const dataContext = { userData, loading };
  return (
    <UserContext.Provider value={dataContext}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserProvider };
