import React, { useState, useEffect } from "react";

const Toast = ({ message, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed top-0 right-0 m-8 bg-gray-800 text-white px-4 py-2 rounded-md transition-all duration-500 ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Toast;
