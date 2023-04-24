import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <img src="/assets/logo.svg" alt="logo" />
        <div className="flex items-center gap-10">
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
