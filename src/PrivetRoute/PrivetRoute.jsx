import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Context";

const PrivetRoute = ({children}) => {
      let {user,loading} = useContext(AuthContext)
    if(loading){
      return <div className="h-[80vh] flex justify-center items-center"> <span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user){
       return children
    }
    return <Navigate to="/login"></Navigate>
};


export default PrivetRoute;