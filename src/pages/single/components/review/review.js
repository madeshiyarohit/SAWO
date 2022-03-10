import React from "react";
export default function Review(props) {
  return (
    <div className="review-main-bg md:pt-20 sm:py-9 md:pb-24">
      <div className="container mx-auto my-0 ">
        <div className="review-main-block">
          <div className="review-block-items">
            <div className="image-with-text-block flex items-center">
              <img
                src={props.authorImage}
                className="rounded-full md:w-36 md:h-36 sm:w-20 sm:h-20"
                alt="author"
              />
              <div className="review-text-block md:ml-12 sm:ml-6">
                <h4 className="font-bold sm:text-sm md:text-3xl md:mb-5 singlePageNewsLetter">
                  {props.authorPostName}
                </h4>
                <p className="font-bold sm:text-sm md:text-2xl text-[#707070]">
                  @lets.talk.product
                </p>
              </div>
            </div>
            <div className="review-button-block md:mt-16 sm:mt-12">
              {props.authorPostTag?.map((tagElement, index) => (
                <button
                  type="button"
                  key={index}
                  className="md:w-52 font-bold text-[#707070] md:text-2xl sm:text-sm md:py-4 sm:py-1.5 sm:px-4 md:border-4 sm:border-2 border-[#707070] rounded-full md:mx-3 sm:mx-1.5"
                >
                  {tagElement}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
