import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-12 pb-12">
      <div className="w-4/5 mx-auto grid grid-cols-1 border-b-[1.5px] border-b-slate-300 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start">
        <div>
          <div className="text-2xl text-red-700 font-semibold mb-4">
            STICKER SHOP
          </div>
          <p className="text-gray-700  text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            incidunt consectetur adipisicing elit. Ab incidunt
          </p>
          <div className="mt-4 flex items-center space-x-4">
            <FaFacebook className="w-6 h-6 text-blue-700" />
            <FaTwitter className="w-6 h-6 text-sky-500" />
            <FaYoutube className="w-6 h-6 text-rose-700" />
            <FaInstagram className="w-6 h-6 text-pink-600" />
          </div>
        </div>
      <div className="md:mx-auto mx-0">
        <h1 className="footer_title">MarketPalce</h1>
        <p className="footer_link">All Stickers</p>
        <p className="footer_link">Art</p>
        <p className="footer_link">Music</p>
        <p className="footer_link">Collection</p>
        <p className="footer_link">Wallets</p>
      </div>

      <div className="lg:mx-auto mx-0">
        <h1 className="footer_title">Company</h1>
        <p className="footer_link">Explore</p>
        <p className="footer_link">About</p>
        <p className="footer_link">Contect Us</p>
        <p className="footer_link">Our Blog</p>
        <p className="footer_link">FAQ</p>
      </div>

      <div className="xl:mx-auto md:mx-auto lg:mx-0 mx-0">
        <h1 className="footer_title">My Account</h1>
        <p className="footer_link">Author</p>
        <p className="footer_link"> Collect</p>
        <p className="footer_link"> Author Profile</p>
        <p className="footer_link">  Create Item</p>
        <p className="footer_link"> Sticker Profile</p>
      </div>
      </div>
      <div className="text-center mt-3 opacity-70 text-sm">
        Copyright © 2024 Webdev Warriros
      </div>
    </div>
  );
};

export default Footer;
