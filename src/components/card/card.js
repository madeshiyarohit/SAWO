import React from "react";
import ImageUrlBuilder from "@sanity/image-url";
import SanityClient from "../../client.js";


const builder = ImageUrlBuilder(SanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Card(props) {
  return (
    <div className="card">
      <img src={urlFor(props.mainImage)} className="cardImage" alt="" />
      <span className="cardCategory">Category</span>
      <h3 className="cardHeadline">
        {props.heading}
      </h3>
      <div className="absolute right-5 bottom-3 flex items-center flex-row-reverse">
        <img
          src={urlFor(props.authorIMage)}
          className="rounded-full h-10 w-10"
          alt=""
        />
        <p className="cardAuthorName">{props.authorName}</p>
      </div>
    </div>
  );
}
