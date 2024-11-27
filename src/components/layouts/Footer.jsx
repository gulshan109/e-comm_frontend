import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 

const Footer = () => {
  return (
    <footer className=" flex w-screen h-[15%] bg-orange-400 text-white shadow-2xl rounded-t-xl flex-col ">
      <main className=" flex w-[100%] items-center justify-center gap-4 h-[30%] ">
        <ul className=" flex justify-center items-center gap-5">
          <li><FaFacebook /></li>
          <li><FaInstagram /></li>
          <li><IoLogoWhatsapp /></li>
          <li><FaLinkedin /></li>
          <FaXTwitter />
        </ul>
      </main>
      <main className=" flex justify-center items-center w-[100%] h-[70%] flex-col">
        <ul className=" flex justify-center items-center gap-4">
          <li className=" hover:text-black -600 hover:underline">
            <Link to="/about">About |</Link>
          </li>
          <li className=" hover:text-black hover:underline">
            <Link to="/contact">Contact |</Link>
          </li>
          <li className=" hover:text-black hover:underline">
            <Link to="/policy">Policy |</Link>
          </li>
        </ul>
        <h2 className=" hover:text-gray-900">All right Reserved : @Gulshan kumia</h2>
      </main>
      
    </footer>
  );
};

export default Footer;
