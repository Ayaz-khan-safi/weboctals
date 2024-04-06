import { mouse } from "../svgImg";

const HomeGlitch = () => {
  return (
    <div className="mers_tm_section" id="home">
      <div className="mers_tm_hero">
        <div className="background">
          <div className="glitch">
            <div className="glitch__item"></div>
            <div className="glitch__item"></div>
            <div className="glitch__item"></div>
            <div className="glitch__item"></div>
            <div className="glitch__item"></div>
          </div>
          <div className="overlay" />
        </div>
        <div className="container">
          <div className="content">
            <div className="in">
              <span className="hello">Hello {`I'm`}</span>
              <h3 className="name">Mrs. Maya</h3>
              <p className="text">
                {`I’m`} Experienced Glad to <span className="colored">see</span>{" "}
                you here.
              </p>
              <div className="mers_tm_button">
                <a className="anchor" href="#contact">
                  <span>Hire Me</span>
                  <span className="icon">
                    <img className="svg" src="img/svg/play.svg" alt="" />
                  </span>
                </a>
              </div>
            </div>
            <div className="mers_tm_down">
              <a
                className="anchor"
                href="#about"
                dangerouslySetInnerHTML={{ __html: mouse }}
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeGlitch;
