import React, { useState, useEffect } from "react";
import SliderSection from "../blog/components/sliderSection/index";
import NewsletterSmall from "../blog/components/newsletterSmall";
import Banner from "./components/Banner/banner";
import Review from "./components/review/review";
import SanityClient from "../../client.js";
import { useParams } from "react-router-dom";
import ImageUrlBuilder from "@sanity/image-url";

const builder = ImageUrlBuilder(SanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Single() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    SanityClient.fetch(
      `*[slug.current=="${slug}"]{
            mainImage{
                asset{
                _ref,
                  }
                },
            "categoryName": categories[] -> {
                 title,
              },
            title,
            "name" : author->name,
            slug,
            body,
            publishedAt,
            "authorTag" : author->tags, 
            "authorImage" : author->image
            }`
    )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);



  useEffect(() => {
    SanityClient.fetch(
      `*[_type=="post"]{
           
            }`
    )
      .then((data) => console.log(data))
      .catch(console.error);
  });

  if (!postData) return <div>Loading...</div>;

  return (
    <div>
      <Banner
        postTechnology={postData?.categoryName}
        authorPostName={postData?.name}
        authorImage={urlFor(postData.authorImage).url()}
        postTitle={postData?.title}
        bannerText={postData?.body}
        postBgImage={urlFor(postData?.mainImage?.asset?._ref)}
        publishDate={postData?.publishedAt}
      />
      <Review
        authorPostName={postData?.name}
        authorImage={urlFor(postData?.authorImage).url()}
        authorPostTag={postData?.authorTag}
      />
      <div className="pt-12 singlePageGap"></div>
      <NewsletterSmall />
      <SliderSection />
    </div>
  );
}
