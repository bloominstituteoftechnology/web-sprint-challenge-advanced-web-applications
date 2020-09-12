import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      //Returns the current value associated with the given key, or null if the given key does not exist in the list associated with the object.
      authorization: localStorage.getItem('token') 
    }
  })
}
