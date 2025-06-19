import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">Temidire Care Venture</h3>
          <p className="text-gray-400">Your trused partner in finding the right property.</p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="flex flex-col space-y-2 text-gray-400">
            <li><a href="#home">Home</a></li>
            <li><a href="#properties">Properties</a></li>
            <a href="#contact">Contact</a>
            <a href=""></a>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Contact Info</h4>
          <ul className="space-y-2 text-gray-400">
            <li>26<sup>th</sup> First Ave. Berger, Lagos State</li>
            
            <li>dorcas@oviesluxuryhomes.com.ng</li>
            <li>+234 814 175 8380</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Follow Us</h4>
          <div className="flex gap-3">
          <a href=""
              target="_blank"
              rel="noreferrer noopener">
            <FaInstagram className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl cursor-pointer"/>
          </a>
          <a href="https://wa.me/+2348141758380"
              target="_blank"
              rel="noreferrer noopener">
            <FaWhatsapp className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl cursor-pointer"/>
          </a>
          </div>
            
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 text-gray-400 ">
        <p className="text-center text-[14px] transition-colors duration-300"> &copy; {currentYear} Ovies Luxury Homes. All rights reserved | <span className="text-gray-500 hover:text-white"> Powered by <a href="https://www.clinicraftstudios.xyz">CST</a></span>.</p>
      </div>
    </footer>
  );
};

export default Footer;
