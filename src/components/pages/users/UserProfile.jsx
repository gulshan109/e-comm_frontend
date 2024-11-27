import React from 'react'
import { useAuth } from '../../context/Auth'

const UserProfile = () => {
  const [auth] = useAuth();
  return (
    <section className=' flex w-[100%] h-[100%] '>
      <article className=' flex w-[100%] h-[100%] ' >
        <h1>User Profile</h1>
        <main className=' flex w-[80%] h-[100%] '>
        <ul className=' flex flex-col w-[40%] h-[40%] bg-blue-500 my-8 mx-8 justify-center px-6 rounded-xl gap-4 '>
                <li className=' flex '>Name : {auth?.user?.name}</li>
                <li className=' flex'>Email : {auth?.user?.email}</li>
                <li className=' flex '>Phone no. : {auth?.user?.phone}</li>
                <li className=' flex'>Address : {auth?.user?.address}</li>
                </ul>
        </main>
      </article>
    </section>
  )
}

export default UserProfile
