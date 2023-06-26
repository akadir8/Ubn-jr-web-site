import logo from "../Assets/logo1.png";
import SocialMedia from "../components/SocialMedia";
import Typist from "react-text-typist";
import Timeline from "../components/Timeline";

function HomePage() {
  return (
    <>
      <div>
        <img
          className="animate-bounce absolute bottom-20 right-20 lg:left-0 mx-auto h-5/6 object-cover"
          src={logo}
          style={{ height: "500px", width: "500px" }}
          alt=""
        />
      </div>
      <div className="animate absolute top-1/3 text-xl sm:text-4xl md:text-6xl  xl:left-28 xl:text-7xl font-bold">
        <span className="text-cyan-700">Ubn-JR</span>
        <br />
        <Typist
          className="typed-text text-cyan-700"
          sentences={["Yazılım", "Web", "Siber", "Tasarım", "Elektronik"]}
          pauseTime={1000}
          typeSpeed={10000}
          backSpeed={10000}
          backDelay={3000}
          loop
        />
      </div>
      <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg shadow-[#00A8CC] absolute top-28 m-auto right-10 bg-white p-6 h-fit w-1/3">
        <h1 className="text-4xl font-bold text-cyan-700">Ubn-Jr</h1>
        <p className="text-gray-800 font-semibold">
          Ubn-Jr, genç yetenekleri bir araya getirerek, desteklemek ve onları
          geliştirmek, onlara yenilikçi bir platform sunan bir oluşumdur. Amacı,
          genç beyinleri teknoloji dünyasında daha da ileriye taşıyacak projeler
          üretmeleri için teşvik etmektir. Ubn-Jr, gençlerin öğrenme sürecini
          destekleyerek geleceğin teknoloji liderlerini yetiştirmeye odaklanır.
          Ubn-Jr'nin bu yenilikçi yaklaşımı, gelecekteki teknoloji
          gelişmelerinde genç beyinlerin önemli bir rol oynamasını sağlamaktır.
        </p>
        <SocialMedia />
      </div>
      <div>
        <Timeline />
      </div>
    </>
  );
}

export default HomePage;
