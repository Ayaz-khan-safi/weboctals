import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsProps } from "../sliderProps";
import { arrow, rightArrow } from "../svgImg";
const Testimonials = () => {
  return (
    <div className="dodo_tm_section">
      <div className="mers_tm_testimonials">
        <div className="container">
          <div className="mers_tm_title" data-text-align="center">
            <span>What Clients Say</span>
            <h3>Our Testimonials</h3>
          </div>
          <div className="testimonials_inner">
            <div className="avatar">
              <img src="img/testimonials/4.jpg" alt="" />
            </div>
            <div className="testimonials_list">
              <Swiper {...testimonialsProps} className="owl-carousel">
                <SwiperSlide>
                  <div className="text">
                    <p>
                      This template is awesome! Super easy to update in a code
                      editor. All the code is labeled with comments and laid out
                      nicely.The documentation is great and the support via live
                      chat was perfect.Great design with great code quality.
                      Love this template!! Thanks Codeefly.
                    </p>
                  </div>
                  <div className="author">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/1.jpg"
                      />
                    </div>
                    <div className="short">
                      <h3 className="author">
                        <span>Arnold Parker</span>
                      </h3>
                      <h3 className="job">
                        <span>Aroa Founder</span>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text">
                    <p>
                      Wonderful support. Immediate response and they return with
                      an easy fix and clear information. Applied the fix and it
                      worked like a charm. You can definately trust this
                      producer. Satisfied with the product and the quick
                      customer support as well. I can recommend this to anyone!
                    </p>
                  </div>
                  <div className="author">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/2.jpg"
                      />
                    </div>
                    <div className="short">
                      <h3 className="author">
                        <span>Derek Smith</span>
                      </h3>
                      <h3 className="job">
                        <span>Jr. Designer</span>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text">
                    <p>
                      Minimal design, incredibly well documented, and an
                      absolute pleasure to use! The customer support is one of
                      the absolute best {`I've`} ever had the pleasure of
                      interacting with. Quick, courteous, and extremely helpful!
                      Overall a good design, that I am quite happy with
                      purchase.
                    </p>
                  </div>
                  <div className="author">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/3.jpg"
                      />
                    </div>
                    <div className="short">
                      <h3 className="author">
                        <span>Cristino Doe</span>
                      </h3>
                      <h3 className="job">
                        <span>NFT Artist</span>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="my_nav">
                <a className="prev_button testimonial_prev c-pointer">
                  <span dangerouslySetInnerHTML={{ __html: arrow }}></span>
                </a>
                <a className="next_button testimonial_next c-pointer">
                  <span dangerouslySetInnerHTML={{ __html: rightArrow }}></span>
                </a>
              </div>
            </div>
            <span className="quote">
              <img className="svg" src="img/svg/quote.svg" alt="" />
            </span>
          </div>
        </div>
        <div className="background_stroke_text">
          <h3>Testimonials</h3>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
