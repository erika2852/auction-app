import React from 'react';
import {Outlet, Navigate} from "react-router-dom";

const Validation = (auth) => 
{
    return auth ? <Navigate to = "/first"/> : <Navigate to = "/login"/>; 
}
export default Validation;

