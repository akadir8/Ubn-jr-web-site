import logo from "./logo1.png";
import SocialMedia from "./SocialMedia";
import Typist from "react-text-typist";
import Card from "./Cards";
/* Bu React kodunda bir ana sayfa (HomePage) bileşeni oluşturulmuştur. Bu bileşen, üç farklı öğeden oluşur: */
function HomePage() {
  return (
    <>
    {/* Bir logo resmi (logo1.png) - bu resim, sayfanın sağ alt köşesinde animasyonlu bir şekilde zıplar. */}
      <div>
        <img
          className="animate-bounce absolute bottom-20 right-20 lg:left-0 mx-auto h-5/6 object-cover"
          src={logo}
          style={{ height: "500px", width: "500px" }}
          alt=""
        />
      </div>
      <div className="absolute top-1/3 text-xl sm:text-4xl md:text-6xl  xl:left-28 xl:text-7xl font-bold">
        {/* Bir başlık - "Ubn-JR" yazısı, sayfanın sol ortasında büyük ve kalın bir şekilde görüntülenir. Ayrıca, Typist bileşeni kullanılarak belirtilen cümleler yazı tipi animasyonu ile ekranda gösterilir. */}
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
      <div id="myDiv" className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg shadow-[#00A8CC] absolute top-0 bottom-0 m-auto right-10 bg-white p-6 h-fit w-1/3">
        {/* Bir diyalog kutusu - "Lorem, ipsum dolor" başlığı ve açıklama metni ile birlikte, sayfanın sağ tarafında yer alır. Bu kutu, "SocialMedia" bileşeni kullanılarak sosyal medya bağlantılarını içerir. Bu kutu ayrıca, büyük ekranlarda kullanıcı tarafından görüntülenebilir, ancak küçük ekranlarda gizlenebilir. */}
        <h1 className="text-4xl font-bold text-cyan-700">
          Lorem, ipsum dolor.
        </h1>
        <p className="text-gray-800 font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          ratione totam illum harum rerum magnam hic sed architecto dolorum
          deleniti vel, adipisci neque libero, ea eius repellendus. Ipsa,
          inventore perferendis!
        </p>
        <SocialMedia/>
        {/* Burda SocialMedia.js klsöründeki oluşturduğumuz ikonları çağrıyoruz*/}
      </div>
      <div className="flex justify-end space-x-64">
        <Card/>
        <Card/>
      </div>
    </>
  );
}

export default HomePage;

/* Son olarak, bileşen, export default ifadesi kullanılarak dışa aktarılır. Bu bileşen, başka bir dosyada veya uygulamada kullanılabilir. */