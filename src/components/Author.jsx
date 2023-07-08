import React from 'react'
import Footer from "./Footer"
import CreateNFT from "./CreateNFT"
import Navbar from "./Navbar"
import AuthorItemCard from "./AuthorItemCard"
import { Link } from 'react-router-dom'
import Banner from "../images/banner-01.png"

const Author = () => {
  return (
    <div>
      <div className='bg-[url("https://img.freepik.com/free-vector/gradient-cyber-futuristic-background_23-2149117429.jpg?w=1060&t=st=1688544408~exp=1688545008~hmac=2d7523efd11e42964690c8f15b726c06e5f9706c09e7d16e3116d360ace276c1")] bg-cover h-[40rem] pt-10'>
        <Navbar />
        <h1 className="text-white text-2xl font-semibold text-center mt-32 mb-5">Author Details</h1>
        <h1 className="text-white text-5xl font-bold text-center mb-5">VIEW DETAILS FOR AUTHOR</h1>
        <h1 className="text-white text-lg font-medium text-center mb-10"><span className="text-blue-600">Home ></span> Author</h1>
        <div className="text-white flex items-center justify-center space-x-5">
          <button className='w-52 border border-white rounded-full pt-3 pb-3 font-semibold text-lg hover:bg-blue-600 hover:border-blue-600'><Link to="/create">Create Your NFT</Link></button>
          <button className='w-52 border border-white rounded-full pt-3 pb-3 font-semibold text-lg hover:bg-blue-600 hover:border-blue-600'><Link to="/">Back To Home Page</Link></button>
        </div>
      </div>
      <section className='bg-gray-800 h-[70rem] text-white pt-32'> 
      <div className='flex justify-between items-center w-[85%] m-auto'>
        <div>
        <div className="flex">
            <img src={Banner} alt="" className="rounded-full h-44 w-44"/>
            <div className="flex flex-col justify-center items-left ml-4 gap-1">
              <p className="text-2xl font-semibold">Pragyan Das</p>
              <p className="text-blue-600 font-semibold text-lg">@pragyan4261</p>
            </div>
        </div>
        </div>
        <div className='flex flex-col border border-gray-500 rounded-3xl h-[12rem] w-[35rem] justify-center gap-5'>
            <div className='flex gap-28 ml-5'>
                <div>
                    <img src={Banner} alt="" className='h-10 w-10 rounded-full'/>
                    <p><span className='text-blue-600 text-xl font-semibold'>1287</span> Likes</p>
                </div>
                <div>
                    <img src={Banner} alt="" className='h-10 w-10 rounded-full'/>
                    <p><span className='text-blue-600 text-xl font-semibold'>1287</span> Likes</p>
                </div>
                <div>
                    <img src={Banner} alt="" className='h-10 w-10 rounded-full'/>
                    <p><span className='text-blue-600 text-xl font-semibold'>1287</span> Likes</p>
                </div>
                
            </div>
            <div className="flex items-center ml-5 gap-28">
                <p className='text-lg font-semibold'>564 Followers</p>
                <button className=' rounded-full bg-blue-600 p-2 text-lg hover:bg-white hover:text-blue-600 w-72'><Link to="https://www.instagram.com/pragyan4261/">Follow @pragyan4261</Link></button>
            </div>
        </div>
      </div>
      <div className='flex flex-col w-[85%] m-auto mt-20 gap-10'>
        <h1 className='text-3xl font-semibold'>Pragyan Das's <span className='text-blue-600'>Items</span>.</h1>
        <div className='flex gap-5'>
            <AuthorItemCard />
            <AuthorItemCard />
            <AuthorItemCard />
            <AuthorItemCard />
        </div>
      </div>

      </section>
      <CreateNFT />
      <Footer />
      
    </div>
  )
}

export default Author
