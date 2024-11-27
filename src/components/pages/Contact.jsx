import React from 'react'
import Contactus from "../../assets/img/contact.avif"
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";

const Contact = () => {
  return (
    <section className=' flex items-center bg-blue-400 w-screen h-screen flex-col'>
      <img src={Contactus} alt="" className=' flex absolute w-[100%] h-[79%] ' />
      <div className=' flex relative justify-center items-center w-[100%] h-[20%] flex-col '>
        <h1 className=' flex justify-center items-center text-3xl border py-2 px-4 rounded-xl bg-gray-300 '>Contact us</h1>
        <p className=' flex w-[80%] font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit unde tenetur libero fuga voluptatum veniam quidem. Ex ipsum vero velit ea, animi</p>
      </div>
        <article className=' flex relative w-[100%] h-[80%]  '>
            <main className=' flex w-[50%] h-[100%] border flex-col justify-center items-center gap-4'>
              <div>
              <div className=' flex gap-4 items-center'>
                  <span className=' font-bold text-4xl bg-white py-2 px-4 rounded-xl'><FaHome /></span>
                  <div className=' flex flex-col  py-4 px-6'>
                    <h2 className=' text-2xl font-semibold '>Address </h2>
                    <p>202 D , palwal haryana (121102)</p>
                    </div>
                </div>
                <div className=' flex gap-4 items-center'>
                  <span className=' font-bold text-4xl bg-white py-2 px-4 rounded-xl'><IoCall /></span>
                  <div className=' flex flex-col  py-4 px-6'>
                    <h2 className=' text-2xl font-semibold '>Contact</h2>
                    <p> +911234567890</p>
                  </div>
                </div>

                <div className=' flex gap-4 items-center'>
                  <span className=' font-bold text-4xl bg-white py-2 px-4 rounded-xl'>
                  <MdMarkEmailRead />
                  </span>
                  <div className=' flex flex-col  py-4 px-6'>
                    <h2 className=' text-2xl font-semibold '>Email</h2>
                    <p>Gulshan@gmail.com</p>
                  </div>
                </div>
                </div> 
                
            </main>
            <main className=' flex w-[50%] h-[100%] border  flex-col justify-center items-center gap-4 '>
              <h1 className=' font-bold text-xl flex justify-center items-center gap-2'>Send Message <MdMarkEmailRead /></h1>
              <form action="" className=' flex flex-col w-[50%] h-[70%] gap-4 border border-gray-500 justify-center items-center rounded-xl '>
                <input type="text"placeholder=' name ' />
                <input type="email" placeholder=' email' />
                <input type="text" placeholder='message' />
                <input type="submit" className=' border py-2 px-4 rounded-xl hover:bg-gray-500' />
              </form>
            </main>
        </article>
    </section>
  )
}

export default Contact
