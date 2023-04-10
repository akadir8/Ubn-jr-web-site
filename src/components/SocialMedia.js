/* import ifadesi, react-icons kütüphanesinden FaYoutube ve FaGithub bileşenlerini alır. Bu bileşenler, YouTube ve GitHub simgelerini oluşturmak için kullanılır. */
import { FaYoutube, FaGithub } from "react-icons/fa";
/* function anahtar sözcüğü, SocialMedia bileşeninin bir fonksiyon olduğunu belirtir. return ifadesi, bileşenin HTML yapısını tanımlar */
function SocialMedia() {
  return (
  /* <></> arasındaki boşluk, React'ta "boş bir fragment" anlamına gelir ve herhangi bir HTML etiketi olmadan birden fazla bileşeni gruplandırmak için kullanılır. */
    <>
    {/* <div> etiketi, simgeleri içeren ana bileşendir. className özelliği, CSS sınıflarını tanımlamak için kullanılır. */}
      <div className="space-x-3 text-2xl text-[#002B5B] flex">
        <div>
          {/* <div> etiketleri, her bir simgenin içinde yer alır. href özelliği, her bir simgeyi tıklanabilir hale getirmek için kullanılır. */}
          <a href="https://www.youtube.com/@UbnJr">
            <FaYoutube />
          </a>
        </div>
        <div>
          <a href="https://github.com/orgs/Ubn-Jr/dashboard">
            <FaGithub />
          </a>
          {/* <FaYoutube /> ve <FaGithub /> ifadeleri, react-icons kütüphanesinden alınan bileşenleri çağırarak, YouTube ve GitHub simgelerini oluşturur. */}
        </div>
      </div>
    </>
  );
}
export default SocialMedia;
/* export default anahtar sözcüğü ile bileşen dışa aktarılır, böylece bu bileşen diğer dosyalardan kullanılabilir hale gelir.
 */