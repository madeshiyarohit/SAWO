import React from "react";

export default function Header({ themeChanger }) {
  return (
    <>
      <div className="header">
        <div>
          <div className=" container mx-auto flex w-full items-center  justify-between">
            <div className="inline-flex">Header</div>
            <button
              className="inline-flex button p-2 m-3 border-2"
              onClick={themeChanger}
            >
              Switch To
              {/* {theme === "light" ? "Dark" : "Light"} */}
            </button>
            <button>
              <div className="toggleable hover:bg-gray-800">
                <input
                  type="checkbox"
                  value="selected"
                  id="toggle-one"
                  className="toggle-input"
                />
                <label
                  htmlFor="toggle-one"
                  className="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold"
                >
                  Menu
                </label>
                <div
                  role="toggle"
                  className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-[#F7F7F7]"
                >
                  <div className="mx-auto w-full flex flex-wrap justify-between">
                    <ul className="px-4 w-1/2 sm:w-1/2 lg:w-1/2  pb-6 pt-6 lg:pt-3">
                      <h3 className="font-bold text-xl p-3 text-[#707070] text-bold mb-2">
                        Channels
                      </h3>
                      <li className="flex py-2 items-center">
                        <img
                          src="https://picsum.photos/50/50"
                          alt=""
                          className="rounded-lg h-12 w-12"
                        />
                        <a
                          href="#"
                          className="block p-3 text-[#707070] font-bold text-3xl "
                        >
                          Heading 1
                        </a>
                      </li>
                      <li className="flex py-2 items-center">
                        <img
                          src="https://picsum.photos/50/50"
                          alt=""
                          className="rounded-lg h-12 w-12"
                        />
                        <a
                          href="#"
                          className="block p-3  text-[#707070] font-bold text-3xl "
                        >
                          Heading 2
                        </a>
                      </li>
                      <li className="flex py-2 items-center">
                        <img
                          src="https://picsum.photos/50/50"
                          alt=""
                          className="rounded-lg h-12 w-12"
                        />
                        <a
                          href="#"
                          className="block p-3  text-[#707070] font-bold text-3xl "
                        >
                          Heading 3
                        </a>
                      </li>
                      <li className="flex py-2 items-center">
                        <img
                          src="https://picsum.photos/50/50"
                          alt=""
                          className="rounded-lg h-12 w-12"
                        />
                        <a
                          href="#"
                          className="block p-3  text-[#707070] font-bold text-3xl "
                        >
                          Heading 4
                        </a>
                      </li>
                    </ul>

                    <ul className="px-4 w-1/2 sm:w-1/2 lg:w-1/2  pb-6 p-3 pt-6 lg:pt-3 flex">
                      <ul className="pr-40">
                        <li className="font-bold text-[#707070] pb-8 text-lg">
                          Quick Links
                        </li>
                        <li className="py-3 text-black font-bold">
                          <a href="/">Homepage</a>
                        </li>
                        <li className="py-3 text-black font-bold">
                          <a href="/">Documentation</a>
                        </li>
                        <li className="py-3 text-black font-bold">
                          <a href="/">Product Updates</a>
                        </li>
                        <li className="py-3 text-black font-bold">
                          <a href="/">Community</a>
                        </li>
                        <li className="py-3 text-black font-bold">
                          <a href="/">About Us</a>
                        </li>
                      </ul>

                      <div>
                        <ul className="pb-10">
                          <li className="text-sm text-[#707070] font-bold pb-5">
                            Newsletter
                          </li>
                          <li>
                            <a href="/" className="font-bold text-black">
                              Heading1
                            </a>
                          </li>
                          <li>
                            <a href="/" className="font-bold text-black">
                              Heading2
                            </a>
                          </li>
                          <li>
                            <a href="/" className="font-bold text-black">
                              Heading3
                            </a>
                          </li>
                        </ul>
                        <ul className="pb-10">
                          <li className="text-sm text-[#707070] font-bold pb-5">
                            Poscast
                          </li>
                          <li>
                            <a href="/" className="font-bold text-black">
                              Heading1
                            </a>
                          </li>
                          <li>
                            <a href="/" className="font-bold text-black">
                              Heading2
                            </a>
                          </li>
                          <li>
                            <a href="/" className="font-bold text-black">
                              Heading3
                            </a>
                          </li>
                        </ul>
                        <div>
                          <h2 className="pb-3 font-bold text-[#707070]">
                            Follow US
                          </h2>
                          <ul className="flex">
                            <li className="pr-3">
                              <a href="/" className="pr-6">
                                <img
                                  src="https://picsum.photos/50/50"
                                  className="rounded-lg"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li className="pr-3">
                              <a href="/" className="pr-6">
                                <img
                                  src="https://picsum.photos/50/50"
                                  className="rounded-lg"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li className="pr-3">
                              <a href="/" className="pr-6">
                                <img
                                  src="https://picsum.photos/50/50"
                                  className="rounded-lg"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li className="pr-3">
                              <a href="/" className="pr-6">
                                <img
                                  src="https://picsum.photos/50/50"
                                  className="rounded-lg"
                                  alt=""
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
