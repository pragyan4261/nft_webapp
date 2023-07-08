import React from 'react'
import CardImage from "../images/collection-01.jpg"

const MediumCard = () => {
  return (
    <div className='border border-gray-600 w-[28rem] h-[35rem] flex flex-col rounded-3xl'>
      <img src={CardImage} alt=""  className='rounded-t-3xl'/>
      <div className='w-[90%] m-auto'>

      <h1 className='text-2xl -mt-3 mb-5 text-left'>Bored Ape Kennel Club</h1>
      <div className='border border-white mb-5'></div>
      <div className='flex justify-between mb-7'>
        <div className='text-left'>
          <p className='text-lg '>Items in Collection:</p>
          <h1 className='text-2xl'>360/380</h1>
        </div>
        <div className='text-right'>
          <p className='text-lg'>Category:</p>
          <h1  className='text-2xl'>Visual Art</h1>
        </div>
      </div>
      <div className='-mb-20'>
        <button className=' rounded-full bg-blue-600 p-2 text-xl w-96 hover:bg-white hover:text-blue-600'>Explore Bored Ape</button>
      </div>
      </div>

    </div>
  )
}

export default MediumCard
