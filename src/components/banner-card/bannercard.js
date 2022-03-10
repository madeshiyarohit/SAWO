import React from "react";
export default function BannerCard() {
    return (
        <div className="banner-card-main-bg shadow absolute md:-bottom-52 left-1/2 lg:w-[700px] md:w-[600px] sm:w-[400px] sm:-bottom-24 md:rounded-xl sm:rounded-3xl backdrop-blur-md">
            <div className="banner-card-main-block p-8 text-center">
                <h4 className="md:text-2xl font-bold singlePageCardDescription">TECHNOLOGY</h4>
                <p className="md:text-5xl sm:text-xl sm:my-3.5 md:leading-[78px] font-bold md:my-11 singlePageCardDescription">Technology taking over century blah blah</p>
                <div className="banner-card-inner-bottom-block">
                    <div className="banner-inner-block-items flex items-center justify-between">
                        <div className="flex items-center flex-row">
                            <img
                                src="https://picsum.photos/59/59"
                                className="rounded-full sm:w-4 sm:h-4 md:w-14 md:h-14"
                                alt=""
                            />
                            <p className="cardAuthorName text-lg font-bold ml-4">Name</p>
                        </div>
                        <h5 className="text-lg font-bold singlePageCardDescription">30 Nov 2021</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}