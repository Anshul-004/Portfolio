import React from "react";

const Navbar = () => {
  return (
    <nav className=" px-24 py-8 sticky top-0">
      <div className="flex justify-between align-middle">
        <div className="icon text-2xl">
        <a href="/">
          <span className="">anshul</span>
          <span className=" text-purple-500">.</span>
          </a>
        </div>
        <ul className="flex text-lg space-x-6">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          {/* <li><a href="#contact">Contact</a></li> */}
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
