import React from 'react'
import Banner from "../images/banner-01.png"

const SmallCard = () => {
  return (
    <div className='w-[14rem] h-[11rem] border border-gray-600 flex flex-col justify-center items-center space-y-3 rounded-3xl bg-gray-800'>
      <img src={Banner} alt="" className='rounded-full h-20 w-20'/>
      <h1 className='text-2xl font-semibold'>Blockchain</h1>
    </div>
  )
}

export default SmallCard
