import React from "react";

export default function BannerCard(props) {
  return (
    <div className="banner-card-main-bg shadow absolute md:-bottom-52 left-1/2 lg:w-[700px] md:w-[600px] sm:w-[400px] sm:-bottom-24 md:rounded-xl sm:rounded-3xl backdrop-blur-md">
      <div className="banner-card-main-block p-8 text-center">
        {props.postCategory?.map((category, index) => (
          <h4
            key={index}
            className="md:text-2xl font-bold singlePageCardDescription"
          >
            {category.title}
          </h4>
        ))}
        <p className="md:text-5xl sm:text-xl sm:my-3.5 md:leading-[78px] font-bold md:my-11 singlePageCardDescription">
          {props.postMainTitle}
        </p>
        <div className="banner-card-inner-bottom-block">
          <div className="banner-inner-block-items flex items-center justify-between">
            <div className="flex items-center flex-row">
              <img
                src={props.postAuthorImage}
                className="rounded-full sm:w-4 sm:h-4 md:w-14 md:h-14"
                alt=""
              />
              <p className="cardAuthorName text-lg font-bold ml-4">
                {props.postAuthorName}
              </p>
            </div>
            <h5 className="text-lg font-bold singlePageCardDescription">
              {props.postPublishDate}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
