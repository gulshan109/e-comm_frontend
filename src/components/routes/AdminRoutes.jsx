import { useEffect, useState } from "react";
import { useAuth } from "../context/Auth";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Spinner from "../Loading/Spinner";
import AdminDashboard from "../pages/Admin/AdminDashboard";


export default function AdminRoutes(){
    const [ok, setOk] = useState(false);
    const[auth , setAuth] = useAuth();

    useEffect(() => {
      const authCheck = async ()=>{
        let token = JSON.parse( localStorage.getItem("auth")).token        
        // const res = await axios.get("/user/admin-auth");
        const res = await axios.get(`http://localhost:9000/user/admin-auth/${token}`);
        if(res.data.ok){
            setOk(true);
            console.log("admin-auth is true");
            
        } else{
            setOk(false);
            // console.log(res);
            console.log("admin-auth is not true");
            
        }
      }
      if(auth?.token) authCheck();
    }, [auth?.token]);
    return ok ?<Outlet/> : <AdminDashboard/>
    
}
