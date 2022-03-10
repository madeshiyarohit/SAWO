import React from "react";
import SingleButton from "../../../../components/button/button";
export default function Review() {
    return (
        <div className="review-main-bg md:pt-20 sm:py-9 md:pb-24">
            <div className="container mx-auto my-0 ">
                <div className="review-main-block">
                    <div className="review-block-items">
                        <div className="image-with-text-block flex items-center">
                            <img
                                src="https://picsum.photos/148/148"
                                className="rounded-full md:w-36 md:h-36 sm:w-20 sm:h-20"
                                alt="image" />
                            <div className="review-text-block md:ml-12 sm:ml-6">
                                <h4 className="font-bold sm:text-sm md:text-3xl md:mb-5 singlePageNewsLetter">Ayushi Nigam</h4>
                                <p className="font-bold sm:text-sm md:text-2xl text-[#707070]">@lets.talk.product</p>
                            </div>
                        </div>
                        <div className="review-button-block md:mt-16 sm:mt-12">
                            <SingleButton/>
                            <SingleButton/>
                            <SingleButton/>
                            <SingleButton/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}