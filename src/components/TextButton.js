import React from "react";

const TextButton = ({ handleButtonClick }) => {
  return (
    <div>
      <button
        className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center"
        onClick={handleButtonClick}
      >
        <span className="text-xl mb-1">+</span>
      </button>
    </div>
  );
};

export default TextButton;
