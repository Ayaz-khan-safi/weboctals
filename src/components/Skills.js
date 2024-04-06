const Skills = () => {
  return (
    <div className="mers_tm_skills">
      <div className="container">
        <div className="skills_inner">
          <div className="left">
            <div className="mers_tm_title" data-text-align="left">
              <span>Our Skill</span>
              <h3>Team Sollution Skill</h3>
            </div>
            <div className="text">
              <p>
                As a web developer and web designer, you will need to have keen
                analytical skills to create a variety of successful websites.
                This involves ensuring the coding is correct so the website is
                functional.
              </p>
            </div>
            <div className="dodo_progress">
              <div
                className="progress_inner skillsInner___"
                data-value={75}
                data-color="#988C86"
              >
                <span>
                  <span className="label">UI/UX Design</span>
                  <span className="number">75%</span>
                </span>
                <div className="background">
                  <div className="bar">
                    <div className="bar_in" />
                  </div>
                </div>
              </div>
              <div
                className="progress_inner skillsInner___"
                data-value={95}
                data-color="#988C86"
              >
                <span>
                  <span className="label">Web Design</span>
                  <span className="number">95%</span>
                </span>
                <div className="background">
                  <div className="bar">
                    <div className="bar_in" />
                  </div>
                </div>
              </div>
              <div
                className="progress_inner skillsInner___"
                data-value={85}
                data-color="#988C86"
              >
                <span>
                  <span className="label">App Development</span>
                  <span className="number">85%</span>
                </span>
                <div className="background">
                  <div className="bar">
                    <div className="bar_in" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right parallax" data-relative-input="true">
            <img
              className="layer"
              data-depth="0.04"
              src="img/skills/1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="mers_tm_counter_section">
          <ul>
            <li>
              <div className="list_inner">
                <div className="myCircle">
                  <div className="arc arc_start" />
                  <div className="arc arc_end" />
                  <span className="numbers">31.2K</span>
                </div>
                <p className="title">Product Sale Per Day Using Out Tools</p>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="myCircle">
                  <div className="arc arc_start" />
                  <div className="arc arc_end" />
                  <span className="numbers">2.3M</span>
                </div>
                <p className="title">Downloaded Total In 2018-2022</p>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="myCircle">
                  <div className="arc arc_start" />
                  <div className="arc arc_end" />
                  <span className="numbers">50M</span>
                </div>
                <p className="title">Trusted By Customers Worldwide Over</p>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="myCircle">
                  <div className="arc arc_start" />
                  <div className="arc arc_end" />
                  <span className="numbers">100%</span>
                </div>
                <p className="title">Satisfaction Guarantee</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Skills;
