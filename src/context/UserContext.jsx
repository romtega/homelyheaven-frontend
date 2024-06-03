/* eslint-disable comma-dangle */
import { createContext, useState, useEffect } from "react";
import axiosInstance from "@/services/axiosConfig.js";

const UserContext = createContext();

function UserProvider({ children }) {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      const response = await axiosInstance.get("/api/v1/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserData(response.data);
    } catch (error) {
      console.error("Error al cargar datos del usuario", error);
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
