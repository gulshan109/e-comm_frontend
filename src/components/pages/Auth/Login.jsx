import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import{useLocation, useNavigate} from "react-router-dom"
import { useAuth } from '../../context/Auth';
import { IoLogIn } from "react-icons/io5";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const location  = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(email, password);

    try {
      let res = await axios.post("http://localhost:9000/user/login" ,{email , password});
      if(res && res.data.success){
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.existingUser,
          token: res.data.token,
        });
        navigate("/profile");
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state ||"/profile");
        console.log("login successfully");
      }else{
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error , "something went wrong");
      
    }
  }

  return (
    <section className=' flex justify-center items-center  w-screen h-screen flex-col'>
        <article className=' flex w-[70%] h-[80%] bg-red-500 justify-center rounded-xl sm:w-[50%] md:[30%] xl:w-[25%]  '>
            <main className=' flex flex-col w-[90%] h-[90%] justify-center items-center gap-4 '> 
              <h1 className=' flex justify-center items-center font-bold m-2'>LogIn <IoLogIn /></h1>
                <form action="" className=' flex flex-col w-[100%] h-[70%]  gap-7 justify-center items-center ' onSubmit={handleSubmit} >
                  <input type="text" placeholder=' email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
                  <input type="text" placeholder=' password' name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
                  <button onClick={()=>{navigate("/forgotpassword")}}  className=' border px-4 py-2 rounded-xl hover:bg-red-400' >forgot Password</button>
                  <input type="submit" className=' border px-4 py-2 rounded-xl hover:bg-blue-400' />
                </form>
                  
            </main>
        </article>
    </section>
  )
}

export default Login
