import axios from "axios";


export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');

    return axios.create({
        headers: {
            Authroization: token
        },
        baseURL: "http://localhost:5000",
    });
};


//Task List:
//Build and export a function used to send in our authorization token