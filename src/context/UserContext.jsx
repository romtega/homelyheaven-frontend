import { createContext, useState, useEffect } from "react";
import axiosInstance from "@/services/axiosConfig.js";
import { useAuthContext } from "@/hooks/useAuthContext";

const UserContext = createContext();

function UserProvider({ children }) {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userPayload } = useAuthContext();

  const fetchUserById = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      const response = await axiosInstance.get(`/api/v1/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error("Fetching users failed", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userPayload?.id) {
      setLoading(true);
      fetchUserById(userPayload.id);
    } else {
      setLoading(false);
    }
  }, [userPayload]);

  const dataContext = { userData, loading };
  return (
    <UserContext.Provider value={dataContext}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserProvider };
