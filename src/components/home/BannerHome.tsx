import banner from "../../data/banner.json";
import "../../styles/home.scss";

import Slider from "react-slick";

export function BannerHome() {
  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div className="banner_container">
      <Slider {...settings}>
        {banner.map((item, i) => {
          return (
            <div key={i}>
              <div
                className="single_banner"
                style={{
                  backgroundImage: `url(${
                    !isMobile ? item.image : item.imageMobile
                  })`,
                }}
              >
                <div className="single_bannerContainer">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>

                  <a href="" style={{ backgroundColor: `${item.buttonColor}` }}>
                    Conferir
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
