import React from "react";

export default function NewsletterSmall() {
  return (
    <div className="newsletter-main-bg">
    <div className="p-10 py-12 flex items-center flex-wrap">
      <div className="newsletter-text-section md:w-1/2 sm:w-full">
        <h3 className="md:text-5xl sm:text-4xl font-bold mb-4">Sign up for our newsletter</h3>
        <p className="md:text-3xl sm:text-2xl font-medium">No spam, unsubscribe anytime,<br/> and always amazing content!</p>
        </div>
      <div className="newsletter-input-section md:w-1/2 sm:w-full sm:mt-8 md:mt-0">
        <form className="newsLetterInput flex md:items-center p-3 rounded-xl">
          <label className="w-9/12">
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded-xl outline-0 h-16 placeholder:font-bold newsLetterInput"
              placeholder="Enter your Email address"
              required=""
              value=""
            />
          </label>
          <div className="newsletter-btn-section w-3/12">
          <button
            type="submit"
            className="btn md:text-2xl sm:text-xl w-full rounded-sm bg-[#FCDC60] md:rounded-lg sm:rounded-lg h-5 md:h-16 sm:h-full md:w-full font-gilroy font-extrabold text-mid-s md:text-base flex items-center justify-center"
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
