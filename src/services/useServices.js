import axiosInstance from "./axiosConfig";

const registerUserService = (data) => {
  return axiosInstance.post("api/v1/register", data);
};

const loginUserService = async (data) => {
  const response = await axiosInstance.post("api/v1/login", data);
  const { token } = response.data;
  if (token) {
    localStorage.setItem("token", token);
  }
  return response;
};

const getUserService = () => {
  const token = localStorage.getItem("token");
  console.log("Retrieved Token:", token); // token x2 para test
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
