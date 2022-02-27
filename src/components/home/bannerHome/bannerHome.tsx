import banner from "../../../data/banner.json";
import "../../../styles/home.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export function BannerHome() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider>
        {banner.map((item, i) => {
          return (
            <div
              className="single_banner"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="single_bannerContainer">
                <h2>{item.title}</h2>
                <p>{item.text}</p>

                <a href="" style={{ backgroundColor: `${item.buttonColor}` }}>
                  Conferir
                </a>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
