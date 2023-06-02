import HomePage from "./HomePage";
import jsonData from "./data.json";
import SocialMedia from "./SocialMedia";
import Card from "./Cards";
import BlueButton from "./BlueButton";

function Page({ activeLink }) {
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
        <div>
          <div>
          {[1].map((index) => (
            <Card
              key={index}
              position={{
                top: "220px",
                right: `${(index + 1) * 300 + 50}px`,
              }}
              width="250px"
              height="300px"
            />
          ))}
          </div>
        </div>
        <div className="fixed bottom-5 right-5">
          <BlueButton />
        </div>
      </>
    );
  }
}

export default Page;
