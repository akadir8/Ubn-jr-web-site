import React from 'react';
import HomePage from './HomePage';
import jsonData from "./data.json";

function Page({ activeLink }) {
  if (activeLink === 0) {
    return <HomePage />;
  } else{
    const link = [
      {name:"Web", link:"/"},
      {name:"Siber", link:"/"},
      {name:"Tasarım", link:"/"},
      {name:"Elektronik", link:"/"},
    ][activeLink - 1];

    const { header, content } = jsonData[link.name.toLowerCase()];

    return (
      <div className='hidden lg:flex flex-col gap-5 rounded-md shadow-lg shadow-[#FC2947] absolute top-56 m-auto left-10 bg-white p-6 h-fit w-1/3'>
        <h2 className='text-4xl font-bold text-cyan-700'>{header}</h2>
        <p className='text-gray-800 font-semibold'>{content}</p>
      </div>
    );
  }
}

export default Page;