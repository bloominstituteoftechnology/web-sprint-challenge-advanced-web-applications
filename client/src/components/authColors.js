import {axiosWithAuth} from './axiosWithAuth';

export const authColors=()=>{
    return axiosWithAuth()
            .get('http://localhost:5000/api/colors')
            .then(res=>{return res})
            .catch(err=>{
                console.log("API error: ", err);
                return err;
            })
}


