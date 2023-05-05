import React, { useState } from "react";
import axios from "axios";
/* useState() hook'u, bileşenin içindeki durum (state) için bir değişken oluşturur. Bu durum değişkeni, bileşenin yeniden oluşturulması sırasında bile önceki değerini tutar. Bu durum değişkeni, bileşenin hali hazırdaki durumunun öğelerini içeren bir nesne olarak başlatılır. */
const Form = ({ toggleForm, toggleToast }) => {
  /* Bu kodlar, bir React bileşeni olan bir formu temsil eder. Form, kullanıcıların ad, soyad, e-posta ve bir mesaj girerek bir iletişim formu göndermelerine olanak tanır. */
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  /* handleChange() fonksiyonu, form öğelerinin herhangi birinde bir değişiklik olduğunda çağrılır. Bu fonksiyon, formdaki öğelerin mevcut değerlerini, formData durumundaki nesneye ekler veya günceller. */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  /* handleSubmit() fonksiyonu, form gönderildiğinde çağrılır. Bu fonksiyon, formun verilerini console'a yazdırır ve ardından kullanıcının formun gönderildiğine dair bir geri bildirim almasını sağlar. Son olarak, setFormData() fonksiyonu, formu sıfırlar ve başlangıç ​​değerlerine geri döndürür. */
  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios
      .post('http://localhost:5000/api/form', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    toggleToast();
    toggleForm();
  
    setFormData({
      name: "",
      surname: "",
      email: "",
      message: "",
    });
  };
  

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          {/* Bu kod bir kapatma düğmesi oluşturur. onClick özelliği, düğmeye tıklandığında çağrılacak bir fonksiyonu belirtir. Bu örnekte, toggleForm fonksiyonu çağrılır ve iletişim formu kapatılır. button elementi, düğmeyi oluşturur ve görüntüsü için bazı CSS sınıflarını kullanır. */}
          <div className="text-right">
            <button
              type="button"
              className="inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={toggleForm}
            >
              X
            </button>
          </div>
          {/* Bu kod, bir HTML form elemanı oluşturur ve onSubmit özelliği, form gönderildiğinde çağrılacak bir fonksiyonu belirtir. Bu örnekte, handleSubmit fonksiyonu çağrılır ve form verileri işlenir. Form elemanı içinde, bir dizi input elementi ve bir textarea elementi yer alır, bu elementler kullanıcının bilgilerini girmesi için tasarlanmıştır. */}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              {/* Bu React kodu, bir formda "İSİM" etiketi ile bir input alanı oluşturuyor.

h1 etiketi "İSİM" yazısını oluşturuyor ve text-xl ve font-bold sınıfları ile büyüklüğü ve kalınlığı ayarlanıyor.
input etiketi, type="text" özelliği ile bir metin giriş alanı oluşturuyor. id, name ve value özellikleri, formData içindeki name alanını tanımlıyor ve handleChange fonksiyonu ile değerleri güncellemek için kullanılıyor. className özelliği, border, p, w-full ve rounded-md gibi sınıflarla stil özellikleri tanımlıyor.
Bu şekilde oluşturulan form alanı, kullanıcının "İSİM" bilgisini girmesini sağlıyor. Girilen değer, formData içindeki name alanında tutuluyor ve handleChange fonksiyonu ile güncellenebiliyor. */}
              <h1 className="text-xl font-bold mb-2">İSİM :</h1>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-400 p-2 w-full rounded-md"
              />
            </div>
            {/* Bu React kodu, bir form içindeki "Soy İsim" alanını oluşturur. HTML'deki <input> elemanını kullanarak, "type" özelliği "text" olarak ayarlanmış bir girdi alanı oluşturur. "id" ve "name" özellikleri, verileri almak ve işlemek için kullanılan tanımlayıcıları belirtir. "value" özelliği, formda kullanıcının girdiği değeri tutar ve "onChange" özelliği, input alanı değiştiğinde çağrılan bir fonksiyonu belirtir. CSS sınıfları, "border", "p-2", "w-full" ve "rounded-md" gibi özelliklerle, girdi alanının boyutunu, kenarlıklarını ve şeklini ayarlamak için kullanılır. "h1" etiketi, "Soy İsim" başlığını belirtir ve "text-xl" ve "font-bold" sınıfları ile boyutunu ve kalınlığını belirler. */}
            <div className="mb-6">
              <h1 className="text-xl font-bold mb-2">SOY İSİM :</h1>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                required
                className="border border-gray-400 p-2 w-full rounded-md"
              />
            </div>
            {/* Bu React kodu, bir formda "E MAİL" başlığı altında bir email giriş alanı oluşturur. "input" etiketi kullanılarak bir email giriş kutusu oluşturulur ve "value" özelliği "formData.email" olarak belirtilir. "onChange" özelliği de "handleChange" fonksiyonu ile bağlantılıdır, yani kullanıcı bu alana herhangi bir şey girdiğinde "handleChange" fonksiyonu çağrılır ve "formData" nesnesinin "email" özelliği güncellenir. Son olarak, giriş alanının tarzı "className" özelliği aracılığıyla belirtilir. Bu örnekte, sınır, dolgu ve yuvarlak köşeler gibi birkaç stil öğesi tanımlanır. */}
            <div className="mb-6">
              <h1 className="text-xl font-bold mb-2">E MAİL :</h1>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-400 p-2 w-full rounded-md"
              />
            </div>
            {/* Bu kod, bir iletişim formunda bir mesaj alanı oluşturuyor. mb-6 sınıfı, bu form elemanının altına 6 birimlik bir boşluk bırakır. text-xl ve font-bold sınıfları, form elemanının etiketindeki başlık metnine büyük ve kalın bir yazı stili verir. textarea etiketi, çok satırlı bir metin giriş alanı oluşturur. border, p-2 ve w-full sınıfları, giriş alanının kenarlıklarını, iç boşluğunu ve genişliğini ayarlar. rounded-md sınıfı, giriş alanının köşelerini yuvarlatır. id, name, value ve onChange özellikleri, form elemanının kimliğini, adını, değerini ve değişikliklerini işlemek için bir fonksiyona işaret eder. */}
            <div className="mb-6">
              <h1 className="text-xl font-bold mb-2">MESAJ :</h1>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border border-gray-400 p-2 w-full rounded-md"
              />
            </div>
            {/* Bu React kodu, bir form gönderme işlemini tamamlamak için kullanılan bir "GÖNDER" butonunu oluşturur. "text-right" sınıfı, butonun sağ tarafa hizalanmasını sağlar. Butonun stili, "bg-blue-500" ile arka plan rengi, "text-white" ile yazı rengi belirlenmiştir. "hover:bg-blue-600" ile butonun fareyle üzerine gelindiğinde arka plan renginin değiştirilmesi sağlanır. "focus:outline-none" ve "focus:ring-2" ile butona tıklanarak odaklanıldığında, etrafında bir çerçeve belirir. "focus:ring-offset-2" ile çerçevenin biraz dışarı taşmasını sağlar. "focus:ring-blue-500" ile de çerçevenin rengi belirlenir. */}
            <div className="text-right">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                GÖNDER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
/* export default Form ifadesi, bileşenin dışa aktarılması ve başka bir yerde kullanılabilir hale getirilmesi için kullanılır. */
