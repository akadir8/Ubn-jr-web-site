import React, { useState } from "react";
import Footer from "./Layouts/Footer";
import Navbar from "./Layouts/Navbar";
import Page from "./Pages/Page";

function App() {
  const [activeLink, setActiveLink] = useState(0);

  const Links = [
    { name: "Anasayfa", link: "/" },
    { name: "Yazılım", link: "/" },
    { name: "Siber", link: "/" },
    { name: "Tasarım", link: "/" },
    { name: "Elektronik", link: "/" },
  ];
  return (
    <div className="App">
      <Navbar
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        Links={Links}
      />
      <Page activeLink={activeLink} />
      <Footer />
    </div>
  );
}

export default App;
