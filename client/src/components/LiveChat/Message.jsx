import React from "react";

import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="flex justify-end px-[5%] mt-1">
      <p className="flex items-center text-[#828282] pr-3">{trimmedName}</p>
      <div className="rounded-lg text-white inline-block max-w-[80%] px-1 py-3 bg-blue-700">
        <p className="w-full float-left text-sm break-words text-white">
          {ReactEmoji.emojify(text)}
        </p>
      </div>
    </div>
  ) : (
    <div className="flex px-[5%] mt-1 justify-start">
      <div className="rounded-lg text-white inline-block max-w-[80%] px-1 py-3 bg-white">
        <p className="w-full float-left text-sm break-words text-black">
          {ReactEmoji.emojify(text)}
        </p>
      </div>
      <p className="flex items-center text-[#828282] pl-3">{user}</p>
    </div>
  );
};

export default Message;
