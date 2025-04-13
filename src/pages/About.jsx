import React from 'react'

const About = () => {
  return (
    <section className="section-why--choose flex flex-col gap-23 items-end my-[150px]  ">
      <div className="container">
        <h2 className="font-bold text-2xl">Why Choose Thapa Store</h2>
        <p className="section-common--subheading text-lg">
          Choose Thapa EduHub for a holistic, enriching learning experience that
          empowers you to achieve your goals.
        </p>
      </div>

      <div className="container grid  grid-cols-1 md:grid-cols-3 gap-8 items-center ">
        <div className="choose-left-div text-align-right items-end space-y-15">
          <div className="why-choose--div mb-8 flex flex-col  " data-aos="zoom-in-up" data-aos-delay="0">
            <p className="common-text w-10 rounded-full py-2 text-center text-white items-center bg-blue-400">1</p>
            <h3 className="section-common--title my-2">Wide Selection</h3>
            <p>
              Thapa Store offers a diverse range of gadgets, from smartphones to
              smart home devices, ensuring you find what you need to elevate
              your lifestyle and meet your tech requirements.
            </p>
          </div>

          <div
            className="why-choose--div grid-cols-3 "
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            <p className="common-text w-10 rounded-full py-2 text-center text-white items-center bg-blue-400">2</p>
            <h3 className="section-common--title my-2">Quality Assurance</h3>
            <p>
              Every gadget at Thapa Store undergoes rigorous quality checks,
              guaranteeing reliability and performance, so you can shop with
              confidence knowing you're getting the best.
            </p>
          </div>

          <div
            className="why-choose--div"
            data-aos="zoom-in-up"
            data-aos-delay="600"
          >
            <p className="common-text w-10 rounded-full py-2 text-center text-white items-center bg-blue-400">3</p>
            <h3 className="section-common--title my-2">Competitive Prices</h3>
            <p>
              Enjoy great value with Thapa Store's competitive prices on
              high-quality gadgets, making top-of-the-line technology accessible
              to all without compromising on quality or performance.
            </p>
          </div>
        </div>
        <div className="choose-center-div  " data-aos="zoom-in" data-aos-delay="300">
          <figure className=' flex-flex-col items-start md:flex-row justify-center md:items-center transform-origin-center '>
            <img src="./images/ecompost.png" alt="thapa technical home page " className='w-[90%] h-auto ' />
          </figure>
        </div>
        <div className="choose-right-div flex-col space-y-15">
          <div
            className="why-choose--div text-align--left"
            data-aos="zoom-in-up"
            data-aos-delay="0"
          >
            <p className="common-text w-10 rounded-full py-2 text-center text-white items-center bg-blue-400">4</p>
            <h3 className="section-common--title my-2">Expert Guidance</h3>
            <p>
              Our knowledgeable staff provides expert guidance, helping you
              choose the right gadget to meet your needs and preferences,
              ensuring you make informed decisions every step of the way.
            </p>
          </div>

          <div
            className="why-choose--div text-align--left"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            <p className="common-text w-10 rounded-full py-2 text-center text-white items-center bg-blue-400">5</p>
            <h3 className="section-common--title my-2">Convenient Shopping</h3>
            <p>
              With Thapa Store, shopping for gadgets is easy and convenient. Our
              user-friendly website and secure payment options ensure a seamless
              experience from browsing to checkout, all from the comfort of your
              home.
            </p>
          </div>

          <div
            className="why-choose--div text-align--left"
            data-aos="zoom-in-up"
            data-aos-delay="600"
          >
            <p className="common-text w-10 rounded-full py-2 text-center text-white items-center bg-blue-400">6</p>
            <h3 className="section-common--title my-2">Excellent Service</h3>
            <p>
              Thapa Store is committed to providing excellent service to our
              customers. From prompt assistance with inquiries to efficient
              handling of orders and deliveries, we prioritize your satisfaction
              every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About