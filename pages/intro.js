import Layout from "../src/layout/Layout";

const Intro = () => {
  return (
    <Layout intro>
      <div className="mers_tm_intro">
        <div className="mers_tm_intro_fixed_price">
          <span className="anim" />
          <span className="anim" />
          <span className="anim" />
          <a
            href="https://themeforest.net/user/codeefly/portfolio"
            target="_blank"
            className="pricing-info anim"
            rel="noreferrer"
          >
            -20%
          </a>
        </div>
        <div className="short_info">
          <img src="img/logo/Logo.svg" alt="" />
          <h3>Personal React NextJs Portfolio Template</h3>
        </div>
        <span className="intro_line" />
        <span className="intro_line_2" />
        <span className="intro_line_3" />
        <div className="demos">
          <div className="left">
            <div className="desc">
              <img src="img/intro/1.png" alt="" />
              <h3 className="title">Static Demo</h3>
            </div>
            <a
              className="intro_link"
              rel="noreferrer"
              href="/"
              target="_blank"
            />
          </div>
          <div className="right">
            <div className="desc">
              <img src="img/intro/1.png" alt="" />
              <h3 className="title">Glitch Demo</h3>
            </div>
            <a
              className="intro_link"
              rel="noreferrer"
              href="/index-glitch"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Intro;
