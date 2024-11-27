import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <section className=' flex w-[100%] h-[100%] justify-center '>
        <article className=' flex flex-col w-[100%] h-[100%] items-center'>
                <h1 className=' flex border w-[100%] h-[10%] justify-center items-center '>User DashBoard</h1>
            <main className=' flex flex-col border w-[100%] items-center justify-center h-[20%]'>
                <NavLink to="/dashboard/user/profile" className=" flex border w-[100%] h-[100%] items-center justify-center ">
                    Profile
                </NavLink>
                <NavLink to="/dashboard/user/orders" className=" flex border w-[100%] h-[100%] items-center justify-center" >
                    Orders
                </NavLink>
            </main>
        </article>
    </section>
  )
}

export default UserMenu
