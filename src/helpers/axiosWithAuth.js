import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'http://localhost:5000/api'
    });
}

//Task List:
//Build and export a function used to send in our authorization token