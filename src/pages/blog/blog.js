import React from "react";
import Featured from "./components/featured/featured";
import SliderSection from "./components/sliderSection/index";
import ExploreMore from "./components/exploreMore";
import NewsletterSmall from "./components/newsletterSmall";
import NewsletterLarge from "./components/newsletterLarge";
import QuickReads from "./components/quickReads";
export default function Blog() {
  return (
    <div>
      <Featured />
      <SliderSection />
      <NewsletterLarge/>
      <QuickReads/>
      <SliderSection />
      <SliderSection />
      <SliderSection />
      <NewsletterSmall/>
      <QuickReads/>
      <SliderSection />
      <ExploreMore/>
    </div>
  );
}
