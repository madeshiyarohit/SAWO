import React from "react";
import SliderSection from "../blog/components/sliderSection/index";
import NewsletterSmall from "../blog/components/newsletterSmall";
import Banner from "./components/Banner/banner";
import Review from "./components/review/review";
export default function Single() {
    return(
        <div>
            <Banner/>
            <Review/>
            <NewsletterSmall/>
            <SliderSection/>
        </div>
    )
}