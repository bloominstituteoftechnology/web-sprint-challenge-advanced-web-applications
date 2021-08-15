import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token
const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'http://localhost:3000'
    })
}

export default axiosWithAuth;