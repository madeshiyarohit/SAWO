import React from "react";

export default function ExploreMore() {
  return (
    <div>
      <section className="exploreMore py-20">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="exploreMoreText lg:text-7xl sm:text-5xl font-black">Want to explore more?</h2>
          <h4 className="lg:text-4xl sm:text-xl lg:mt-14 lg:mb-14 sm:my-6 font-bold exploreMoreText">
            Sign up for a <span className="font-black">SAWO</span> account & see
            our platform in action.
          </h4>
          <div className="exploreMore-btn">
            <button
              type="button"
              className="exploreMoreButton bg-[#FCDC60] p-4 lg:w-80 sm:w-52 lg:text-4xl sm:text-2xl lg:rounded-lg sm:rounded-xl font-bold"
            >
              Sign Up
            </button>
          </div>
        </div>
        
      </section>
    </div>
  );
}
