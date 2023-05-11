import HomePage from './HomePage';
import jsonData from "./data.json";
import SocialMedia from "./SocialMedia";
import Card from './Cards';

/* activeLink adlı bir özellik alır. Bu özellik, Navbar bileşenindeki tıklanan bağlantının sırasını temsil eder. Eğer activeLink sıfırsa, HomePage bileşenini döndürür. */
function Page({ activeLink }) {
  
  if (activeLink === 0) {
    return <HomePage />;
    /* Aksi takdirde, link adlı bir değişken tanımlanır ve tıklanan bağlantının adını ve adresini içeren bir nesne seçilir. Bu nesne, daha sonra jsonData adlı bir dosyadan ilgili bilgileri almak için kullanılacaktır. */
  }else{
    const link = [
      {name:"Yazılım", link:"/"},
      {name:"Siber", link:"/"},
      {name:"Tasarım", link:"/"},
      {name:"Elektronik", link:"/"},
    ][activeLink - 1];

    /* header ve content adlı iki değişken tanımlandı ve jsonData dosyasından tıklanan bağlantının adını kullanarak ilgili içeriği alırız. Bu içerik, daha sonra bir div içinde görüntülenecektir. */
    const { header, content } = jsonData[link.name.toLowerCase()];

    return (
      <>
      <div className='hidden lg:flex flex-col gap-5 rounded-md shadow-lg shadow-[#00A8CC] absolute top-56 m-auto left-10 bg-white p-6 h-fit w-1/3'>
        <h2 className='text-4xl font-bold text-cyan-700'>{header}</h2>
        <p className='text-gray-800 font-semibold'>{content}</p>
        <p>
        <SocialMedia/>
        </p>
      </div>
      <div>
        <Card position={{top:"220px", right:"650px"}} width="250px" height="300px"/>
        <Card position={{top:"220px", right:"350px"}} width="250px" height="300px"/>
        <Card position={{top:"220px", right:"50px"}} width="250px" height="300px" />
      </div>
      </>
    );
  }
}

export default Page;
/* export default Page anahtar sözcüğü ile bileşen dışa aktarılır, böylece bu bileşen diğer dosyalardan kullanılabilir hale gelir.
*/