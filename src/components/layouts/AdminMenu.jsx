import React from 'react'
import { Link } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <section className=' flex w-[100%] h-[100%] '>
        <article className=' flex h-[100%] w-[100%] flex-col '>
                <h1 className=' flex w-[100%] h-[15%] border justify-center items-center font-bold text-xl  '>Admin Panel</h1>
            <main className=' flex justify-center  w-[100%] h-[85%] border '>
                <ul className=' flex flex-col w-[100%] items-center '>
                    <li className=' flex border w-[100%] h-[10%] justify-center items-center '>
                        <Link to="/dashboard/admin/categorycreate" className=' flex text-xl'>Create Category</Link>
                    </li>
                    <li className=' flex border w-[100%] h-[10%] justify-center items-center '>
                        <Link to="/dashboard/admin/create-product" className=' flex text-xl'>Create Product</Link>
                    </li>
                    <li className=' flex border w-[100%] h-[10%] justify-center items-center '>
                        <Link to="/dashboard/admin/products" className=' flex text-xl'>Products</Link>
                    </li>
                    <li className=' flex border w-[100%] h-[10%] justify-center items-center '>
                        <Link to="/dashboard/admin/users" className=' flex text-xl'>Users</Link>
                    </li>
                </ul>
            </main>
        </article>
    </section>
  )
}

export default AdminMenu
