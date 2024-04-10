const SidebarMenu = () => {
  return (
    <div className="mers_tm_leftpart">
      <div className="leftpart_inner">
        <div className="logo">
          <a href="#">
            <img src="img/logo/Logo-ceative.svg" alt="" />
          </a>
        </div>
        <div className="menu scrollable">
          <ul className="anchor_nav">
            <li className="current">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            {/* <li>
              <a href="#portfolio">Portfolio</a>
            </li> */}
            {/* <li>
              <a href="#news">News</a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="subscribe_wrap">
          <div className="title">
            <h3>Newsletter</h3>
          </div>
          <div className="mers_tm_subscribe">
            <div className="sub_form">
              <input type="text" placeholder="info@Ceativeltd.co.uk" />
              <a href="#">
                <img src="img/svg/newsletter.svg" alt="" className="svg" />
              </a>
            </div>
            <div
              className="returnmessage"
              data-success="Your message has been received, We will contact you soon."
              data-message="You have subscribed to our updates. Thank you"
            />
            <div className="empty_notice">
              <span>Please enter your Email</span>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            © 2024 by{" "}
            <a
              href="https://themeforest.net/user/Codeefly"
              target="_blank"
              rel="noreferrer"
            >
              Consultancy Outfit.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SidebarMenu;
