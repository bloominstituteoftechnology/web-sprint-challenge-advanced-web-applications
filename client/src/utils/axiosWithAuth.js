import axios from 'axios';

const axiosWithAuth = _ => {
    const token = localStorage.getItem("token")
    
    return axios.create({
        baseURL: "http://localhost:5000",
        headers: {
            Authorization: token 
        }
    })

}

export default axiosWithAuth;