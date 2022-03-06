import React from "react";

export default function Featured() {
  return (
    <section className="featured">
      <div className="grid grid-cols-4 p-10 gap-10">
        <div className="col-span-3">
          <div className="featuredLeftBox">
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <img
                  className="rounded-lg object-cover h-full"
                  src="https://picsum.photos/700/450"
                  alt=""
                />
              </div>
              <div className="col-span-1 px-5">
                <span className="featuredCategoryText">Technology</span>
                <h1 className="featuredHeading leading-10">
                  Technology taking over Century blah blah
                </h1>
                <p className="featuredText leading-[24px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s...
                </p>
                <button className="readMoreBtn">
                  Read More
                </button>
                <div className="flex justify-start items-center	">
                  <img
                    className="rounded-full"
                    src="https://picsum.photos/55/55"
                    alt=""
                  />
                  <p className="featuredPersonName">Ayushi Nigam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
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
