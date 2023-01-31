import React from "react";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="flex border-t-2 border-solid border-[#d3d3d3]">
    <input
      className="border-none rounded-none p-[5%] w-4/5 text-lg"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button
      className="text-white uppercase bg-[#2979ff] p-5 inline-block border-none w-1/5"
      onClick={(e) => sendMessage(e)}
    >
      Send
    </button>
  </form>
);

export default Input;
