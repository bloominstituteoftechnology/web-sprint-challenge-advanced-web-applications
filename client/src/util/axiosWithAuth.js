import axios from "axios";

// Build a module that creates a new "instance" of the axios object, but with this added functionality:
// 1. Define the base url for our API
// 2. Include auth token in headers object

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
//   console.log("Our Token: ",token);
  return axios.create({
    baseURL: "http://localhost:5000/",
    headers: {
      Authorization: token
    }
  });
};
