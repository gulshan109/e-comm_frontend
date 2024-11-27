import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt } from "react-icons/fa";

const Signin = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [answer , setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(name,email,password,phone,address);

    try {
      let res = await axios.post("http://localhost:9000/user/register" , {name,email,password,phone,address ,answer});
      if(res.data.success){
        toast.success(res.data && res.data.message)
      }else{
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error ,"error in signin");
      
    }
    toast.success("sign in successfully");
    navigate("/login")
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setAddress("");
    setAnswer("")
  }

  return (
    <section className=' flex justify-center items-center  w-screen h-screen flex-col'>
        <article className=' flex w-[70%] h-[90%] bg-green-300 justify-center rounded-xl sm:w-[50%] md:w-[30%] xl:w-[30%] '>
            <main className=' flex flex-col w-[90%] h-[100%] justify-center items-center gap-4 '> 
              <h1 className=' flex justify-center items-center font-bold m-2 underline gap-1'>SignIn <FaSignInAlt /> </h1>
                <form action="" className=' flex flex-col w-[100%] h-[90%]  gap-7 justify-center items-center ' onSubmit={handleSubmit} >
                  <input type="text" placeholder=' name' name='name' value={name} onChange={(e)=>{setName(e.target.value)}} required />
                  <input type="text" placeholder=' email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                  <input type="text" placeholder=' password' name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                  <input type="telphone" placeholder=' phone no.' name='phone' value={phone} onChange={(e)=>{setPhone(e.target.value)}} required/>
                  <input type="text" placeholder='Address' name='address' value={address} onChange={(e)=>{setAddress(e.target.value)}} required />
                  <input type="text" placeholder='answer' name='answer' value={answer} onChange={(e)=>{setAnswer(e.target.value)}} required />
                  <input type="submit" className=' border px-4 py-2 rounded-xl hover:bg-blue-400'  />
                  <ToastContainer/>
                  
                </form>
                  
            </main>
        </article>
    </section>
  )
}

export default Signin
