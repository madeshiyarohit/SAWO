import React from "react";
import SingleButton from "../../../../components/button/button";
export default function Review() {
    return (
        <div className="review-main-bg pt-20 pb-24">
            <div className="container mx-auto my-0 ">
                <div className="review-main-block">
                    <div className="review-block-items">
                        <div className="image-with-text-block flex items-center">
                            <img
                                src="https://picsum.photos/148/148"
                                className="rounded-full"
                                alt="icon" />
                            <div className="review-text-block ml-12">
                                <h4 className="font-bold text-3xl mb-5 singlePageNewsLetter">Ayushi Nigam</h4>
                                <p className="font-bold text-2xl text-[#707070]">@lets.talk.product</p>
                            </div>
                        </div>
                        <div className="review-button-block mt-16">
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