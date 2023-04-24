import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
        <img src="/assets/logo.svg" alt="logo" />
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <p>Courses</p>
          <p>About Us</p>
          <p>Teachers</p>
          <p>Pricing</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
        <button class="btn bg-white text-indigo-600 border-none hover:bg-indigo-600 hover:text-white rounded-full">
          Get started
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;
