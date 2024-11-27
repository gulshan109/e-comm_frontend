import React from 'react'
import { useAuth } from '../../context/Auth'
import UserMenu from '../../layouts/UserMenu';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const [auth] = useAuth();
  return (
    <section className=' flex w-screen h-screen '>
        <article className=' flex w-[100%] h-[100%] gap-4 px-8   '>
            <main className=' flex justify-center items-center w-[20%] h-[100%] '> 
                <UserMenu/>
            </main>
            <main className=' flex w-[80%] h-[100%] '>
              <Outlet/>
              {/* <ul className=' flex flex-col w-[40%] h-[40%] bg-blue-500 my-8 mx-8 justify-center px-6 rounded-xl gap-4 '>
                <li className=' flex '>Name : {auth?.user?.name}</li>
                <li className=' flex'>Email : {auth?.user?.email}</li>
                <li className=' flex '>Phone no. : {auth?.user?.phone}</li>
                <li className=' flex'>Address : {auth?.user?.address}</li>
                </ul> */}
            </main>
        </article>
    </section>
  )
}

export default Dashboard
