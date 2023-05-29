import Link from "next/link";
import Slider from "react-slick";

const CarSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
    ],
  };

  const partnerLogos = [
    "/images/logo/Plogo-23.png",
    "/images/logo/Plogo-24.png",
    "/images/logo/Plogo-25.png",
    "/images/logo/Plogo-26.png",
    "/images/logo/Plogo-27.png",
    "/images/logo/Plogo-24.png",
    "/images/logo/Plogo-26.png",
  ];

  return (
    <Slider {...settings} arrows={false} className="mt-140">
      {partnerLogos.map((logo, index) => (
        <Link href={'#'} className="item" key={index}>
          <img src={logo} alt="" className="m-auto" id="slide-image"/>
          <label htmlFor="slide-image">hello</label>
        </Link>
      ))}
    </Slider>
  );
};

export default CarSlider;
