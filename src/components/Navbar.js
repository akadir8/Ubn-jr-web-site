/* Kod, Button, Form ve Toast bileşenlerini de içerir. Bu bileşenler, Navbar bileşeni içinde kullanılarak form gösterme ve bildirim gösterme işlemlerinin yapılmasını sağlar. */
import React from "react";
import logo from "./logo2.png";
import Button from "./ButonPage";
import Form from "./Form";
import Toast  from "./Toast";

/* Navbar bileşeni, activeLink, setActiveLink ve Links adlı üç özelliği props olarak alır. activeLink özelliği, şu anda seçili sayfanın dizinini tutar. setActiveLink özelliği, kullanıcının sayfa bağlantıları arasında gezinmesine olanak tanır. Links özelliği, sayfa bağlantılarının bir listesini içerir. */
function Navbar(props) {
  const { activeLink, setActiveLink, Links } = props;
  /* Kodda iki adet useState hook'u kullanılır. isOpen adlı bir değişken, formun açık/kapalı durumunu takip eder. showToast adlı bir değişken, form başarıyla gönderildiğinde kullanıcılara bir bildirim göstermek için kullanılır. */
  const [isOpen, setIsOpen] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);

  /* toggleForm işlevi, formun açılıp kapatılmasını yönetir. toggleToast işlevi ise, form başarıyla gönderildiğinde kullanıcılara bir bildirim göstermek için kullanılır. */
  /* React.useState fonksiyonu, bir bileşenin özelliklerindeki değişiklikleri ve bileşenin yeniden çizilmesini tetikleyen değişkenleri yönetmek için kullanılır.  */
  const toggleForm = () => setIsOpen(!isOpen)

  const toggleToast = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }


  return (
    <div className="bg- w-full h-screen">
      <div className="shadow-md w-full fixed top-0 left-0">
        <div id="navBar" className="md:flex items-center justify-center py-4 md:px-10 px-7">
          <div className="font-bold mr-48 text-2xl cursor-pointer flex items-center font-font text-gray-800">
            <span>
              <img src={logo} width={38} height={38} alt="" />
            </span>
            Ubn-Jr
          </div>
        {/* Bu kod, bir liste elementi oluşturur ve listenin her bir öğesi, Links adlı bir dizi içindeki her bir öğe için bir düğme oluşturur. Links dizisi, Navbar bileşenine aktarılan bir özelliktir ve her bir öğesi bir bağlantı adını ve bağlantıyı temsil eden bir URL adresini içerir. */}
          <ul className=" md:flex md:items-center">
            {Links.map((link, index) => (
              <li key={link.name} className="md:ml-8 text-xl">
                <button
                /* Her düğme öğesi, onClick olayına sahip bir düğme oluşturur. onClick olayı, bağlantıların seçili olup olmadığını belirleyen activeLink öğesini günceller. Düğme öğeleri ayrıca CSS sınıfları eklerler, böylece seçilen bağlantı belirgin hale gelir ve diğerleri daha soluk hale gelir. Son olarak, Navbar bileşeninin alt kısmında bir başka bileşen olan Button bileşeni bulunur ve bu bileşenin görüntülenmesi, showForm adlı bir fonksiyon çağrısı tarafından kontrol edilir. */
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
              <Button showForm={toggleForm}/>
            </li>
          </ul>
        </div>
      </div>
      {/* Bu kısımda, "isOpen" adlı bir state değişkeni kontrol edilir. Eğer "isOpen" true ise, "Form" adlı bir bileşen oluşturulur ve "toggleForm" ve "toggleToast" fonksiyonları props olarak geçirilir. "showToast" adlı bir başka state değişkeni de kontrol edilir. Eğer "showToast" true ise, "Toast" adlı bir bileşen oluşturulur ve "message" prop'una "Bilgileriniz başarıyla gönderildi." değeri atanır. Bu sayede kullanıcıya bir bildirim gösterilir. */}
      {isOpen && <Form toggleForm={toggleForm} toggleToast={toggleToast} /> }
      {showToast && <Toast message="Bilgileriniz başarıyla gönderildi." />}
    </div>
  );
}
 
export default Navbar;