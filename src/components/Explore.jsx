import React from 'react'
// import { Link } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"
import AuthorItemCard from "./AuthorItemCard"

const Explore = () => {
  return (
    <div>
      <div className='bg-[url("https://img.freepik.com/free-vector/gradient-cyber-futuristic-background_23-2149117429.jpg?w=1060&t=st=1688544408~exp=1688545008~hmac=2d7523efd11e42964690c8f15b726c06e5f9706c09e7d16e3116d360ace276c1")] bg-cover h-[40rem] pt-10'>
        <Navbar />
        <h1 className="text-white text-2xl font-semibold text-center mt-32 mb-5">Liberty NFT Market</h1>
        <h1 className="text-white text-5xl font-bold text-center mb-5">DISCOVER SOME TOP ITEMS</h1>
        <h1 className="text-white text-lg font-medium text-center mb-10"><span className="text-blue-600">Home ></span>  Explore</h1>
      </div>
      <section className='bg-gray-800 h-[90rem] text-white'>
        <div className='pt-10 mr-20 ml-20 mb-10 flex justify-between'>
          <h1 className='text-3xl font-semibold'>Discover Some Of Our <span className='text-blue-600'>Top Items</span></h1>
          <div className='text-white flex justify-center items-center space-x-5'>
            <input type="text" placeholder='Type Something' className='text-white border border-gray-500 h-12 p-3 w-64 rounded-full bg-transparent'/>
            <select name="" id="" className='bg-transparent w-44 rounded-full p-3 border border-gray-500 h-12'>
              <option value="" className='text-black'>All categories</option>
              <option value="" className='text-black'>Music</option>
              <option value="" className='text-black'>Digital</option>
              <option value="" className='text-black'>Virtual</option>
              <option value="" className='text-black'>Blockchain</option>
            </select>
            <select name="" id="" className='bg-transparent w-44 rounded-full p-3 border border-gray-500 h-12'>>
              <option value="" className='text-black'>Available</option>
              <option value="" className='text-black'>Ending Soon</option>
              <option value="" className='text-black'>Coming Soon</option>
              <option value="" className='text-black'>Closed</option>
              
            </select>
            <button className='flex m-auto rounded-full bg-blue-600 p-2 text-lg hover:bg-white hover:text-blue-600 w-40 justify-center items-center'>Search</button>
          </div>
        </div>
        <div className='grid grid-cols-3 grid-rows-2 place-items-center ml-24 mr-24 gap-16'>
          <AuthorItemCard />
          <AuthorItemCard />
          <AuthorItemCard />
          <AuthorItemCard />
          <AuthorItemCard />
          <AuthorItemCard />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Explore
