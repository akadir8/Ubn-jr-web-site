import React, { useState, useEffect } from "react";

const Toast = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-0 right-0 m-4 bg-green-500 text-white p-4 rounded-md"
          style={{ zIndex: "9999" }}
        >
          <span className="text-xl mr-2">&#10003;</span>
          {message}
        </div>
      )}
    </>
  );
};

export default Toast;
