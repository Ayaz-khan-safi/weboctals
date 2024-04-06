import Isotope from "isotope-layout";
import { Fragment, useEffect, useState } from "react";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  // Isotope
  useEffect(() => {
    dataImage();
    setTimeout(() => {
      new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
      });
    }, 500);
  }, []);
  const [active, setActive] = useState(false);
  return (
    <Fragment>
      {active && <DetailsPopup close={() => setActive(false)} />}
      <div className="mers_tm_section" id="portfolio">
        <div className="mers_tm_portfolio">
          <div className="container">
            <div className="mers_tm_title" data-text-align="left">
              <span>Working Project</span>
              <h3>Our Portfolio</h3>
            </div>
            <div className="portfolio_list">
              <ul className="grid gallery_zoom">
                <li className="grid-item">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/27-24.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/1.jpg"
                      />
                    </div>
                    <div className="details">
                      <h3 className="title">
                        <a href="#">Creative Art</a>
                      </h3>
                      <span className="category">
                        <a className="animation_link" href="#">
                          Youtube
                        </a>
                      </span>
                    </div>
                    <a
                      className="mers_tm_full_link popup-youtube"
                      href="//www.youtube.com/embed/7e90gBu4pas?autoplay=1"
                    />
                  </div>
                </li>
                <li className="grid-item">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/27-36.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/2.jpg"
                      />
                    </div>
                    <div className="details">
                      <h3 className="title">
                        <a href="#">Ave Simone</a>
                      </h3>
                      <span className="category">
                        <a className="animation_link" href="#">
                          Vimeo
                        </a>
                      </span>
                    </div>
                    <a
                      className="mers_tm_full_link popup-vimeo"
                      href="//player.vimeo.com/video/337293658?autoplay=1"
                    />
                  </div>
                </li>
                <li className="grid-item">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/27-39.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/3.jpg"
                      />
                    </div>
                    <div className="details">
                      <h3 className="title">
                        <a href="#">Shopping Girl</a>
                      </h3>
                      <span className="category">
                        <a className="animation_link" href="#">
                          Soundcloud
                        </a>
                      </span>
                    </div>
                    <a
                      className="mers_tm_full_link soundcloude_link mfp-iframe audio"
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                  </div>
                </li>
                <li className="grid-item">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/27-39.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/6.jpg"
                      />
                    </div>
                    <div className="details">
                      <h3 className="title">
                        <a href="#">NFT Artists</a>
                      </h3>
                      <span className="category">
                        <a className="animation_link" href="#">
                          Details
                        </a>
                      </span>
                    </div>
                    <a
                      className="mers_tm_full_link portfolio_popup c-pointer"
                      onClick={() => setActive(true)}
                    />
                  </div>
                </li>
                <li className="grid-item">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/27-36.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/4.jpg"
                      />
                    </div>
                    <div className="details">
                      <h3 className="title">
                        <a href="#">Logo Designer</a>
                      </h3>
                      <span className="category">
                        <a className="animation_link" href="#">
                          Popup
                        </a>
                      </span>
                    </div>
                    <a
                      className="mers_tm_full_link zoom"
                      href="img/portfolio/4.jpg"
                    />
                  </div>
                </li>
                <li className="grid-item">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/27-24.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/5.jpg"
                      />
                    </div>
                    <div className="details">
                      <h3 className="title">
                        <a href="#">Visual Studio</a>
                      </h3>
                      <span className="category">
                        <a className="animation_link" href="#">
                          Popup
                        </a>
                      </span>
                    </div>
                    <a
                      className="mers_tm_full_link zoom"
                      href="img/portfolio/5.jpg"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
