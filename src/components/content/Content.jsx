import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import "./content.css";
import { FaWhatsapp } from 'react-icons/fa';
import LeafletMap from "../Map/Map";


export default function Content() {
    const handleBuyNowClick = (productTitle) => {
        const phoneNumber = "+966530030236"; 
        const productMessage = `أنا مهتم بمنتج: ${productTitle}.\n\nمن فضلك أرسل لي مزيدًا من التفاصيل.`;
    
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(productMessage)}`;
    
        window.open(whatsappUrl, "_blank"); // Open WhatsApp in a new tab
    };


    const [activeSlide, setActiveSlide] = useState(0);
    const product = [
        [
          { id: 5, name: " شراء غرف نوم مستعملة بالرياض", img: "/غرفنوم.jpg" },
          { id: 4, name: "شراء خزانة ملابس مستعملة بالرياض", img: "/خزانات.jpg" },
          { id: 3, name: "شراء جلسات مستعملة بالرياض  ", img: "/جلسات.jpg" },
          { id: 2, name: "شراء كنب مستعمل بالرياض ", img: "/كنب.jpg" },
        ],
        [
            { id: 1, name: " شراءاجهزة كهربائية بالرياض", img: "/بوتجاز.jpg" },
            { id: 2, name: " شراء مطابخ بالرياض", img: "/مطابخ.jpg" },
            { id: 3, name: " شراء غسالات بالرياض", img: "/غساله.jpg" },

        ]
    ]
    const handleDotClick = (index) => {
        setActiveSlide(index);
      };
  return (
    <>
      <div className="Containar">
        <div className="ImageCover">
          <img className="img1" src="/public/backgrpund-1.jpg" alt="" />
          <div className="textCover">
            <p>مؤسسة نوف مسعود بن مطلق الدوسري</p>
            <p>لشراء الاثاث المستعمل بالرياض</p>
          </div>
        </div>
       

      </div>
      <br/>
      <div className="btnWhatsap">
        <a  href="https://wa.me/+966530030236" className="ancurBtn"> <button className="btn1" > <FaWhatsapp size={20} />  ....  تواصل معنا عبر الوتساب    </button></a>
       
      </div>
     

      <div className="information">
            <p className="para1">افضل شركة شراء اثاث مستعمل بالرياض</p>
            <p className="para2">شراء كافة أنواع الأثاث المستعمل من المنازل والشركات ومن جميع احياء الرياض بسعر ممتاز بعد المعاينة والتقييم</p>
            <p className="para2">جاهزين لشراء كافة أنواع الأثاث المستعمل من غرف نوم، غرف معيشة ، غرف أطفال ، جلسات ، كنب ، كراسي ، مكيفات، أجهزة كهربائية</p>
            <p className="para2">مطابخ -  مكاتب وكل ما هو مستعمل وجاهز للتواصل معنا لتقييمه وشرائه</p>
        </div>
        <br/>
        <br/>

        <div className="citiesImages">
          {product[activeSlide].map((item) => (
            <div className="cityImage" key={item.id}>
                <button  className="btnWhatsapp" onClick={() => handleBuyNowClick(item.name)}> <img  className="imgCity" src={item.img} alt={item.name} /></button>
              
              <br />
              <h5>{item.name}</h5>
            </div>
          ))}

          
        </div>
        <div className="dots">
          {product.map((_, index) => (
            <div
              key={index}
              className={`dot ${activeSlide === index ? "activeDot" : ""}`}
              onClick={() => handleDotClick(index)}
            >
              {activeSlide === index ? (
                <GoDotFill style={{ color: "#3a8ae0", fontSize: "20px" }} />
              ) : (
                <GoDot style={{ fontSize: "20px" }} />
              )}
            </div>
          ))}
        </div>
        <br/>
        <br/>
        {/* <div className="btnWhatsap">
          <a  href="https://wa.me/+966530030236" className="ancurBtn"> <button className="btn1" > <FaWhatsapp size={20} />  ....  تواصل معنا عبر الوتساب    </button></a>
        </div> */}
            <hr/>
        <div className="information">
            <p className="para11">هل تبحث عن افضل شركة لشراء أثاث مستعمل بشمال وجنوب الرياض بتقييم العملاء؟</p>
            <p className="para22">يوجد لدينا محلات بسوق حراج لشراء الاثاث المستعمل بالرياض ، ومتخصصون في شراء الاثاث المستعمل منذ سنوات من كل العملاء بجميع احياء الرياض ، وهنا</p>
            <p className="para22">شراء الأثاث المستعمل ، ودفع فرق بسيط وهنا توفير للوقت والجهد وتقوم بنقل العفش من والى منزلك ، سواء كان الاثاث القديم او الأثاث الجديد  وتقوم </p>
            <p className="para22">بالاختيار المناسب لك ونسعد بخدمتك و مع تحيات افضل شركة شراء اثاث مستعمل بالرياض .</p>
        </div>
        <br/>
        <br/>
         <div className="btnWhatsap">
          <a  href="https://wa.me/+966530030236" className="ancurBtn"> <button className="btn1" > <FaWhatsapp size={20} />  ....  تواصل معنا عبر الوتساب    </button></a>
        </div>
          <br/>
          <br/>
        <div className="secSlider">
            <div >
                <img src="/public/بوتجاز.jpg" alt="" width={500} />
            </div>
            <div>
              <p>hesham</p>
            </div>

        </div>

        <br/>
        <br/>

        <LeafletMap />
      
      
        <div className="btnWhatsap">
          <a  href="https://wa.me/+966530030236" className="ancurBtn"> <button className="btn1" > <FaWhatsapp size={20} />  ....  تواصل معنا عبر الوتساب    </button></a>
        </div>
    </>
  );
}
