import products from "../../../data/products.json";
import Slider from "react-slick";
import "../../../styles/home.scss";
import { useState } from "react";

export function Shelfs() {
  var settings = {
    arrows: true,
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
          arrows: false,

          className: "center",
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  function getFormattedPrice(price: string | number): string {
    if (!price) {
      return "0";
    }

    price = price || 0;
    price = price.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return `R$ ${price}`;
  }

  return (
    <div className="shelf">
      <h2>As Mais Pedidas</h2>

      <Slider {...settings}>
        {products.map((item, i) => {
          const [activeSku, setActiveSku] = useState(1);

          return (
            <div key={i}>
              <div className="shelf_productContainer">
                <img src={item.image} alt={item.name} />

                <div className="shelf_product">
                  <div className="shelf_productSku">
                    {item.colors.map((color, i) => {
                      return (
                        <div
                          key={i}
                          style={{
                            backgroundColor: `${color.color}`,
                            width: "27px",
                            height: "27px",
                            display: "block",
                          }}
                          className={activeSku === color.id ? "active" : ""}
                          onClick={() => setActiveSku(color.id)}
                        >
                          {" "}
                        </div>
                      );
                    })}
                  </div>

                  <strong>{getFormattedPrice(item.seller)}</strong>

                  <h2>{item.name}</h2>

                  <p>{item.description}</p>

                  <button type="button">Adicionar</button>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
