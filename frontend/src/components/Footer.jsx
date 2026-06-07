import React from "react";
import { assets } from "../assets/assets";

export const Footer = () => {
  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-30 text-sm">

        {/* LEFT SECTION */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="logo" />

          <p className="text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* MIDDLE SECTION */}
        <div className="md:mx-auto">
          <h2 className="font-semibold mb-5 uppercase text-gray-800">
            Company
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="md:text-right">
          <h2 className="font-semibold mb-5 uppercase text-gray-800">
            Get in touch
          </h2>

          <div className="space-y-3 text-gray-600">
            <p>+1-212-456-7890</p>
            <p>contact@foreveryou.com</p>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <p className="text-center text-xs md:text-sm text-gray-500 mt-10 pb-5">
        Copyright {new Date().getFullYear()} © All Rights Reserved.
      </p>

    </div>
  );
};