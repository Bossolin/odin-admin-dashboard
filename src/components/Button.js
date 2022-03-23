import React from "react";

const Button = ({ name }) => {
  return (
    <button className="mx-1 max-w-full bg-sky-500 rounded-3xl hover:bg-sky-300 text-white px-8 py-2 cursor-pointer">
      {name}
    </button>
  );
};

export default Button;
