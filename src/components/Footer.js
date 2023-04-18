/* Footer bileşenini tanımladık. Footer, bir <div> etiketi içinde bir <p> etiketi ile oluşturduk. Bu paragraf etiketi, "Ubn-Jr. Tüm Hakları Saklıdır" metnini ve 2023 yılını gösteren telif hakkı uyarısını ekranımıza yazdırdık. */
function Footer(){
    return (
        /* className özelliği, CSS sınıflarını tanımlamak için kullanılır. Bu örnekte, <div> etiketi <p> etiketi içerisine css özellikerimizi tanımladık. */
        <div className="font-nunito">
            <p className="text-sm font-bold text-center ">Copyright © 2023 Ubn-Jr. All Right Reserved</p>

        </div>
)
}
export default Footer;

/* Footer bileşeni, "export default" anahtar sözcüğü ile dışa aktarılır, böylece bu bileşen diğer dosyalardan kullanılabilir hale gelir. */