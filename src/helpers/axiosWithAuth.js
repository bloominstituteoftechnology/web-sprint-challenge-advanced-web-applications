import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token

function createAxiosClientWithAuth() {
    // authHeader
    const authToken = localStorage.getItem('whateverMyKeyIs');
    
    const axiosInstanceWithAuthorizationHeaders = axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: { 'Authorization': authToken }
      });

    return axiosInstanceWithAuthorizationHeaders;
}

export default createAxiosClientWithAuth();