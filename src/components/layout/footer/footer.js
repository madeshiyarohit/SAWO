import React from "react";

export default function Footer() {
  return (
    <div className="footer bg-[#E7EAED]">
      <div className="py-10 px-[60px] grid grid-cols-3">
        <div>
          <h2 className="text-[30px] font-bold">SAWOLAB</h2>
          <h3 className="mt-6 font-bold text-[#5C5C5C] text-[20px]">Support</h3>
          <p className="leading-5 w-1/2 pt-2">
            To get in touch with us write to us at{" "}
            <span className="text-[18px] text-[#5C5C5C] font-semibold">
              contact@sawolabs.com
            </span>
          </p>
        </div>
        <div className="flex">
          <div className="pl-6">
            <h2 className="pb-6 text-[#5C5C5C]  font-extrabold text-xl">
              Company
            </h2>
            <ul>
              <li className="py-1 text-[#0000000] opacity-50">Homepage</li>
              <li className="py-1 text-[#0000000] opacity-50">Pricing</li>
              <li className="py-1 text-[#0000000] opacity-50">Carrers</li>
              <li className="py-1 text-[#0000000] opacity-50">API Status</li>
            </ul>
          </div>
          <div className="px-12">
            <h2 className="pb-6 text-[#5C5C5C] font-extrabold text-xl">
              Resources
            </h2>
            <ul>
              <li className="py-1 text-[#0000000] opacity-50">Contact Us</li>
              <li className="py-1 text-[#0000000] opacity-50">Documentation</li>
              <li className="py-1 text-[#0000000] opacity-50">
                Product Updates
              </li>
              <li className="py-1 text-[#0000000] opacity-50">Community</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="pb-3 text-[#5C5C5C]  font-extrabold text-xl">
            Keep Connected
          </h2>
          <div>Social Icons Come Here !!!</div>
          <p className="pt-8 text-[20px] text-[#5c5c5c] leading-10">
            or subscribe to our newsletters
          </p>
          <div className="pt-8">
            <input
              type="email"
              placeholder="Email address"
              className="p-4 outline-0 border-0 rounded-lg"
            />
            <button className="bg-[#FCDC60] py-4 px-6 font-bold ml-1 rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="border-t-[1px] py-5 mx-[50px] border-[#707070] grid grid-cols-3">
        <p className="text-[18px] leading-2 text-[#5c5c5c] font-medium">2021 Sawolabs</p>
        <div>
          <ul className="flex">
            <li className="pr-6 text-[18px] leading-2 text-[#5c5c5c] font-normal">Terms and Condition</li>
            <li className="pr-6 text-[18px] leading-2 text-[#5c5c5c] font-normal">Sitemap</li>
            <li className="pr-6 text-[18px] leading-2 text-[#5c5c5c] font-normal">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}