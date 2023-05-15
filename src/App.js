/* 1-Bu kod, bir React uygulamasının ana bileşeni olan App bileşenini
   tanımlar. 
   2- Burada yaptığımız işlem useState adlı Hooku ve (Footer, Navbar, ve Page) bileşenleri içeri aktarmaktadır.*/
import React, { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Page from './components/Page';

function App() {
/* useState hook'u kullanılarak activeLink adında bir değişken ve setActiveLink adında bir işlev tanımlanır. activeLink, kullanıcının şu anda hangi bağlantıya tıkladığını takip etmek için kullanılır. */
  const [activeLink, setActiveLink] = useState(0);
  /* Links adında bir dizi tanımlandı ve bu dizide her biri bir bağlantı adını ve URL'sini içeren beş nesne eklendi. */
  const Links = [
    {name:"Anasayfa",link:"/"},
    {name:"Yazılım",link:"/"},
    {name:"Siber",link:"/"},
    {name:"Tasarım",link:"/"},
    {name:"Elektronik",link:"/"},
  ];
  return (
    <div className="App">
    {/* Bu bileşenler daha sonra <Navbar />, <Page /> ve <Footer /> bileşenlerinde kullanılacak olan prop'lar olarak iletilir. <Navbar /> bileşeni, uygulamanın üst kısmında bir navigasyon çubuğu sağlar ve activeLink değeri burada kullanılır. <Page /> bileşeni, kullanıcının seçtiği bağlantıya göre farklı bir içerik gösterir. <Footer /> bileşeni, uygulamanın alt kısmında bir footer sağlar. */}
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} Links={Links} />
      <Page activeLink={activeLink} />
      <Footer/>
    </div>
  );
}

export default App;
/* export default App; ifadesi, App bileşeninin dışa aktarılmasını sağlar, böylece diğer bileşenler bu bileşeni kullanabilir. */