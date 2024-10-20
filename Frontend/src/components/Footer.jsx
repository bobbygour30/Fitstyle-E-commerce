import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="w-40 mb-5" alt="" />
          {/* <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            iste, harum qui magnam quae itaque voluptas reprehenderit rem? Nobis
            id iusto doloremque dolorum, eligendi nesciunt omnis deserunt
            inventore neque suscipit aliquid laborum quam natus.
          </p> */}
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to="/" className="cursor-pointer"><li>Home</li></Link>
            <Link to="/about" className="cursor-pointer"><li>About Us </li></Link>
            <Link to="/" className="cursor-pointer"><li>Delivery</li></Link>
            <Link to="/contact" className="cursor-pointer"><li>Contact</li></Link>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+123 456 7890</li>
            <li> contact@fitstyle.com </li>
          </ul>
        </div>
        
      </div>
      <div>
          <hr />
          <p className="text-center py-5 text-sm">Copyright 2024@ fitStyle.com - All Rights Reserved</p>
        </div>
    </div>
  );
};

export default Footer;
