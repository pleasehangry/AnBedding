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
  FiXCircle,
} from "react-icons/fi";

import { navVariants } from "../utils/motion";

import Logo from "../assets/imgs/Logo.png";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const [searchItems, setSearchItems] = useState([]);

  const productSubNavItems = [
    {
      header: "Nemmm",
      link: "/product/nem",
      tags: [
        {
          name: "Nem gi do",
          link: "/product/nem/nemgido",
        },
        {
          name: "Nem gi do",
          link: "/product/nem/nemgido",
        },
        {
          name: "Nem gi do",
          link: "/product/nem/nemgido",
        },
        {
          name: "Nem gi do",
          link: "/product/nem/nemgido",
        },
      ],
    },
    {
      header: "Nemmm",
      link: "/product/nem",
      tags: [
        {
          name: "Nem gi do",
          link: "/product/nem/nemgido",
        },
        {
          name: "Nem gi do",
          link: "/product/nem/nemgido",
        },
        {
          name: "Nem gi do",
          link: "/product/nem/nemgido",
        },
        {
          name: "Nem gi do",
          link: "/product/nem/nemgido",
        },
        {
          name: "Nem gi do",
          link: "/product/nem/nemgido",
        },
        {
          name: "Nem gi do",
          link: "/product/nem/nemgido",
        },
      ],
    },
  ];

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="w-screen top-0 fixed z-50 bg-white px-4 md:px-16 shadow-sm h-16"
    >
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="m-2">
          <img src={Logo} alt="Logo" className="object-contain w-20" />
        </Link>
        <div className="flex items-center h-full">
          <ul className="flex items-center">
            {["S???n Ph???m", "??ang gi???m gi??", "C???a H??ng G???n Nh???t", "D???ch V???"].map(
              (item, index) => (
                <div className="group/item" key={index}>
                  <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    className="text-lg font-medium px-8 py-5 text-headingColor hover:text-primary cursor-pointer"
                  >
                    {item}
                  </motion.li>
                  {index === 0 ? (
                    <div className="absolute group/edit invisible group-hover/item:visible left-0 w-screen right-0 top-full bg-white z-10 border-t-2 border-slate-200 drop-shadow-lg">
                      <div className="overflow-hidden p-7 px-10">
                        <div className="bg-white grid grid-cols-6 gap-4">
                          {productSubNavItems.map((item) => (
                            <ul className="flex flex-col items-start gap-2">
                              <a
                                href={item.link}
                                className="text-base p-1 text-headingColor font-semibold hover:text-primary"
                              >
                                {item.header}
                              </a>
                              {item.tags.map((tag) => (
                                <motion.li
                                  whileHover={{ scale: 1.2 }}
                                  whileTap={{ scale: 0.9 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 17,
                                  }}
                                  className="p-1 hover:text-primary"
                                >
                                  <a
                                    className="text-base text-headingColor "
                                    href={tag.link}
                                  >
                                    {tag.name}
                                  </a>
                                </motion.li>
                              ))}
                            </ul>
                          ))}
                          <div className="col-span-2">
                            <div className="w-full overflow-hidden">
                              <a href="#">
                                <motion.img
                                  whileHover={{ scale: 1.2 }}
                                  transition={{
                                    type: "spring",
                                    duration: 7,
                                  }}
                                  className="w-full object-contain"
                                  src="https://cld.accentuate.io/263885389995/1617288309160/Nav_Desktop_Beds_430x350.jpg?v=1672145384102&options=w_860"
                                  alt="a"
                                />
                              </a>
                            </div>
                            <a
                              href="/product"
                              className="block mt-2 text-base text-headingColor font-semibold hover:text-primary"
                            >
                              Mua n???m
                            </a>
                          </div>
                          <div className="col-span-2">
                            <div className="w-full overflow-hidden">
                              <a href="#">
                                <motion.img
                                  whileHover={{ scale: 1.2 }}
                                  transition={{
                                    type: "spring",
                                    duration: 7,
                                  }}
                                  className="w-full object-contain"
                                  src="https://cld.accentuate.io/263885389995/1617288309160/Nav_Desktop_Beds_430x350.jpg?v=1672145384102&options=w_860"
                                  alt="a"
                                />
                              </a>
                            </div>
                            <a
                              href="/product"
                              className="block mt-2 text-base text-headingColor font-semibold hover:text-primary"
                            >
                              Mua n???m
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              )
            )}
          </ul>
        </div>
        <div className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            className="text-lg p-4 text-headingColor hover:text-headingColor cursor-pointer relative"
          >
            <div
              onClick={() => {
                setIsSearch(!isSearch);
              }}
            >
              <FiSearch />
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            className="text-lg p-4 text-headingColor hover:text-headingColor cursor-pointer"
          >
            <Link to={"/cart"}>
              <FiUser />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            className="text-lg p-4 text-headingColor hover:text-headingColor cursor-pointer"
          >
            <Link to={"/cart"}>
              <FiHeart />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            className="text-lg p-4 text-headingColor hover:text-headingColor cursor-pointer"
          >
            <Link to={"/cart"}>
              <FiShoppingBag />
            </Link>
          </motion.div>
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
                      <motion.li
                        key={index}
                        onClick={() => setIsMenu(false)}
                        className="hover:bg-slate-200 text-base px-4 py-2 hover: text-headingColor hover:text-headingColor cursor-pointer"
                      >
                        {item}
                      </motion.li>
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
            placeholder="B???n mu???n t??m g???"
          />
        </div>
      </div>
      {/* search section */}
      {isSearch && (
        <div className="absolute top-full items-center left-0 w-full right-0 bg-white">
          <div className="flex items-center p-5">
            <span className="text-3xl text-headingColor px-3 h-full flex items-center">
              <FiSearch />
            </span>
            <input
              type="text"
              className="text-3xl h-full text-headingColor flex-1 outline-0 p-2"
              placeholder="B???n mu???n t??m g???"
            />
            <span
              className="text-3xl text-headingColor cursor-pointer"
              onClick={() => {
                setIsSearch(false);
              }}
            >
              <FiXCircle />
            </span>
          </div>
          <div className="absolute top-full left-0 right-0 bg-white">
            <div className="grid grid-cols-4 gap-4 border-t border-slate-200 mx-20 p-4">
              <div>
                <h3 className="p-2 text-lg text-headingColor">G???i ??</h3>
                <ul className="flex flex-col items-start">
                  <li className="p-2">
                    <a
                      className="text-base text-md text-headingColor hover:text-primary cursor-pointer"
                      href={`/product?q=`}
                    >
                      hello
                    </a>
                  </li>
                  <li className="p-2">
                    <a
                      className="text-base text-md text-headingColor hover:text-primary"
                      href={`/product?q=`}
                    >
                      hello
                    </a>
                  </li>
                  <li className="p-2">
                    <a
                      className="text-base text-md text-headingColor hover:text-primary"
                      href={`/product?q=`}
                    >
                      hello
                    </a>
                  </li>
                  <li className="p-2">
                    <a
                      className="text-base text-md text-headingColor hover:text-primary"
                      href={`/product?q=`}
                    >
                      hello
                    </a>
                  </li>
                  {/* {searchItems &&
                    searchItems.map((item, index) => (
                      <li className="p-2" key={index}>
                        <a
                          className="text-base text-md text-headingColor hover:text-primary"
                          href={`/product?q=${item.link}`}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))} */}
                </ul>
              </div>
              <div>
                <h3 className="my-2 text-lg text-headingColor">S???n Ph???m</h3>
                <a href="#">
                  <img
                    className="w-full"
                    src="https://cdn.shopify.com/s/files/1/0507/9017/0795/collections/Category_BedsHeadboards_302x302_2x_9d97590e-5b43-4a60-98e5-62c58fba1ab7_302x@2x.jpg?v=1672143158"
                    alt="bed"
                  />
                </a>
                <a className="block mt-2 text-base text-textColor" href="#">
                  Bed Name
                </a>
                <a className="text-sm" href="#">
                  From:
                  <span className="ml-1 text-red-900">1000.000vnd</span>
                  <span className="line-through ml-1 text-textColor">
                    2.000.000vnd
                  </span>
                </a>
              </div>
              <div className="mt-11">
                <a href="#">
                  <img
                    className="w-full"
                    src="https://cdn.shopify.com/s/files/1/0507/9017/0795/collections/Category_BedsHeadboards_302x302_2x_9d97590e-5b43-4a60-98e5-62c58fba1ab7_302x@2x.jpg?v=1672143158"
                    alt="bed"
                  />
                </a>
                <a className="block mt-2 text-base text-textColor" href="#">
                  Bed Name
                </a>
                <a className="text-sm" href="#">
                  From:
                  <span className="ml-1 text-red-900">1000.000vnd</span>
                  <span className="line-through ml-1 text-textColor">
                    2.000.000vnd
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block my-2 text-lg text-right text-headingColor hover:text-primary"
                >
                  T???t c??? s???n ph???m
                </a>
                <a href="#">
                  <img
                    className="w-full"
                    src="https://cdn.shopify.com/s/files/1/0507/9017/0795/collections/Category_BedsHeadboards_302x302_2x_9d97590e-5b43-4a60-98e5-62c58fba1ab7_302x@2x.jpg?v=1672143158"
                    alt="bed"
                  />
                </a>
                <a className="block mt-2 text-base text-textColor" href="#">
                  Bed Name
                </a>
                <a className="text-sm" href="#">
                  From:
                  <span className="ml-1 text-red-900">1000.000vnd</span>
                  <span className="line-through ml-1 text-textColor">
                    2.000.000vnd
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
