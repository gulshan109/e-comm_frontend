import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import { toast } from "react-toastify";


const ForgotPassword = () => {
    const [email , setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const[answer , setAnswer]= useState("");

    const navigate = useNavigate();

    const handleSubmit =async (e)=>{
        e.preventDefault();
        console.log(email , answer, newPassword);

        try {
            const res = await axios.patch("http://localhost:9000/user/forgot", {email ,answer , newPassword});
            if(res & res.data.success){
                toast.success(res.data && res.data.message);
                navigate("/login")
            } else {
                console.log(res.data.message);
            }
            
        } catch (error) {
            console.log(error,"password cannot update");
            toast.error("Password connot update")
        }
        
    }


  return (
    <section className=" flex justify-center items-center  w-screen h-screen">
      <article className=" flex w-[30%] h-[80%] bg-green-300 justify-center rounded-xl ">
        <main className=" flex flex-col w-[90%] h-[90%] justify-center items-center gap-4 ">
          <h1 className=" flex justify-center items-center font-bold m-2 underline h-[20%]">
            Forgot Password
          </h1>
          <form action=""
            className=" flex flex-col w-[100%] h-[70%]  gap-7 justify-center items-center "
            onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter your email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className=" py-2 px-4 rounded-xl" />
            <input type="text" placeholder=" Enter the Answer" name="answer"  value={answer} onChange={(e)=>{setAnswer(e.target.value)}} className=" py-2 px-4 rounded-xl" />
            <input type="password" placeholder="enter new password" name="newPassword" value={newPassword} onChange={(e)=>{setNewPassword(e.target.value)}} className=" py-2 px-4 rounded-xl" />
            <button type="submit" className=' border px-4 py-2 rounded-xl hover:bg-blue-400' >Password update</button>
          </form>

          <button className=" flex flex-row  justify-center items-center w-[100%] h-[10%] text-red-600  ">
          <Link to="/login" className=" flex justify-center items-center underline text-md font-semibold">Go to login page <IoLogIn /></Link>
          </button>
          
        </main>
      </article>
    </section>
  );
};

export default ForgotPassword;
