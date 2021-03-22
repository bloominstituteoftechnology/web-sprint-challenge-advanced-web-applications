import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("authToken");
    return axios.create({
        baseURL: "http://localhost:5000/api",
        headers: { Authorization: token }
    });
}

export default axiosWithAuth;

//Task List:
//Build and export a function used to send in our authorization token