import React from "react";

export default function ExploreMore() {
  return (
    <div>
      <section className="exploreMore py-20">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-7xl font-black">Want to explore more?</h2>
          <h4 className="text-4xl mt-14 mb-14 font-bold">
            Sign up for a <span className="font-black">SAWO</span> account & see
            our platform in action.
          </h4>
          <div className="exploreMore-btn">
            <button
              type="button"
              className="exploreMoreButton bg-[#FCDC60] p-4 w-80 text-4xl rounded-lg font-bold"
            >
              Sign Up
            </button>
          </div>
        </div>
        
      </section>
    </div>
  );
}
