import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiShoppingBag,
  FiUser,
  FiSearch,
  FiHeart,
  FiLogOut,
  FiPlus,
  FiMenu,
} from "react-icons/fi";

import Logo from "../assets/imgs/Logo.png";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <header className="w-screen fixed z-50 bg-white px-4 md:px-16 shadow-sm">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="m-2">
          <img src={Logo} alt="Logo" className="object-contain w-20" />
        </Link>
        <div className="flex items-center h-full">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center"
          >
            {["Sản Phẩm", "Menu", "About Us", "Service"].map((item, index) => (
              <li
                key={index}
                className="text-lg font-medium h-full px-8 py-4 text-headingColor hover:text-primary cursor-pointer"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
        <div className="flex items-center">
          <Link
            to={"/cart"}
            className="text-lg p-4 text-headingColor hover:text-headingColor cursor-pointer"
          >
            <FiSearch />
          </Link>
          <Link
            to={"/cart"}
            className="text-lg p-4 text-headingColor hover:text-headingColor cursor-pointer"
          >
            <FiUser />
          </Link>
          <Link
            to={"/cart"}
            className="text-lg p-4 text-headingColor hover:text-headingColor cursor-pointer"
          >
            <FiHeart />
          </Link>
          <Link
            to={"/cart"}
            className="text-lg p-4 text-headingColor hover:text-headingColor cursor-pointer"
          >
            <FiShoppingBag />
          </Link>
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden w-full h-full">
        <div className="flex w-full h-full items-center justify-between">
          <div className="relative">
            <div className="text-lg px-2 py-4 text-headingColor">
              <FiMenu />
            </div>
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 flex flex-col bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0 "
              >
                <Link to="/createItem" onClick={() => setIsMenu(false)}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                    New Item <FiPlus />
                  </p>
                </Link>
                <ul className="flex flex-col">
                  {["Home", "Menu", "About Us", "Service"].map(
                    (item, index) => (
                      <li
                        key={index}
                        onClick={() => setIsMenu(false)}
                        className="hover:bg-slate-200 text-base px-4 py-2 hover: text-headingColor hover:text-headingColor cursor-pointer"
                      >
                        {item}
                      </li>
                    )
                  )}
                </ul>
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                  // onClick={logout}
                >
                  Logout <FiLogOut />
                </p>
              </motion.div>
            )}
          </div>
          <Link to="/" className="m-2">
            <img src={Logo} alt="Logo" className="object-contain w-20" />
          </Link>
          <div
            className="relative flex items-center justify-center"
            // onClick={showCard}
          >
            <div className="flex items-center">
              <Link
                to={"/cart"}
                className="text-lg px-2 py-4 text-headingColor"
              >
                <FiHeart />
              </Link>
              <Link
                to={"/cart"}
                className="text-lg px-2 py-4 text-headingColor"
              >
                <FiShoppingBag />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center h-12 m-2">
          <div className="bg-slate-100 text-lg text-headingColor p-2 px-3 h-full flex items-center rounded-l-md">
            <FiSearch />
          </div>
          <input
            type="text"
            className="text-lg h-full text-headingColor flex-1 outline-0 p-2 bg-slate-100 rounded-r-md"
            placeholder="Bạn muốn tìm gì?"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
