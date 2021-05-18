import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token

export const axiosWithAuth = () => {
    const token = localStorage.getItem('ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98')

    return axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`
        }
    
    })

}