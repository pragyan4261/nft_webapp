import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../images/logo.png"

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between items-center w-[85%] bg-white m-auto  pl-8 pr-8 pt-4 pb-4 rounded-full sticky top-0 left-0'>
          <div><img src={Logo} alt="" /></div>
          <div >
            <ul className='flex font-semibold text-md space-x-7 '>
              <li className='hover:bg-blue-600  hover:text-white pt-2 pb-2 rounded-full w-20 text-center flex items-center justify-center'><Link to="/">Home</Link></li>
              <li className='hover:bg-blue-600  hover:text-white rounded-full w-24 text-center flex items-center justify-center'><Link to="/explore">Explore</Link></li>
              <li className='hover:bg-blue-600  hover:text-white rounded-full w-28 text-center flex items-center justify-center'><Link to="/items">Item Details</Link></li>
              <li className='hover:bg-blue-600  hover:text-white rounded-full w-24 text-center flex items-center justify-center'><Link to="/author">Author</Link></li>
              <li className='hover:bg-blue-600  hover:text-white rounded-full w-28 text-center flex items-center justify-center'><Link to="/create">Create Yours</Link></li>
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
