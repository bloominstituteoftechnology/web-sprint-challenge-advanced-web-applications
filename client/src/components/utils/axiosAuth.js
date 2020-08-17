import axios from "axios";

export const axiosAuth = () => {
    const token = window.localStorage.getItem("token");
    
    return axios.create({
        baseURL: "http://localhost:5000/api/",
        headers: {
            Authorization: token
        }
    })
}