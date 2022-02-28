import Slider from "react-slick";
import sellers from "../../data/sellers.json";
import "../../styles/home.scss";

export function Sellers() {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="sellers_container">
        <h2>Por que comprar na Maeztra?</h2>
        <Slider {...settings}>
          {sellers.map((item, i) => {
            return (
              <div key={i}>
                <div className="sellers_singleContainer">
                  <img src={item.icon} alt={item.text} />
                  <div className="sellers">
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
