import React from "react";

export default function Featured() {
  return (
    <section className="featured">
      <div className="grid grid-cols-4 p-10 gap-10">
        <div className="lg:col-span-3 feature-left-block sm:col-span-4 relative">
          <div className="featuredLeftBox">
            <div className="grid grid-cols-2">
              <div className="lg:col-span-1 sm:col-span-2">
                <img
                  className="rounded-lg object-cover h-full w-full"
                  src="https://picsum.photos/700/450"
                  alt=""
                />
              </div>
              <div className="lg:col-span-1 sm:col-span-2 lg:px-5 sm:px-0">
                <div className="feature-category-heading-block sm:text-right lg:text-left sm:mt-5 lg:mt-0"><span className="featuredCategoryText lg:text-base sm:text-lg font-bold">TECHNOLOGY</span></div>
                <h1 className="featuredHeading lg:text-3xl sm:text-4xl leading-10">
                  Technology taking over Century blah blah
                </h1>
                <p className="featuredText leading-[24px] lg:text-xl sm:text-lg">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s...
                </p>
                <button className="readMoreBtn font-bold lg:text-xl sm:text-lg">
                  READ MORE
                </button>
                <div className="flex justify-start items-center	">
                  <img
                    className="rounded-full"
                    src="https://picsum.photos/55/55"
                    alt=""
                  />
                  <p className="featuredPersonName font-bold">Ayushi Nigam</p>
                </div>
              </div>
            </div>
          </div>
          <div className="featured-tag bg-[#FCDC60] absolute lg:top-0 lg:bottom-auto lg:right-0 sm:bottom-0 sm:right-0 p-3 lg:rounded-tr-2xl lg:rounded-bl-2xl lg:rounded-tl-none lg:rounded-br-none sm:rounded-tl-2xl sm:rounded-br-2xl font-bold font-3xl">
            Featured
          </div>
        </div>
        <div className="col-span-1 feature-right-block lg:block sm:hidden">
          <div className="featuredRightBox ">
            <h2 className="category">
              Categories
            </h2>
            <ul>
              <li>
                <div className="categoryItems">
                  <span>
                    <i className="fa-solid fa-4"></i>
                  </span>
                  Developers
                </div>
              </li>
              <li>
                <div className="categoryItems">
                  <span></span> Founders
                </div>
              </li>
              <li>
                <div className="categoryItems">
                  <span></span> Competitors Blog
                </div>
              </li>
              <li>
                <div className="categoryItems">
                  <span></span> Integration
                </div>
              </li>
              <li>
                <div className="categoryItems">
                  <span></span> Marketing Community
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
