import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container mx-auto my-10">
        <div className="bg-[#f8fafe] grid grid-cols-5 px-10 py-10 gap-10 items-start">
            <div className="space-y-5">
                <img src="/assets/footerlogo.svg" alt="footer logo" />
                <p className="text-center lg:text-start">20 Osgood Rd, Milford, NH 03055, USA +1283871239190213021</p>
            </div>

            <div className="space-y-5">
                <p className="text-xl font-medium">Company</p>
                <p className="text-base">Careers</p>
                <p className="text-base">Teachers</p>
                <p className="text-base">Support</p>
                <p className="text-base">Contact</p>    
            </div>

            <div className="space-y-5">
                <p className="text-xl font-medium">Product</p>
                <p className="text-base">Cources</p>
                <p className="text-base">Pricing</p>
                <p className="text-base">Blog</p>    
            </div>

            <div className="space-y-5">
                <p className="text-xl font-medium">Legal</p>
                <p className="text-base">Term & Conditions</p>
                <p className="text-base">Privacy policy</p> 
            </div>

            <div className="flex items-center gap-5">
                <BsFacebook className="text-3xl text-gray-500" />
                <BsTwitter className="text-3xl text-gray-500" />
                <BsInstagram className="text-3xl text-gray-500" />
            </div>
        </div>
    </div>
  );
};

export default Footer;
