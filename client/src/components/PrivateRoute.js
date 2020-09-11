import React from "react";
import {Route,Redirect} from "react-router-dom";


//Requirements of Private Route
//1. It has same Api as <route>
//2. It renders a <Route/> and pass all props
//3. It checks if authendicated then it renders the components through props

const PrivateRoute=({component:Component,...rest})=>{
return(
<Route>
    {...rest}
    render={(props)=>{
        if(localStorage.getItem("token")){
            //If user logged in then we get a token
            return<Component {...props}/>
        }
        else{
            return<Redirect to="/"/>
        }

    }}
</Route>
);
};

export default PrivateRoute;