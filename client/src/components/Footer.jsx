import React from "react";

import { FiArrowRight } from "react-icons/fi";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaFacebookMessenger,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container flex flex-wrap-reverse border border-slate-200 mt-28">
      <div className="grid grid-cols-4 gap-6 w-2/3 py-12 px-14 border-r border-slate-200">
        <ul className="container flex flex-col items-start">
          <h3 className="text-headingColor text-base">Our Company</h3>
          <li className="w-full">
            <a
              className="text-textColor text-sm py-2 flex-1 block hover:font-bold hover:text-primary transition-all duration-300 ease-out"
              href="#"
            >
              About AnBedding
            </a>
          </li>
          <li className="">
            <a className="text-textColor text-sm py-2 flex-1 block" href="#">
              About AnBedding
            </a>
          </li>
          <li className="">
            <a className="text-textColor text-sm py-2 flex-1 block" href="#">
              About AnBedding
            </a>
          </li>
          <li className="">
            <a className="text-textColor text-sm py-2 flex-1 block" href="#">
              About AnBedding
            </a>
          </li>
        </ul>
        <ul className="container flex flex-col items-start">
          <h3 className="text-headingColor text-base gap-1 mb-2">
            Our Company
          </h3>
          <li className="">
            <a className="text-textColor text-sm py-2 flex-1 block" href="#">
              About AnBedding
            </a>
          </li>
          <li className="">
            <a className="text-textColor text-sm py-2 flex-1 block" href="#">
              About AnBedding
            </a>
          </li>
          <li className="">
            <a className="text-textColor text-sm py-2 flex-1 block" href="#">
              About AnBedding
            </a>
          </li>
          <li className="">
            <a className="text-textColor text-sm py-2 flex-1 block" href="#">
              About AnBedding
            </a>
          </li>
        </ul>
        <ul className="container flex flex-col items-start">
          <h3 className="text-headingColor text-base gap-1 mb-2">
            Our Company
          </h3>
          <li className="">
            <a className="text-textColor text-sm py-2 flex-1 block" href="#">
              About AnBedding
            </a>
          </li>
          <li className="">
            <a className="text-textColor text-sm py-2 flex-1 block" href="#">
              About AnBedding
            </a>
          </li>
          <li className="">
            <a className="text-textColor text-sm py-2 flex-1 block" href="#">
              About AnBedding
            </a>
          </li>
          <li className="">
            <a className="text-textColor text-sm py-2 flex-1 block" href="#">
              About AnBedding
            </a>
          </li>
        </ul>
        <ul className="container flex flex-col items-start">
          <h3 className="text-headingColor text-base gap-1 mb-2">
            Our Company
          </h3>
          <li className="">
            <a className="text-textColor text-sm py-2 flex-1 block" href="#">
              About AnBedding
            </a>
          </li>
          <li className="">
            <a className="text-textColor text-sm py-2 flex-1 block" href="#">
              About AnBedding
            </a>
          </li>
          <li className="">
            <a className="text-textColor text-sm py-2 flex-1 block" href="#">
              About AnBedding
            </a>
          </li>
          <li className="">
            <a className="text-textColor text-sm py-2 flex-1 block" href="#">
              About AnBedding
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-1 flex-col py-12 px-10">
        <h3 className="text-base text-headingColor">NEWSLETTER</h3>
        <p className="text-sm text-textColor my-2">
          Sign up for promotions, decorating tips and more from our team.
        </p>
        <div className="flex border border-slate-500 rounded-sm items-center">
          <input
            className="flex-1 px-2 py-3 outline-none text-sm text-textColor font-light"
            type="text"
            name=""
            id=""
            placeholder="Email Letter"
          />
          <button className="text-lg p-4 hover:bg-slate-700 hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
            <FiArrowRight />
          </button>
        </div>
        <div className="mt-6 flex flex-row gap-4 items-center justify-start">
          <a className="block text-xl p-1 hover:opacity-70" href="">
            <FaInstagram />
          </a>
          <a className="block text-xl p-1 hover:opacity-70" href="">
            <FaPinterest />
          </a>
          <a className="block text-xl p-1 hover:opacity-70" href="">
            <FaFacebookMessenger />
          </a>
          <a className="block text-xl p-1 hover:opacity-70" href="">
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
