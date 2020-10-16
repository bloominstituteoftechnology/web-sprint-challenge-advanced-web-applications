import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    headers: {
      Authoriztion: token,
    },
    baseURL: "http://localhost:5000/api",
  });
};
