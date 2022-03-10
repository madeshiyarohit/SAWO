import React from "react";
import ImageUrlBuilder from "@sanity/image-url";
import SanityClient from "../../client.js";
import { Link } from "react-router-dom";

const builder = ImageUrlBuilder(SanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Card(props) {
  return (
    <Link to={`/single/${props.postLink}`}>
      <div className="card sm:m-5 md:m-7 sm:p-3 md:p-7">
        <img
          src={urlFor(props.mainImage)}
          className="cardImage sm:mb-2.5 md:mb-8"
          alt=""
        />
        <span className="cardCategory sm:text-[10px] font-bold md:text-base">
          {props.postCategory ? (
            props.postCategory.map((category, index) => (
              <span key={index}>{category.title}</span>
            ))
          ) : (
            <span>&nbsp;</span>
          )}
        </span>
        <h3 className="cardHeadline sm:text-xs md:text-3xl font-bold">
          {props.heading}
        </h3>
        <div className="absolute right-5 bottom-3 flex items-center flex-row-reverse">
          <img
            src={urlFor(props.authorIMage)}
            className="rounded-full h-10 w-10 sm:w-13 sm:h-13 md:w-45 md:h-45"
            alt=""
          />
          <p className="cardAuthorName font-bold sm:text-[10px] md:text-[]">
            {props.authorName}
          </p>
        </div>
      </div>
    </Link>
  );
}
