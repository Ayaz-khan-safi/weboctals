import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogProps } from "../sliderProps";
import { arrow, rightArrow } from "../svgImg";
import BlogPopup from "./popup/BlogPopup";
const News = () => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState({ img: "", title: "", date: "" });
  const { img, title, date } = data;

  const newsData = [
    {
      img: "/img/news/1.jpg",
      title: "Developers watch out for these burnout symptoms",
      date: "08 May, 2022",
    },
    {
      img: "/img/news/2.jpg",
      title: "How to be appreciated for your work as a developer",
      date: " 22 April, 2022",
    },
    {
      img: "/img/news/3.jpg",
      title: "How designers and developers can collaborate better",
      date: " 15 March, 2024",
    },
  ];

  const onClick = (e, newsDataNumber) => {
    e.preventDefault();
    setActive(true);
    setData(newsData[newsDataNumber - 1]);
  };

  return (
    <Fragment>
      {active && (
        <BlogPopup
          close={() => setActive(false)}
          img={img}
          title={title}
          date={date}
        />
      )}
      <div className="mers_tm_section" id="news">
        <div className="mers_tm_news">
          <div className="container">
            <div className="mers_tm_title" data-text-align="left">
              <div className="text">
                <span>Our Blog</span>
                <h3>Latest News</h3>
              </div>
              <div className="navs">
                <a className="my_nav c-pointer blog_right  prev_button">
                  <span dangerouslySetInnerHTML={{ __html: rightArrow }}></span>
                </a>
                <a className="my_nav c-pointer  blog_left next_button">
                  <span dangerouslySetInnerHTML={{ __html: arrow }}></span>
                </a>
              </div>
            </div>
            <div className="news_list">
              <Swiper {...blogProps} className="owl-carousel">
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-25.jpg" alt="" />
                      <div className="main" data-img-url="img/news/1.jpg" />
                      <a
                        className="mers_tm_full_link"
                        href="#"
                        onClick={(e) => onClick(e, 1)}
                      />
                    </div>
                    <div className="details">
                      <div className="metabox">
                        <span>
                          <img className="svg" src="img/svg/user.svg" alt="" />
                          <a
                            className="animation_link"
                            href="#"
                            onClick={(e) => onClick(e, 1)}
                          >
                            Codeefly
                          </a>
                        </span>
                        <span>
                          <img
                            className="svg"
                            src="img/svg/comment.svg"
                            alt=""
                          />
                          08 May, 2022
                        </span>
                      </div>
                      <div className="title">
                        <h3>
                          <a href="#" onClick={(e) => onClick(e, 1)}>
                            Developers watch out for these burnout symptoms
                          </a>
                        </h3>
                      </div>
                      <a href="#" onClick={(e) => onClick(e, 1)}>
                        <span
                          className="arrow_icon"
                          dangerouslySetInnerHTML={{ __html: arrow }}
                        ></span>
                      </a>
                    </div>
                    {/* Modalbox Info Start */}

                    {/* /Modalbox Info End */}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-25.jpg" alt="" />
                      <div className="main" data-img-url="img/news/2.jpg" />
                      <a
                        className="mers_tm_full_link"
                        href="#"
                        onClick={(e) => onClick(e, 2)}
                      />
                    </div>
                    <div className="details">
                      <div className="metabox">
                        <span>
                          <img className="svg" src="img/svg/user.svg" alt="" />
                          <a
                            className="animation_link"
                            href="#"
                            onClick={(e) => onClick(e, 2)}
                          >
                            Codeefly
                          </a>
                        </span>
                        <span>
                          <img
                            className="svg"
                            src="img/svg/comment.svg"
                            alt=""
                          />
                          22 April, 2022
                        </span>
                      </div>
                      <div className="title">
                        <h3>
                          <a href="#" onClick={(e) => onClick(e, 2)}>
                            How to be appreciated for your work as a developer
                          </a>
                        </h3>
                      </div>
                      <a href="#" onClick={(e) => onClick(e, 2)}>
                        <span
                          className="arrow_icon"
                          dangerouslySetInnerHTML={{ __html: arrow }}
                        ></span>
                      </a>
                    </div>
                    {/* Modalbox Info Start */}

                    {/* /Modalbox Info End */}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-25.jpg" alt="" />
                      <div className="main" data-img-url="img/news/3.jpg" />
                      <a
                        className="mers_tm_full_link"
                        href="#"
                        onClick={(e) => onClick(e, 3)}
                      />
                    </div>
                    <div className="details">
                      <div className="metabox">
                        <span>
                          <img className="svg" src="img/svg/user.svg" alt="" />
                          <a
                            className="animation_link"
                            href="#"
                            onClick={(e) => onClick(e, 3)}
                          >
                            Codeefly
                          </a>
                        </span>
                        <span>
                          <img
                            className="svg"
                            src="img/svg/comment.svg"
                            alt=""
                          />
                          15 March, 2022
                        </span>
                      </div>
                      <div className="title">
                        <h3>
                          <a href="#" onClick={(e) => onClick(e, 3)}>
                            How designers and developers can collaborate better
                          </a>
                        </h3>
                      </div>
                      <a href="#" onClick={(e) => onClick(e, 3)}>
                        <span
                          className="arrow_icon"
                          dangerouslySetInnerHTML={{ __html: arrow }}
                        ></span>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default News;
