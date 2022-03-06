import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../../../components/card/card";
export default function SliderSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "60px",
    slidesToScroll: 1,
  };
  return (
    <section className="topPicks">
      <div className="p-10">
        <h3 className="topPickHeading">Top Picks</h3>
        <div className="slider-block">
          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <Card key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
