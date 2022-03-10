import React from "react";
export default function QuickReadsCards() {
  return (
    <div className="quickreadcards-block-items lg:py-10 sm:py-6 border-y-2 border-[#5C5C5C]">
      <div className="quickreadcards-block-items-content flex items-start relative">
        <div className="quickread-image-block w-2/5">
          <img
            className="rounded-xl"
            src="https://picsum.photos/500/239"
            alt="icon"
          />
        </div>
        <div className="quickread-text-block w-3/5 lg:ml-12 sm:ml-8">
          <h4 className="lg:text-base sm:text-sm font-bold text-[#898989] mb-4">
            CATEGORY
          </h4>
          <p className="lg:text-3xl sm:text-xl font-bold quickCardHeading">
            This is number one heading
            <br /> about the topic
          </p>
        </div>
        <div className="absolute right-5 bottom-3 flex items-center flex-row-reverse">
          <img
            src="https://picsum.photos/45/45"
            className="rounded-full sm:w-6 sm:h-6 lg:w-11 lg:h-11"
            alt=""
          />
          <p className="cardAuthorName font-bold sm:text-xs lg:text-base">
            Name
          </p>
        </div>
      </div>
    </div>
  );
}
