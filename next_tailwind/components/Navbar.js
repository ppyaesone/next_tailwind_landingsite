import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
        <img src="/assets/logo.svg" alt="logo" />
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
        <a href="#">Courses</a>
          <a href="#">About Us</a>
          <a href="#">Teachers</a>
          <a href="#">Pricing</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
        </div>
        
        <button className="btn bg-white text-indigo-600 rounded-full border-none w-36 h-10 hover:text-white hover:bg-indigo-600">Get Started</button>
        
      </div>
    </div>
  );
};

export default Navbar;
