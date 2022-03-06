import React from "react";

export default function NewsletterSmall() {
  return (
    <div className="newsletter-main-bg bg-[#E7EAED]">
    <div className="p-10 py-12 flex items-center">
      <div className="newsletter-text-section text-[#5C5C5C] w-1/2">
        <h3 className="text-5xl font-bold mb-4">Sign up for our newsletter</h3>
        <p className="text-3xl font-medium">No spam, unsubscribe anytime,<br/> and always amazing content!</p>
        </div>
      <div className="newsletter-input-section w-1/2">
        <form class="flex items-end md:items-center bg-white p-3 rounded-xl">
          <label className="w-9/12">
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded-xl outline-0 h-16 placeholder:font-bold"
              placeholder="Enter your Email address"
              required=""
              value=""
            />
          </label>
          <div className="newsletter-btn-section w-3/12">
          <button
            type="submit"
            class="btn text-2xl w-full rounded-sm bg-[#FCDC60] md:rounded-lg h-5 md:h-16 md:w-full font-gilroy font-extrabold text-mid-s md:text-base flex items-center justify-center"
            id="ga-newsletter"
            name="Subscribe to Newsletter"
            >
            Subscribe
          </button>
            </div>
        </form>
      </div>
    </div>
    </div>
  );
}
