import logo from './logo1.png';
import { FaYoutube, FaGithub } from 'react-icons/fa';

function HomePage() {
  return (
    <>
      <div>
        <img className="animate-bounce absolute bottom-20 right-20 lg:left-0 mx-auto h-5/6 object-cover" src={logo} style={{ height: '500px', width: '500px' }} alt="" />
      </div>
      {/* animated text */}
      <div className="absolute top-1/3 text-xl sm:text-4xl md:text-6xl  xl:left-28 xl:text-7xl font-bold">
        <span className="text-[#E8D5C4]">Ubn-JR</span>
        <p id="text" className="text-[#E8D5C4]"></p>
      </div>
      <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg shadow-[#FC2947] absolute top-0 bottom-0 m-auto right-10 bg-white p-6 h-fit w-1/3">
        <h1 className="text-4xl font-bold text-cyan-700">Lorem, ipsum dolor.</h1>
        <p className="text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ratione totam illum harum rerum magnam hic sed architecto dolorum deleniti vel, adipisci neque libero, ea eius repellendus. Ipsa, inventore perferendis!</p>
        <div className="justify-between space-x-2 text-2xl text-[#002B5B]">
          <FaYoutube />
          <FaGithub />
        </div>
      </div>
    </>
  );
}

export default HomePage;
