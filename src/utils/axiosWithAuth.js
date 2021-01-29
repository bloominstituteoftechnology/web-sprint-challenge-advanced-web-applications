import axios from "axios";

const defaultConfig = {
  headers: { authorization: localStorage.getItem("token") },
  baseURL: "http://localhost:5000",
};

export const axiosWithAuth = (config = defaultConfig) => {
  return axios.create(config);
};
