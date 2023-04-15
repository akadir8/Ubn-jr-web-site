import React from "react";

const Toast = ({ message }) => {
  return (
    <div
      className="fixed top-0 right-0 m-4 bg-green-500 text-white p-4 rounded-md"
      style={{ zIndex: "9999" }}
    >
      <span className="text-xl mr-2">&#10003;</span>
      {message}
    </div>
  );
};

export default Toast;
