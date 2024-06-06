import axiosInstance from "./axiosConfig";

const registerUserService = (data) => {
  return axiosInstance.post("api/v1/register", data);
};

const loginUserService = async (data) => {
  try {
    const response = await axiosInstance.post("/api/v1/login", data);
    const { token } = response.data;
    if (token) {
      localStorage.setItem("token", token);
      const storedToken = localStorage.getItem("token");
      console.log("Immediate retrieved token:", storedToken); // Sent token
    }
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

const getUserService = () => {
  const token = localStorage.getItem("token");
  console.log("Retrieved Token in getUserService:", token); // Recieved token
  if (!token) {
    console.error("Token not found in getUserService");
    return Promise.reject("Token not found");
  }

  return axiosInstance.get("/api/v1/users", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export { registerUserService, loginUserService, getUserService };
