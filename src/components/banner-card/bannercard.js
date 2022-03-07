import React from "react";
export default function BannerCard() {
    return (
        <div className="banner-card-main-bg shadow absolute -bottom-60 left-1/2 max-w-2xl rounded-xl backdrop-blur-md">
            <div className="banner-card-main-block p-8 text-center">
                <h4 className="text-2xl font-bold">TECHNOLOGY</h4>
                <p className="text-5xl leading-[78px] font-bold my-11">Technology taking over century blah blah</p>
                <div className="banner-card-inner-bottom-block">
                    <div className="banner-inner-block-items flex items-center justify-between">
                        <div className="flex items-center flex-row">
                            <img
                                src="https://picsum.photos/59/59"
                                className="rounded-full"
                                alt=""
                            />
                            <p className="cardAuthorName text-lg font-bold ml-4">Name</p>
                        </div>
                        <h5 className="text-lg font-bold">30 Nov 2021</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}