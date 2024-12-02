import React from 'react'
import AdminMenu from '../../layouts/AdminMenu'

const Users = () => {
  return (
    <section className=' flex w-[100%] h-[100%] bg-blue-400'>
        <article className=' flex w-[100%] h-[100%]  '>
        <main className=" flex w-[20%] h-[100%] ">
          <AdminMenu />
        </main>
            <main className=' flex w-[80%] h-[100%] '>
                <h1>All users </h1>
            </main>
        </article>
    </section>
  )
}

export default Users
