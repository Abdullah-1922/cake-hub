/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../ContextApi/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location =useLocation()
    console.log(location);
    const  {user,loading}=useContext(AuthContext)
   
    if(loading){
      return  <span className="loading w-fit mx-auto mt-24 loading-spinner text-error"></span>
    }
  if(user){
    return children 
  }

  return <Navigate to={'/login'}></Navigate> 
};

export default PrivateRoute; 