import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { BsChatLeftDots, BsThreeDots } from "react-icons/bs";
import { FiMinus, FiOpt } from "react-icons/fi";
import LiveChatTest from "./LiveChat/LiveChatTest";

const LiveChat = () => {
  const [isOpenChat, setIsOpenChat] = useState(false);
  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ borderRadius: 50, rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="fixed p-5 bottom-6 right-6 justify-center flex items-center bg-black z-50 shadow-lg cursor-pointer border-2 border-blue-500"
      >
        <span
          className="text-xl text-white"
          onClick={() => setIsOpenChat(!isOpenChat)}
        >
          <BsChatLeftDots />
        </span>
        {isOpenChat && (
          <motion.div className="fixed right-0 bottom-full mb-2 w-[350px] h-[400px] z-10 bg-white rounded-md shadow-lg cursor-default">
            <div className="flex items-center justify-between m-2 mx-4 border-b border-slate-300">
              <span className="text-lg text-headingColor p-2">
                <BsThreeDots />
              </span>
              <h2 className="text-lg text-primary font-semibold">An Bedding</h2>
              <span
                className="text-lg text-headingColor p-2 rounded-full hover:bg-slate-100 cursor-pointer"
                onClick={() => {
                  setIsOpenChat(!isOpenChat);
                }}
              >
                <FiMinus />
              </span>
            </div>
            <div className="flex">
              <LiveChatTest user={{ name: "hango", room: "VIP" }} />
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default LiveChat;
