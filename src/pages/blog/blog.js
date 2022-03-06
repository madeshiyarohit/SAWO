import React from "react";
import Featured from "./components/featured/featured";
import SliderSection from "./components/sliderSection/index";
import ExploreMore from "./components/exploreMore";
import NewsletterSmall from "./components/newsletterSmall";
export default function Blog() {
  return (
    <div>
      <Featured />
      <SliderSection />
      <section className="newsletter">featured</section>
      <section className="quickReads">featured</section>
      <SliderSection />
      <SliderSection />
      <SliderSection />
      <NewsletterSmall/>
      <section className="founders">featured</section>
      <ExploreMore/>
    </div>
  );
}
