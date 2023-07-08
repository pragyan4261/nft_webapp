import React from 'react'
import CardImage from "../images/create-yours.jpg"
import SmallImage from "../images/banner-01.png"
import { Link } from "react-router-dom"

const AuthorItemCard = () => {
  return (
    <div className='border border-gray-500 h-[36rem] w-[25rem] pl-5 pr-5 rounded-2xl bg-gray-700'>
      <div>
        <img src={SmallImage} alt="" className='rounded-full w-12 h-12 m-auto relative top-6'/>
        <img src={CardImage} alt="" className='h-72 w-full object-cover rounded-2xl'/>
      </div>
      <div className='mt-5 space-y-8'>
        <h1 className='text-xl font-bold'>Mutant Ape Bored</h1>
        <hr />
        <div className='flex justify-between mr-5'>
            <div>
                <p className='font-semibold text-md'>Current Bid:</p>
                <p className='text-2xl font-bold'>2.03 ETH</p>
            </div>
            <div>
                <p className='font-semibold text-md'>Ends In:</p>
                <p className='text-2xl font-bold'>25th Nov</p>
            </div>
        </div>
      </div>
      <button className='flex m-auto rounded-full bg-blue-600 p-2 text-lg hover:bg-white hover:text-blue-600 mt-11 w-40 justify-center items-center'><Link to="/items">View Details</Link></button>
    </div>
  )
}

export default AuthorItemCard
