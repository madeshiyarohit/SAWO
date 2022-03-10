import React from "react";
import BlockContent from "@sanity/block-content-to-react";

export default function BannerText(props) {
  return (
    <div className="banner-text-main-block">
      <p className="singlePostDescription md:leading-[60px] md:mt-72 md:pb-24 md:text-3xl sm:text-xl sm:mt-52 sm:mb-4 text-center font-semibold">
        <BlockContent
          blocks={props.textDescription}
          projectId="vgibnbx4"
          dataset="production"
        />
      </p>
    </div>
  );
}
