import React from 'react'
import Categoryslider from './Categoryslider'

const Category = () => {
  return (
    <div className='pt-16 pb-12'>
        <h1 className=' text-center font-bold text-3xl p-2 md:text-4xl text-blue-950'> Tranding Categories</h1>
        <div className='w-[80%]  mx-auto mt-8 md:mt-12' > 
            <Categoryslider/>
        </div>
    </div>


  )
}

export default Category
