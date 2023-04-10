import React from "react";
import logo from "./logo2.png";
/* 1-Navbar bileşeni bir fonksiyonel bileşendir ve bir dizi prop alır. Bu props'lar arasında:
2-activeLink: kullanıcının şu anda seçili olan bağlantıyı belirlemek için kullanılan bir sayı (dizi indeksi)
setActiveLink: kullanıcının seçtiği bağlantıyı güncellemek için bir fonksiyon
Links: navbar'da gösterilen bağlantıların bir dizisi */
function Navbar(props) {
  const { activeLink, setActiveLink, Links } = props;

  return (
    /* Bileşen bir <div> öğesi ile başlar ve ardından bir navbar bileşeni içeren bir <div> öğesi vardır. Navbar bileşeni, Bootstrap benzeri bir görünüm sağlamak için birkaç CSS sınıfı kullanır */
    <div className="bg-[#E8D5C4] w-full h-screen">
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-center bg-white py-4 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-font text-gray-800">
            <span>
              <img src={logo} width={38} height={38} alt="" />
            </span>
            Ubn-Jr
          </div>
          {/* Navbar bileşeni, logo ve bağlantıları gösteren bir üstbilgi kısmı içerir. Logo, "Ubn-Jr" metniyle birlikte gösterilir ve logo2.png dosyasından alınır.  */}
          <ul className="md:flex md:items-center">
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
              <button className="mr-12 rounded-full py-2 px-3 text-xs font-bold cursor-pointer tracking-wider bg-cyan-600 text-white hover:bg-cyan-700 duration-100">
                Bize katılmak ister misiniz ?
              </button>
            </li>
          </ul>
          {/*  Bağlantılar dinamik olarak Links propundan alınır ve her bir bağlantı öğesi bir <button> öğesi içinde gösterilir. Kullanıcının seçtiği bağlantıyı activeLink propundan alır ve seçilen bağlantılar farklı bir stil ile gösterilir. Son olarak, bir "Bize katılmak ister misiniz?" düğmesi de gösterilir. */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
/* export default Navbar anahtar sözcüğü ile bileşen dışa aktarılır, böylece bu bileşen diğer dosyalardan kullanılabilir hale gelir.
*/