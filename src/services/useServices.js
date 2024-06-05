import axiosInstance from "./axiosConfig";

const registerUserService = (data) => {
  return axiosInstance.post("api/v1/register", data);
};

const loginUserService = (data) => {
  return axiosInstance.post("api/v1/login", data);
};

const getUserService = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return Promise.reject("Token not found");
  }

  return axiosInstance.get("/api/v1/users", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export { registerUserService, loginUserService, getUserService };
