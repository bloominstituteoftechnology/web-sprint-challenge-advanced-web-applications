import axios from "axios";

export const axiosWithAuth = () => {
    const token = useLocalStorage.getItem("token");

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: "http://localhost:5000"
    })
}