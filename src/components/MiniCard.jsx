import React from 'react'
import MiniCardImage from "../images/current-02.jpg"

const MiniCard = () => {
  return (
    <div className='border border-gray-500 h-[15rem] w-[26rem] rounded-3xl flex ' dir='ltr'>
      <img src={MiniCardImage} alt="" className='rounded-s-3xl object-cover'/>
      <div className='flex flex-col gap-8 w-[50%] mr-5 ml-5 justify-center'>
        <div>
            <h1 className='text-xl font-bold'>David Walker</h1>
            <p className='text-blue-600 mt-2'>@davidwalker</p>
        </div>
        <hr />
        <div>
            <h1 className='text-lg'>Bid: <span className='text-blue-600 font-semibold text-xl'>0.06 ETH</span></h1>
            <p className='text-blue-600 font-semibold text-md mt-2'>08/07/2023, 22:00</p>
        </div>
      </div>
    </div>
  )
}

export default MiniCard
