/* Bu kod, bir React bileşeni olan Toast'ı oluşturur. Toast, belirtilen mesajı gösteren ve ardından belirli bir süre sonra kapatılan bir küçük bildirim kutusudur. */
import React, { useState, useEffect } from "react";

/* useState, bileşenin state'ini tutmak için kullanılır. "show" adlı bir state tanımlanır ve başlangıçta "true" olarak ayarlanır. */
const Toast = ({ message, onClose }) => {
  const [show, setShow] = useState(true);

  /* useEffect, bileşenin yaşam döngüsünü takip etmek için kullanılır. Bileşen her yüklendiğinde, 3 saniye sonra bildirim kutusunu kapatmak için bir zamanlayıcı oluşturulur. Bu etki, bileşenin kapatılması gerektiği zaman bileşenin "onClose" prop'ını çağıran "return" bloğu ile temizlenir. */
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  /* Render metodu, bir <div> öğesi içinde belirtilen mesajı gösterir. "show" değişkeni kullanılarak, belirli bir animasyonlu geçişle bileşenin görünür veya gizlenir hale getirilmesi sağlanır. */
  return (
    <div
      className={`fixed bottom-0 right-0 m-8 bg-gray-800 text-white px-4 py-2 rounded-md transition-all duration-500 ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Toast;
/* Bu kod, genellikle bir işlem tamamlandığında kullanıcıya geri bildirim vermek için kullanılır. Örneğin, bir form gönderildiğinde veya bir işlem başarılı bir şekilde tamamlandığında, Toast mesajı kullanıcılara geri bildirim sağlayabilir. */