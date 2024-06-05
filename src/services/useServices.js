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
      console.log("Token set in localStorage:", token);
      // Revisar instalación del token
      const storedToken = localStorage.getItem("token");
      console.log("Immediate retrieved token:", storedToken); // Verificación
    }
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

const getUserService = () => {
  const token = localStorage.getItem("token");
  console.log("Retrieved Token:", token); // Retomar el token
  if (!token) {
    console.error("Token not found");
    return Promise.reject("Token not found");
  }

  return axiosInstance.get("/api/v1/users", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export { registerUserService, loginUserService, getUserService };
