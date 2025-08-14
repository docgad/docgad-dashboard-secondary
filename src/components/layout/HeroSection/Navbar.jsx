import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from "react-icons/hi";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex justify-between items-center px-6 py-4 md:px-[60px] md:py-[40px]'>
      <div className=''>
        <h1 className='text-3xl text-[#214DD0]'>Docgad</h1>
      </div>

      <div className='hidden md:flex text-[#111111] gap-20'>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div>
        <Link to='/get-demo'
          className='hidden text-[#FFFFFF] bg-[#214DD0] rounded-3xl p-3 px-6 cursor-pointer md:flex items-center gap-2'>
          Get Demo
          <HiArrowRight className="text-md" />
        </Link>
      </div>

      <button
        className="sm:hidden text-3xl z-50 relative"
        onClick={() => setIsOpen(true)}
      >
        <HiMenu className="text-3xl cursor-pointer" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div
            id="mobile-menu"
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end p-4">
              <HiX
                className="text-3xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>

            <div className="flex flex-col gap-6 p-6">
              <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-full">
                Get Demo
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
