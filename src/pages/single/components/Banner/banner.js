import React from "react";
import BannerText from "../banner-text/bannertext";
import BannerCard from "../../../../components/banner-card/bannercard";
export default function Banner(props) {
  return (
    <div className="banner-main-bg pt-8">
      <div className="container my-0 mx-auto">
        <div className="banner-main-block">
          <div className="banner-image-block relative">
            <img
              className="rounded-3xl w-full h-[400px] object-cover"
              src={props.postBgImage}
              alt="icon"
            />
            <BannerCard
              postCategory={props.postTechnology}
              postAuthorName={props.authorPostName}
              postMainTitle={props.postTitle}
              postPublishDate={props.publishDate}
              postAuthorImage={props.authorImage}
            />
          </div>
          <BannerText textDescription={props.bannerText} />
        </div>
      </div>
    </div>
  );
}
