import axiosInstance from "./axiosConfig";

const registerUserService = (data) => {
  return axiosInstance.post("api/v1/register", data);
};

const loginUserService = (data) => {
  return axiosInstance.post("api/v1/login", data);
};

// const getMeUserService = (token) => {
//   return axiosInstance.get("api/v1/users/:userId", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

export { registerUserService, loginUserService };
