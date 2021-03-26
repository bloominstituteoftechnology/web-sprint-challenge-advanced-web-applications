import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token

const axiosWithAuth = () => {
    return axios.create({
        baseURL:'http://localhost:5000/api',
        headers:{
            authorization:localStorage.getItem("token")
        }
    })
}

export default axiosWithAuth;