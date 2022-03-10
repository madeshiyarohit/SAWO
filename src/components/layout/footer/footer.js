import React from "react";
import dischord from "../../../assets/dischord.svg";
export default function Footer() {
  return (
    <div className="footer">
      <div className="py-10 px-[60px] grid grid-cols-4">
        <div className="lg:col-span-1 sm:col-span-2">
          <h2 className="text-3xl font-bold footerHeadlines">
            <span className="sawoLogo">Sawo</span>Lab
          </h2>
          <h3 className="mt-6 font-bold footerHeadlines text-xl">Support</h3>
          <p className="leading-5 w-1/2 pt-2 footerHeadlines">
            To get in touch with us write to us at{" "}
            <span className="text-lg footerHeadlines font-semibold">
              contact@sawolabs.com
            </span>
          </p>
        </div>
        <div className="flex lg:col-span-1 sm:col-span-1 justify-center">
          <div>
            <h2 className="pb-6 footerHeadlines  font-extrabold text-xl">
              Company
            </h2>
            <ul>
              <li className="py-1 footerListText opacity-50">Homepage</li>
              <li className="py-1 footerListText opacity-50">Pricing</li>
              <li className="py-1 footerListText opacity-50">Carrers</li>
              <li className="py-1 footerListText opacity-50">API Status</li>
            </ul>
          </div>
        </div>
        <div className="flex lg:col-span-1 sm:col-span-1">
          <div className="pr-12">
            <h2 className="pb-6 footerHeadlines font-extrabold text-xl">
              Resources
            </h2>
            <ul>
              <li className="py-1 footerListText opacity-50">Contact Us</li>
              <li className="py-1 footerListText opacity-50">Documentation</li>
              <li className="py-1 footerListText opacity-50">
                Product Updates
              </li>
              <li className="py-1 footerListText opacity-50">Community</li>
            </ul>
          </div>
        </div>
        <div className="flex lg:pt-0 sm:pt-11 lg:flex-col lg:justify-start sm:justify-between sm:flex-row lg:col-span-1 sm:col-span-4">
          <div>
            <h2 className="pb-3 footerHeadlines  font-extrabold text-xl">
              Keep Connected
            </h2>
            <div>
              <ul className="flex">
                <li className="mx-3">
                  <img src={dischord} className="h-8 w-8" />
                </li>
                <li className="mx-3">
                  <img src={dischord} className="h-8 w-8" />
                </li>
                <li className="mx-3">
                  <img src={dischord} className="h-8 w-8" />
                </li>
                <li className="mx-3">
                  <img src={dischord} className="h-8 w-8" />
                </li>
                <li className="mx-3">
                  <img src={dischord} className="h-8 w-8" />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="lg:pt-8 sm:pt-0 text-xl footerHeadlines leading-10">
              or subscribe to our newsletters
            </p>
            <div className="pt-8">
              <input
                type="email"
                placeholder="Email address"
                className="p-4 outline-0 border-0 rounded-lg footerInput"
              />
              <button className="bg-[#FCDC60] py-4 px-6 font-bold ml-1 rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-[1px] py-5 mx-[50px] border-[#707070] grid lg:grid-cols-3 sm:grid-cols-2">
        <p className="text-lg leading-2 footerHeadlines font-medium">
          2021 Sawolabs
        </p>
        <div>
          <ul className="flex">
            <li className="pr-6 text-lg leading-2 footerListText lg:text-lg sm:text-sm">
              Terms and Condition
            </li>
            <li className="pr-6 text-lg leading-2 footerListText lg:text-lg sm:text-sm">
              Sitemap
            </li>
            <li className="pr-6 text-lg leading-2 footerListText lg:text-lg sm:text-sm">
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
