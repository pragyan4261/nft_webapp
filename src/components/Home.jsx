import React from 'react'
import { Link } from "react-router-dom"

import Banner from "../images/banner-01.png"

// import Background from "../images/bg.jpg"
import SmallCard from "./SmallCard"
import MediumCard from "./MediumCard"
import CreateNFT from './CreateNFT'
import Navbar from "./Navbar"
import Footer from "./Footer"

const Home = () => {
  return(
    <div>
        
        <section className="bg-[url('https://img.freepik.com/free-vector/gradient-cyber-futuristic-background_23-2149117429.jpg?w=1060&t=st=1688544408~exp=1688545008~hmac=2d7523efd11e42964690c8f15b726c06e5f9706c09e7d16e3116d360ace276c1')] bg-cover h-[50rem] pt-10 ">
        <Navbar />
        <div className='flex space-x-12'>

          <div className='text-white w-[50%] flex  flex-col justify-center items-left ml-28 mt-32'>
            <p className='text-xl font-semibold'>Liberty NFT Market</p>
            <h1 className='text-6xl font-semibold mt-7 mb-10'>CREATE, SELL & COLLECT TOP NFT'S.</h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempore accusamus nesciunt blanditiis nulla ut commodi odio quasi voluptas inventore numquam sit, debitis vero adipisci doloribus quo. Ad delectus inventore ducimus quae perferendis veritatis tenetur architect.</p>
            <div className='mt-7 space-x-10'>
              <button className='w-52 border border-white rounded-full pt-3 pb-3 font-semibold text-lg hover:bg-blue-600 hover:border-blue-600'><Link to="/explore">Explore Top NFTs</Link></button>
              <button className='w-52 border border-white rounded-full pt-3 pb-3 font-semibold text-lg hover:bg-blue-600 hover:border-blue-600'>Watch Our Videos</button>
            </div>
          </div>
          <img src={Banner} alt="img" className='h-[25rem] mt-32 mr-28'/>
        </div>
        </section>
        <section className='bg-gray-900 text-white text-4xl font-semibold text-center h-[30rem] space-y-20'>
          <h1 className='pt-20'>Browse Through Our <span className='text-blue-600'>Categories</span> Here.</h1>
          <div className='flex space-x-5 ml-8'>
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            
          </div>
        </section>
        <section className='bg-gray-900 text-white text-4xl font-semibold text-center h-[56rem] space-y-20'>
          <h1 className='pt-20'>Explore Some Hot <span className='text-blue-600'>Collections </span>In Market</h1>
          <div className='flex space-x-7 justify-center'>
            <MediumCard />
            <MediumCard />
            <MediumCard />
            
          </div>
        </section>
        <section className='bg-blue-600 h-[40rem] mb-[1px] text-white'>
          <CreateNFT />
        </section>
        <Footer />
    </div>
    )
  
}

export default Home;
