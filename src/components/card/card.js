import React from "react";
import ImageUrlBuilder from "@sanity/image-url";
import SanityClient from "../../client.js";


const builder = ImageUrlBuilder(SanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Card(props) {
  return (
    <div className="card sm:m-5 md:m-7 sm:p-3 md:p-7">
      <img src="https://picsum.photos/410/290" className="cardImage sm:mb-2.5 md:mb-8" alt="" />
      <span className="cardCategory sm:text-[10px] font-bold md:text-base">CATEGORY</span>
      <h3 className="cardHeadline sm:text-xs md:text-3xl font-bold">
        This is number one heading about the topic
      </h3>
      <div className="absolute right-5 bottom-3 flex items-center flex-row-reverse">
        <img
          src="https://picsum.photos/45/45"
          className="rounded-full sm:w-13 sm:h-13 md:w-45 md:h-45"
          alt=""
        />
        <p className="cardAuthorName font-bold sm:text-[10px] md:text-[]">Name</p>
      </div>
    </div>
  );
}
