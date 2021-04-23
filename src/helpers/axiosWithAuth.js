import axios from "axios"

const axiosWithAuth =  ()=>{
    const token = window.localStorage.getItem("token");

    return axios.create({
        headers:{
            Authorization:token
        },
        baseURL:"http://localhost:5000"
    }

    )
}
//could not get axioswithAuth to work in other components so it ends up unused
export default axiosWithAuth;
