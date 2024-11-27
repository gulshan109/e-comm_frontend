import React from 'react'
import AdminMenu from '../../layouts/AdminMenu'
import { useAuth } from '../../context/Auth'
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    const [auth] = useAuth();
  return (
    <section className=' flex w-[100%] h-[100%] '>
        <article className=' flex w-[100%] h-[100%]  '>
            <main className=' flex w-[20%] h-[100%]  '>
                <AdminMenu/>
            </main>
            <main className=' flex w-[80%] h-[100%]'>
                <Outlet/>
                {/* <ul className=' flex flex-col w-[30%] h-[40%] bg-orange-500 my-20 mx-10 justify-center px-6 gap-4 rounded-xl'>
                    <li className=' flex text-xl'>Admin name : {auth?.user?.name}</li>
                    <li>Admin Email : {auth?.user?.email}</li>
                    <li>Admin Contact : {auth?.user?.phone}</li>
                    <li>Admin Address : {auth?.user?.address}</li>
                </ul> */}
            </main>
        </article>
    </section>
  )
}

export default AdminDashboard
