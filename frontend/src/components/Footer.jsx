import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <Link to="/">Logo</Link>
          <p className="w-full md:w-2/3 text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            sapiente similique, expedita voluptatum nostrum sit ut a eum amet
            excepturi?
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-white">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-white">
            <li>+1 456-852-159</li>
            <li>contact@hibikasan.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ hibakisan.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
