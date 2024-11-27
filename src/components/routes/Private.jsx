import { useEffect, useState } from "react";
import { useAuth } from "../context/Auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Loading/Spinner";

import { useNavigate } from "react-router-dom";
import Dashboard from "../pages/users/Dashboard";

export default function PrivateRoute(){
    const[ok , setOk] = useState(false);
    const[auth , setAuth] = useAuth();

    useEffect( ()=>{
        const authCheck = async()=>{
            const res = await axios.get("/user/user-auth");
            console.log(res.data.ok);
            
            if(res.data.ok){
                setOk(true);
                console.log("user-auth true");

            } else{
                setOk(false);
                console.log("user-auth not true");

            }
        }
        if(auth?.token) authCheck();
    },[auth?.token]);

    return ok ? <Outlet/> :<Dashboard/>
}


// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useAuth } from "../context/Auth";


// function PrivateRoute({ children, allowedRole }) {
//   const[auth] = useAuth();
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

  
//   const role = auth?.user?.role;
 
//   useEffect(() => {
//     // Only navigate if the user role does not match the allowed role
//     if ( role !== allowedRole) {
//       navigate("/login"); // Redirect to login if the role is not allowed
//     }
//   }, [role, allowedRole, navigate]); // dependencies to re-run when role or allowedRole change

//   // Render children only if the user has the allowed role
//   return role === allowedRole ? children : null;
// }

// export default PrivateRoute;
