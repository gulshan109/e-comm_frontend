import React from 'react'
import Aboutus from "../../assets/img/about.webp"

const About = () => {
  return (
    <section className=' flex justify-center items-center  w-screen h-screen flex-col gap-3'>
                <h1 className=' flex text-blue-800 text-3xl border py-2 px-4 rounded-xl bg-gray-300'>About us</h1>
        <article className=' flex w-[100%] h-[80%] justify-center items-center border'>
            <main className=' flex w-[50%] h-[100%]  justify-center items-center flex-row  '> 
                <img src={Aboutus} alt="" className=' flex w-[80%] h-[70%] ' />
            </main>
            <main className=' flex w-[50%] h-[100%] justify-center p-16 '>
              <p className=' flex w-[60%] h-[40%] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex porro, saepe sed iure hic harum maxime laboriosam suscipit quisquam, perspiciatis exercitationem quae sunt, nisi ipsum tempora facilis ducimus quis beatae velit! Hic quo nulla possimus eos rem est, ducimus suscipit dolorem vel accusantium aliquid aut cumque reprehenderit ad corporis commodi.</p>
            </main>
        </article>
    </section>
  )
}

export default About
