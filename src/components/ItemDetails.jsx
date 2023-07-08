import React from 'react'
import CreateNFT from "./CreateNFT"
import Footer from "./Footer"
import Navbar from "./Navbar"
import MiniCard from "./MiniCard"
import Banner from "../images/banner-01.png"
import CreateYoursImage from "../images/create-yours.jpg"
import { Link } from "react-router-dom"

const ItemDetails = () => {
  return (
    <div>
      <div className='bg-[url("https://img.freepik.com/free-vector/gradient-cyber-futuristic-background_23-2149117429.jpg?w=1060&t=st=1688544408~exp=1688545008~hmac=2d7523efd11e42964690c8f15b726c06e5f9706c09e7d16e3116d360ace276c1")] bg-cover h-[40rem] pt-10'>
        <Navbar />
        <h1 className="text-white text-2xl font-semibold text-center mt-32 mb-5">Liberty NFT Market</h1>
        <h1 className="text-white text-5xl font-bold text-center mb-5">VIEW ITEM DETAILS</h1>
        <h1 className="text-white text-lg font-medium text-center mb-10"><span className="text-blue-600">Home ></span>  Item Details</h1>
        <div className="text-white flex items-center justify-center space-x-5">
          <button className='w-52 border border-white rounded-full pt-3 pb-3 font-semibold text-lg hover:bg-blue-600 hover:border-blue-600'><Link to="/explore">Explore Items</Link></button>
          <button className='w-52 border border-white rounded-full pt-3 pb-3 font-semibold text-lg hover:bg-blue-600 hover:border-blue-600'><Link to="/">Back To Home Page</Link></button>
        </div>
      </div>
      <div className="bg-gray-800 h-[40rem] text-white flex flex-col pt-10 pb-10">
      <h1 className="text-3xl font-bold text-center pt-5">
      View Details <span className="text-blue-600">For Item </span>Here
      </h1>
      <div className="flex justify-center items-center w-[90%] m-auto">
        <div className="mr-10">
          <img src={CreateYoursImage} alt="" className="h-[30rem] w-[100rem] rounded-2xl object-cover" />
        </div>
        <div className="flex flex-col gap-7">
          <h1 className="font-semibold text-2xl">Dolores Haze Westworld Eye</h1>
          <div className="flex">
            <img src={Banner} alt="" className="rounded-full h-16 w-16"/>
            <div className="flex flex-col justify-center items-left ml-4 gap-1">
              <p className="text-md font-semibold">Pragyan Das</p>
              <p className="text-blue-600 font-semibold">@pragyan</p>
            </div>
          </div>
          <p className="leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque dolores qui, earum exercitationem fuga dolorum iure aliquam asperiores temporibus, alias aliquid ad. Neque voluptatum libero magni minus officiis nobis!</p>
          <div className="flex gap-20">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Current Bid</p>
              <h1 className="text-blue-600 font-bold text-xl">0.06 ETH</h1>
              <p>($8097,45)</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Owner</p>
              <h1 className="text-blue-600 font-bold text-xl">Pragyan Das</h1>
              <p>(@pragyan4261)</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Ends In</p>
              <h1 className="text-blue-600 font-bold text-xl">3D 05H 20M 58S</h1>
              <p>(January 22nd, 2023)</p>
            </div>
            
          </div>
          <div className='flex space-x-7 items-center'>
            <h1>Place Bid:</h1>
            <input type="text" placeholder='1 ETH' className='rounded-full w-24 border-2 border-blue-600 bg-transparent p-2 h-12 text-center font-bold'/>
            <button className='rounded-full font-semibold bg-blue-600 text-lg hover:bg-white hover:text-blue-600  h-12 w-36'>Submit Now</button>
          </div>
        </div>
      </div>
      </div>
      <section className='bg-gray-800 h-[43rem] text-white'>
        <div className='flex justify-between mr-28 ml-28'>
          <h1 className='bg-blue-600 h-14 w-80 rounded-full text-xl font-semibold flex justify-center items-center '>Current Biddings Prices ( ETH )</h1>
          <select name="" id="" className='bg-transparent w-32'>
            <option value="" className=' bg-gray-800'>Sort By: Latest</option>
            <option value="" className=' bg-gray-800'>Sort By: Lowest</option>
            <option value="" className=' bg-gray-800'>Sort By: Highest</option>
            <option value="" className=' bg-gray-800'>Sort By: Oldest</option>
          </select>
        </div>   
        <div className='grid grid-cols-3 grid-rows-2 mr-28 ml-28 gap-5 mt-10'>
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </div>
      </section>
      <CreateNFT />
      <Footer />
    </div>
  )
}

export default ItemDetails
