const BlogPopup = ({ img, date, title, close }) => {
  return (
    <div className="mers_tm_modalbox opened">
      <div className="box_inner">
        <div className="close" onClick={() => close()}>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">
          <div className="news_popup_informations">
            <div className="image">
              <img src="img/thumbs/4-2.jpg" alt="" />
              <div
                className="main"
                data-img-url={img}
                style={{ backgroundImage: `url(${img})` }}
              />
            </div>
            <div className="details">
              <div className="metabox">
                <span>
                  <img className="svg" src="img/svg/user.svg" alt="" />
                  <a
                    className="animation_link"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    Codeefly
                  </a>
                </span>
                <span>
                  <img className="svg" src="img/svg/comment.svg" alt="" />
                  {date}
                </span>
              </div>
              <div className="title">
                <h3>{title}</h3>
              </div>
              <div />
            </div>
            <div className="text">
              <p>
                Mer{`'s`} is a leading web design agency with an award-winning
                design team that creates innovative, effective websites that
                capture your brand, improve your conversion rates, and maximize
                your revenue to help grow your business and achieve your goals.
              </p>
              <p>
                In today{`’s`} digital world, your website is the first
                interaction consumers have with your business. That{`'s`} why
                almost 95 percent of a user{`’s`} first impression relates to
                web design. It{`’s`} also why web design services can have an
                immense impact on your company
                {`’s`} bottom line.
              </p>
              <p>
                That{`’s`} why more companies are not only reevaluating their
                website{`’s`} design but also partnering with Kura, the web
                design agency that{`’s`} driven more than $2.4 billion in
                revenue for its clients. With over 50 web design awards under
                our belt,{` we're`}
                confident we can design a custom website that drives sales for
                your unique business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogPopup;
