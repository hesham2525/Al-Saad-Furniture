import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/public/نوم.jpg",
  "/public/خزانات ملابس.jpg",
  "/public/خزانات.jpg",
  "/public/نوم2.jpg",
  "/public/نوم4.jpg",
  "/public/خزانات2.jpg",
  "/public/خزانات3.jpg",
  "/public/نوم5.jpg",
  "/public/نوم6.jpg",
  "/public/خزانات7.jpg",
  "/public/نووم3.jpg",
];

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:1500,
  };

  return (
    <Slider {...settings} style={{ width: "500px", margin: "auto", borderRadius: "50px" ,}}>
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} alt={`Slide ${index}`} width="100%" height="300px" />
        </div>
      ))}
    </Slider>
  );
}

export default ImageSlider;
