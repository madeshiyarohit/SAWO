import React from "react";
import BannerText from "../banner-text/bannertext";
import BannerCard from "../../../../components/banner-card/bannercard";
export default function Banner() {
    return (
        <div className="banner-main-bg pt-8">
            <div className="container my-0 mx-auto">
                <div className="banner-main-block">
                    <div className="banner-image-block relative">
                    <img
                        className="rounded-3xl w-full"
                        src="https://picsum.photos/1148/567"
                        alt="image"
                    />
                    <BannerCard/>
                    </div>
                    <BannerText/>
                </div>
            </div>
        </div>
    )
}