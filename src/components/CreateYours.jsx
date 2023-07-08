import React from "react";
import { Link } from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer"
import CreateYoursImage from "../images/create-yours.jpg"
import Banner from "../images/banner-01.png"

const CreateYours = () => {
  return (
    <div>
      <div className='bg-[url("https://img.freepik.com/free-vector/gradient-cyber-futuristic-background_23-2149117429.jpg?w=1060&t=st=1688544408~exp=1688545008~hmac=2d7523efd11e42964690c8f15b726c06e5f9706c09e7d16e3116d360ace276c1")] bg-cover h-[40rem] pt-10'>
        <Navbar />
        <h1 className="text-white text-2xl font-semibold text-center mt-32 mb-5">Liberty NFT Market</h1>
        <h1 className="text-white text-5xl font-bold text-center mb-5">Create Your NFT Now</h1>
        <h1 className="text-white text-lg font-medium text-center mb-10"><span className="text-blue-600">Home ></span> Create Yours</h1>
        <div className="text-white flex items-center justify-center space-x-5">
          <button className='w-52 border border-white rounded-full pt-3 pb-3 font-semibold text-lg hover:bg-blue-600 hover:border-blue-600'><Link to="/explore">Explore Items</Link></button>
          <button className='w-52 border border-white rounded-full pt-3 pb-3 font-semibold text-lg hover:bg-blue-600 hover:border-blue-600'><Link to="/">Back To Home Page</Link></button>
        </div>
      </div>
      <div className="bg-gray-800 h-[45rem] text-white flex flex-col justify-center items-center gap-32">
        <h1 className="text-3xl font-bold ">
          Apply For <span className="text-blue-600">Your Item </span>Here
        </h1>
        <form action="" className="w-[90%] h-[28rem] bg-gray-700 rounded-2xl flex flex-col gap-16 justify-center pl-10">
          <div  className="flex gap-10" >
            <div>
              <h1 className="font-semibold text-lg mb-2">Item Title</h1>
              <input type="text" placeholder="Ex. Lion King" className="w-[25rem] p-3 rounded-full bg-gray-800" />
            </div>
            <div>
              <h1 className="font-semibold text-lg mb-2">Description For Item</h1>
              <input type="text" placeholder="Give us your idea" className="w-[25rem] p-3 rounded-full bg-gray-800"/>
            </div>
            <div>
              <h1 className="font-semibold text-lg mb-2">Your Username</h1>
              <input type="text" placeholder="Ex. @pragyandas" className="w-[25rem] p-3 rounded-full bg-gray-800"/>
            </div>
          </div>
          <div className="flex gap-10">
            <div>
              <h1 className="font-semibold text-lg mb-2">Price Of Item</h1>
              <input type="text" placeholder="Price depends on quality. Ex. 0.06 ETH" className="w-[39rem] p-3 rounded-full bg-gray-800"/>
            </div>
            <div>
              <h1 className="font-semibold text-lg mb-2">Royalties</h1>
              <input type="text" placeholder="Common royalties 1-25%" className="w-[38.5rem] p-3 rounded-full bg-gray-800"/>
            </div>
          </div>
          <div className="flex gap-36">
            <div>
              <h1 className="font-semibold text-lg mb-2">Your File</h1>
              <input type="file" name="" id="" />
            </div>
            <button className=' rounded-full font-semibold bg-blue-600 text-xl h-12 w-[52.5rem] hover:bg-white hover:text-blue-600  '>Submit Your Applying</button>
          </div>
        </form>
      </div>
      <div className="bg-gray-800 h-[40rem] text-white flex flex-col">
      <h1 className="text-3xl font-bold text-center pt-5">
          This is <span className="text-blue-600">Your Item </span>Preview
      </h1>
      <div className="flex justify-center items-center w-[90%] m-auto">
        <div className="mr-10">
          <img src={CreateYoursImage} alt="" className="h-[30rem] w-[120rem] rounded-2xl object-cover" />
        </div>
        <div className="flex flex-col gap-10">
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

        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateYours;
