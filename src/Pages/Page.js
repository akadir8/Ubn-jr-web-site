import axios from "axios";
import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import jsonData from "../components/data.json";
import SocialMedia from "../components/SocialMedia";
import Card from "../components/Cards";
import TextButton from "../Buttons/TextButton";
import TextForm from "../Forms/TextForm";

function Page({ activeLink }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleForm = () => setIsOpen(!isOpen);
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
  }, []);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/mongo/abdulkadir"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (activeLink === 0) {
    return <HomePage />;
  } else {
    const link = [
      { name: "Yazılım", link: "/" },
      { name: "Siber", link: "/" },
      { name: "Tasarım", link: "/" },
      { name: "Elektronik", link: "/" },
    ][activeLink - 1];

    const { header, content } = jsonData[link.name.toLowerCase()];

    return (
      <>
        <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg shadow-[#00A8CC] absolute top-56 m-auto left-10 bg-white p-6 h-fit w-1/3">
          <h2 className="text-4xl font-bold text-cyan-700">{header}</h2>
          <p className="text-gray-800 font-semibold">{content}</p>
          <p>
            <SocialMedia />
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {data.length > 0 &&
            data
              .map((item, index) => (
                <div
                  key={index}
                  style={{ position: "relative", top: "-480px", left: "280px" }}
                >
                  <Card
                    cardContent={{
                      position: item.position,
                      width: "250px",
                      height: "300px",
                      title: item.title,
                      content: item.content,
                      author: item.author,
                    }}
                  />
                </div>
              ))
              .reverse()}
        </div>

        <div className="fixed bottom-5 right-5">
          <TextButton handleButtonClick={toggleForm} />
          {isOpen && <TextForm toggleForm={toggleForm} />}
        </div>
      </>
    );
  }
}

export default Page;
