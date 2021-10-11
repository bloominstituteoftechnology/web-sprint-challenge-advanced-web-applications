import axios from 'axios';

const axiosWithAuth = ()=> {
    return axios.create({
        headers: {
          authorization: localStorage.getItem('token'),
        },
        baseURL: 'http://localhost:5000/api/articles/',
      }); 
}

export default axiosWithAuth;

//Task List:
//1. Complete axiosWithAuth