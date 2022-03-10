import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../../../components/card/card";
import SanityClient from "../../../../client.js";

export default function SliderSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "60px",
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  const [postData, setPostData] = useState(null);
  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "post"]{
        mainImage{
          asset{
            _ref
          }
        },
        slug,
        title,
         "categoryName": categories[] -> {
          title,
  },
        "name" : author->name,
      "authorImage" : author->image
    }`
    ).then((data) => setPostData(data));
  }, []);

  return (
    <section className="topPicks">
      <div className="p-10">
        <h3 className="topPickHeading sm:text-3xl md:text-5xl">Top Picks</h3>
        <div className="slider-block">
          {
            <Slider {...settings}>
              {postData &&
                postData.map((post, index) => (
                  <Card
                    key={index}
                    mainImage={post?.mainImage?.asset?._ref}
                    heading={post?.title}
                    authorName={post?.name}
                    authorIMage={post?.authorImage.asset._ref}
                    postCategory={post?.categoryName}
                    postLink={post?.slug.current}
                  />
                ))}
            </Slider>
          }
        </div>
      </div>
    </section>
  );
}
