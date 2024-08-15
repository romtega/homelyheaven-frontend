import { createContext, useState, useEffect } from "react";
import axiosInstance from "@/services/axiosConfig.js";
import { useAuthContext } from "@/hooks/useAuthContext";

const UserContext = createContext();

function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userPayload } = useAuthContext();

  const fetchUserById = async (userId) => {
    if (!userId) return;
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

  const updateUser = async (userId, file) => {
    if (!userId) {
      console.error("User ID is required");
      return;
    }
    if (!file) {
      console.error("No file selected for upload");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("avatar", file);
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No authentication token found");
        return;
      }

      const response = await axiosInstance.patch(
        `/api/v1/users/${userId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUserData(response.data);
      console.log("User updated successfully");
    } catch (error) {
      console.error("Updating user failed", error);
    }
  };

  const dataContext = { userData, loading, setUserData, updateUser };
  return (
    <UserContext.Provider value={dataContext}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserProvider };
