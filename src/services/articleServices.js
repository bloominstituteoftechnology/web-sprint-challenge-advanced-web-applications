import axiosWithAuth from './../utils/axiosWithAuth';

const articleServices = () => {
    axiosWithAuth()
        .get(`http://localhost:5000/api/articles`)
        .then(res => {
            const serviceRes = res.data;
            // console.log(serviceRes);
            return serviceRes;
        })
        .catch(err => {
            console.log(err);
        })

}

export default articleServices;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.