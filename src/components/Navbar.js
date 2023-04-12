import React from "react";
import logo from "./logo2.png";
import Button from "./ButonPage";
 
function Navbar(props) {
  const { activeLink, setActiveLink, Links } = props;
  return (
    <div className="bg-[#E8D5C4] w-full h-screen">
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-center bg-white py-4 md:px-10 px-7">
          <div className="font-bold mr-48 text-2xl cursor-pointer flex items-center font-font text-gray-800">
            <span>
              <img src={logo} width={38} height={38} alt="" />
            </span>
            Ubn-Jr
          </div>
        
          <ul className=" md:flex md:items-center">
            {Links.map((link, index) => (
              <li key={link.name} className="md:ml-8 text-xl">
                <button
                  onClick={() => setActiveLink(index)}
                  className={`text-gray-800 hover:text-gray-400 duration-100 ${
                    activeLink === index ? "font-bold" : ""
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
            <li className="md:ml-8">
              <Button setActiveLink={setActiveLink}/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
 
export default Navbar;