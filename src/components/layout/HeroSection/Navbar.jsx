import React from 'react'
import Docgad_logo from '../../../assets/Docgad_logo.png'
import { Link } from 'react-router-dom'
import { HiArrowRight } from "react-icons/hi";


const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between items-center px-[60px] py-[40px]'>
        <div>
          <h1 className='text-3xl text-[#214DD0]'>Docgad</h1>
        </div>
          <div className='text-[#111111] flex gap-20'>
            <Link to="/About">About</Link>
            <Link to="/Services">Services</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/contact">Contact</Link>
          </div>
        <div>
          <Link to='/get-demo'>
            <button className='text-[#FFFFFF] bg-[#214DD0] rounded-4xl p-3 px-6 cursor-pointer flex items-center gap-2'>
              Get Demo  
              <HiArrowRight className="text-md" />
            </button>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar