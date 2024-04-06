import { mouse } from "../svgImg";

const Home = () => {
  return (
    <div className="mers_tm_section" id="home">
      <div className="mers_tm_hero">
        <div className="background">
          <div className="image" data-img-url="img/hero/1.jpg"></div>
          <div className="overlay"></div>
        </div>
        <div className="container">
          <div className="content">
            <div className="in">
              <span className="hello">Welcome to</span>
              <h3 className="name">CEATIVE LIMITED</h3>
              <p className="text">
              Empower Your Imagination with Creative Limited.
              </p>
              <div className="mers_tm_button">
                <a className="anchor" href="#contact">
                  <span>Lets Connect</span>
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
export default Home;
