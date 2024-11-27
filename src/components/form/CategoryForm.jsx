import React from 'react'

const CategoryForm = ({handleSubmit , value , setValue}) => {
  return (
    <section className=' flex  items-center w-[100%] h-[100%] justify-center '>
    <article className=' flex w-[100%] h-[100%]  '>
        <form className=' flex w-[100%] h-[100%] gap-6 justify-center ' onSubmit={handleSubmit}>
            <input type="text" placeholder=' Enter your category' value={value} onChange={(e)=> setValue(e.target.value)} className=' flex border rounded-xl justify-center items-center shadow-xl' />
            <button type='submit' className=' flex border w-[20%] justify-center items-center rounded-xl font-semibold hover:bg-orange-400 shadow-xl'>Submit</button>
        </form>
    </article>
    </section>
  )
}

export default CategoryForm
