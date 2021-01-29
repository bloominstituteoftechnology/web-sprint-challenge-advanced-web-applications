import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token

const axiosWithAuth = () =>{
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            Authorization: token
        }
    });
};
export default axiosWithAuth;