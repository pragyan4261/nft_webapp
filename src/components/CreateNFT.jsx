import React from 'react'
import { Link } from "react-router-dom"
import Image from "../images/banner-01.png"

const CreateNFT = () => {
  return (
    <div className='bg-blue-600 h-[40rem] mb-[1px] text-white'>
        <div className='flex justify-between'>
            
            <h1 className='text-4xl font-semibold mt-32 ml-20'>Create Your NFT & Put It On The Market</h1>
            
            <button className=' rounded-full bg-blue-800 p-3 text-xl w-64 hover:bg-white hover:text-blue-600 mt-32 mr-20'><Link to="/create">Create Your NFT Now</Link></button>
        </div>
        <div className='flex mr-20 ml-20 m-auto'>
            <div className='w-[80%]'>
                <img src={Image} alt="" className='rounded-full h-20 w-20 mt-20'/>
                <h1 className='text-xl font-semibold mt-5 mb-4'>Set Up Your Wallet</h1>
                <p className='w-[90%]  border-r-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, praesentium. Vitae beatae, laborum, praesentium possimus odio eius illum temporibus optio quidem expedita saepe quasi quis, excepturi aspernatur hic maxime. Quod!</p>
            </div>
            <div className='w-[80%]'>
                <img src={Image} alt="" className='rounded-full h-20 w-20 mt-20'/>
                <h1 className='text-xl font-semibold mt-5 mb-4'>Add Your Digital NFT</h1>
                <p className='w-[90%] border-r-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, praesentium. Vitae beatae, laborum, praesentium possimus odio eius illum temporibus optio quidem expedita saepe quasi quis, excepturi aspernatur hic maxime. Quod!</p>
            </div>
            <div className='w-[80%]'>
                <img src={Image} alt="" className='rounded-full h-20 w-20 mt-20'/>
                <h1 className='text-xl font-semibold mt-5 mb-4'>Sell Your NFT & Make Profit</h1>
                <p className='w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, praesentium. Vitae beatae, laborum, praesentium possimus odio eius illum temporibus optio quidem expedita saepe quasi quis, excepturi aspernatur hic maxime. Quod!</p>
            </div>
            
        </div>
      
    </div>
  )
}

export default CreateNFT
