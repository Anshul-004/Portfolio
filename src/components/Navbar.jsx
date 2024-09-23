import React from "react";

const Navbar = () => {
  return (
    <nav className=" px-20 py-8">
      <div className="flex justify-between align-middle">
        <div className="icon text-3xl">
        <a href="/">
          <span className="">a</span>
          <span className=" text-purple-500">.</span>
          </a>
        </div>
        <ul className="flex text-lg space-x-6">
          <li className=" hover:text-purple-600"><a href="#home">Home</a></li>
          <li className=" hover:text-purple-600"><a href="#about">About</a></li>
          <li className=" hover:text-purple-600"><a href="#skills">Skills</a></li>
          <li className=" hover:text-purple-600"><a href="#projects">Projects</a></li>
          {/* <li><a href="#contact">Contact</a></li> */}
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
