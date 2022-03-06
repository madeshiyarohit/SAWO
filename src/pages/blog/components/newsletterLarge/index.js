import React from 'react'

export default function NewsletterLarge() {
  return (
    <section className="newsletter">
    <div className="newsletter-main-bg">
    <div className="p-10 py-12 flex items-center">
      <div className="newsletter-image-section w-2/5">
        <img src='https://picsum.photos/400/400' alt='icon'/>
        </div>
      <div className="newsletter-input-section w-3/5">
      <div className="newsletterLarge-text-section w-full flex items-end flex-col">
        <h3 className="text-6xl font-bold mb-4 newsLargeText">Sign up for our newsletter</h3>
        <p className="text-3xl font-medium mt-11 mb-20 newsLargeText">No spam, unsubscribe anytime,<br/> and always amazing content!</p>
        </div>
        <form class="newsLetterInput flex items-end md:items-center p-3 rounded-xl">
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
    </section>
  )
}
