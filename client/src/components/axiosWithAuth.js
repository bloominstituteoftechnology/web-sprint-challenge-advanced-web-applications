import axios from 'axios'

export function axiosWithAuth() {
    const token = localStorage.getItem('token')
    console.log(token)
    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            'Content-Type': 'application/json',
            authorization: token,
        },
    })
}