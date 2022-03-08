import React from 'react'

export default function NewsletterLarge() {
  return (
    <section className="newsletter">
    <div className="newsletter-main-bg">
    <div className="p-10 py-12 flex items-center flex-wrap">
      <div className="newsletter-image-section lg:w-2/5 sm:w-full">
        <img src='https://picsum.photos/400/400' className='lg:w-96 lg:h-96 sm:w-64 sm:h-64 sm:my-0 sm:mx-auto lg:my-0 lg:mx-0' alt='icon'/>
        </div>
      <div className="newsletter-input-section lg:w-3/5 sm:w-full">
      <div className="newsletterLarge-text-section w-full flex lg:items-end sm:items-center flex-col">
        <h3 className="lg:text-6xl sm:text-3xl font-bold mb-4 sm:mt-9 lg:mt-0 newsLargeText">Sign up for our newsletter</h3>
        <p className="lg:text-3xl sm:text-2xl lg:text-left sm:text-right font-medium lg:mt-11 lg:mb-20 sm:mt-2.5 sm:mb-8 newsLargeText">No spam, unsubscribe anytime,<br/> and always amazing content!</p>
        </div>
        <form class="newsLetterInput flex md:items-center p-3 rounded-xl">
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
            class="btn md:text-2xl sm:text-xl w-full rounded-sm bg-[#FCDC60] md:rounded-lg sm:rounded-lg h-5 md:h-16 sm:h-full md:w-full font-gilroy font-extrabold text-mid-s md:text-base flex items-center justify-center"
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
    </section>
  )
}
