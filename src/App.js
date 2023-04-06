import React, { useState } from 'react';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [activeLink, setActiveLink] = useState(0);
  const Links = [
    {name:"Anasayfa",link:"/"},
    {name:"Web",link:"/"},
    {name:"Siber",link:"/"},
    {name:"Tasarım",link:"/"},
    {name:"Elektronik",link:"/"},
  ];
  return (
    <div className="App ">
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} Links={Links} />
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
