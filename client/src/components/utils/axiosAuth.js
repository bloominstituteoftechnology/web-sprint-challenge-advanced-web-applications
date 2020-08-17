import axios from "axios";

export const axiosAuth = () => {
    const token = window.localStorage.detItem("token");
    
    return axios.create({
        baseURL: "http://localhost:5000/api/",
        headers: {
            Authorization: token
        }
    })
}