import axios from 'axios';

export const axiosWithAith = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:5000/',
        headers: {  
            authorization: token
        }
    })
}