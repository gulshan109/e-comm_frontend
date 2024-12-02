import React from 'react'
import { useAuth } from '../context/Auth';


const Profile = () => {
  const [auth] = useAuth();
  return (
    <section className=' flex justify-center items-center  w-[100vw] h-[90vh] flex-col'>
    <article className='flex w-[100%] h-[100%]  flex-col justify-center  '>
        <main className=' flex w-[50%] h-[100%] flex-col items-center justify-center  '> 
            <h1 className='bg-black text-white w-[50%] py-2 px-4  rounded-t-xl'>hey this is profile</h1>
            <ul className=' flex flex-col justify-center  gap-4 w-[50%] bg-orange-400 px-2 py-4 '>
              <li className=' font-bold '> Id : {auth.user._id}</li>
              <li className=' font-bold '>Name : {auth.user.name}</li>
              <li className=' font-bold '> Email : {auth.user.email}</li>
              <li className=' font-bold '> PhoneNo. : {auth.user.phone}</li>
              <li className=' font-bold '> Address : {auth.user.address}</li>
              <li className=' font-bold '> Role : {auth.user.role}</li>
            </ul>
            <p className=' flex w-[50%] overflow-x-auto bg-orange-400 font-semibold '>{auth.token}</p>
            {/* <pre className=' flex w-[50%] h-[80%] overflow-x-scroll bg-orange-400 '>{JSON.stringify(auth , null , 4)}</pre> */}
        </main>
    </article>
</section>  
  )
}

export default Profile
