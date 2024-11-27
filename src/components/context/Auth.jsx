import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();

const AuthProvider = ({children})=>{
  const [auth , setAuth]= useState(
    {
      user: null,
      token :""
    }
  );

  // default axios
  // axios.defaults.headers.common["Authorization"] = auth?.token
  axios.defaults.cookie = auth?.token
  // console.log(auth?.token);
  

  useEffect(()=>{
    let data = localStorage.getItem("auth");
    if(data){
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user : parseData.existingUser,
        token : parseData.token
      });
    }
  },[]);

  return(
    <AuthContext.Provider value={[auth , setAuth]}>
      {children}
    </AuthContext.Provider>
  )
}

// custom hooks
const useAuth = ()=> useContext(AuthContext)

export {useAuth , AuthProvider};