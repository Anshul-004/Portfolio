import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-6 md:px-12 lg:px-20 py-4 md:py-6 fixed top-0 left-0 w-full z-10 bg-white shadow-md">
      <div className="flex justify-between items-center">
        <div className="icon text-3xl">
          <a href="/">
            <span className="">a</span>
            <span className="text-purple-500">.</span>
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            {isOpen ? (
              <span>&#10005;</span> // Cross icon
            ) : (
              <span>&#9776;</span> // Hamburger icon
            )}
          </button>
        </div>
        <ul className={`flex-col md:flex-row md:flex text-lg space-y-4 md:space-y-0 md:space-x-6 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <li className="hover:text-purple-600">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-purple-600">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-purple-600">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-purple-600">
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;