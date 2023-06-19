import React from "react";

function Button({ showForm }) {
  return (
    <button
      id="buton"
      onClick={showForm}
      className="ml-56 rounded-full py-2 px-3 text-xs font-bold tracking-wider text-white hover:bg-cyan-700 duration-100"
    >
      Bizimle iletişime geçin
    </button>
  );
}

export default Button;
