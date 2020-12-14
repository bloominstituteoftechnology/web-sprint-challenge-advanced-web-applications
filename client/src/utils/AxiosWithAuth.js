import Axios from "axios"



const axiosWithAuth = () => {

    const token = window.localStorage.getItem('token');
    
    return Axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        authorization: token
    }
})
}

export default axiosWithAuth
