import React from "react";

export const axiosWithAuth =  ()=>{
    const token = localStorage.getItem("token");
    
    return axios.create({
        headers:{
            Authorization:token
        },
        baseURL:"http://localhost:5000"
    }

    )
}