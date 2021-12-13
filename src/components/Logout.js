import React from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';


const Logout = () => {
    
    const {push}=useHistory();



    axiosWithAuth()
    .post ('http://localhost:5000/api/logout')
    .then(response =>{
        localStorage.removeItem('token')
        push("/")
    })
    .then(data => this.setState({ totalReactPackages: data.total }));

    return
     (<div>

            <h2>You logged out!</h2>

    </div>);
}

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.