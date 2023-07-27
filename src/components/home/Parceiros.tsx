import parceiros from '../../data/parceiros.json'
import Slider from 'react-slick'
import '../../styles/home.scss'

export function Parceiros() {
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
  }

  return (
    <>
      <div className='parceiros_container'>
        <h2>Marcas Parceiras</h2>
        <Slider {...settings}>
          {parceiros.map((item, i) => {
            return (
              <div key={i}>
                <div className='parceiros_singleContainer'>
                  <img src={item.image} alt={item.text} />
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )
}
