import { FaYoutube, FaGithub } from "react-icons/fa";

function SocialMedia() {
  return (
    <>
      <div className="space-x-3 text-2xl text-[#002B5B] flex">
        <div>
        <a href="https://www.youtube.com/@UbnJr" target="_blank">
            <FaYoutube />
          </a>
        </div>
        <div>
          <a href="https://github.com/orgs/Ubn-Jr/dashboard" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
}

export default SocialMedia;