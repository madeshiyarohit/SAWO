import React from "react";

export default function Featured() {
  return (
    <section className="featured">
      <div className="grid grid-cols-4 p-10 gap-10">
        <div className="col-span-3">
          <div className="rounded-2xl overflow-hidden shadow-xl p-6 bg-white">
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <img
                  className="rounded-lg object-cover h-full"
                  src="https://picsum.photos/700/450"
                  alt=""
                />
              </div>
              <div className="col-span-1 px-5">
                <span className="text-[16px]">Technology</span>
                <h1 className="text-3xl leading-11 mt-5 mb-6 font-semibold">
                  Technology taking over Century blah blah
                </h1>
                <p className="text-ellipsis overflow-hidden text-[20px] leading-[24px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s...
                </p>
                <button className="text-xl leading-6 mb-10 mt-5 text-[#2769A2]">
                  Read More
                </button>
                <div className="flex justify-start items-center	">
                  <img
                    className="rounded-full"
                    src="https://picsum.photos/55/55"
                    alt=""
                  />
                  <p className="ml-4">Ayushi Nigam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="rounded-2xl overflow-hidden shadow-sm p-6 bg-white h-full">
            <h2 className="text-3xl mb-10 leading-16 text-[#898989] font-semibold">
              Categories
            </h2>
            <ul>
              <li>
                <div className="text-xl mt-4 mb-4">
                  <span>
                    <i class="fa-solid fa-4"></i>
                  </span>
                  Developers
                </div>
              </li>
              <li>
                <div className="text-xl mt-4 mb-4">
                  <span></span> Founders
                </div>
              </li>
              <li>
                <div className="text-xl mt-4 mb-4">
                  <span></span> Competitors Blog
                </div>
              </li>
              <li>
                <div className="text-xl mt-4 mb-4">
                  <span></span> Integration
                </div>
              </li>
              <li>
                <div className="text-xl mt-4 mb-4">
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
