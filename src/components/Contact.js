import { fb, instagram, linkedin, twitter } from "../svgImg";

const Contact = () => {
  return (
    <div className="mers_tm_section" id="contact">
      <div className="mers_tm_contact">
        <div className="container">
          <div className="contact_inner">
            <div className="main_title">
              <div className="text">
                <h3>
                  I want to hear from you please{" "}
                  <span className="colored">contact me!</span>
                </h3>
              </div>
              <div className="contact_social">
                <ul>
                  <li>
                    <a href="#" dangerouslySetInnerHTML={{ __html: fb }}></a>
                  </li>
                  <li>
                    <a
                      href="#"
                      dangerouslySetInnerHTML={{ __html: twitter }}
                    ></a>
                  </li>
                  <li>
                    <a
                      href="#"
                      dangerouslySetInnerHTML={{ __html: linkedin }}
                    ></a>
                  </li>
                  <li>
                    <a
                      href="#"
                      dangerouslySetInnerHTML={{ __html: instagram }}
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main_details">
              <div className="fields">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <label htmlFor="name">Full Name:</label>
                        <input id="name" type="text" placeholder="Your Name" />
                      </li>
                      <li>
                        <label htmlFor="name">Subject:</label>
                        <input
                          id="subject"
                          type="text"
                          placeholder="Your Subject"
                        />
                      </li>
                      <li>
                        <label htmlFor="name">Your Email:</label>
                        <input
                          id="email"
                          type="text"
                          placeholder="Your Email"
                        />
                      </li>
                      <li>
                        <label htmlFor="name">Phone Number:</label>
                        <input
                          id="phone"
                          type="number"
                          placeholder="+00 (0000) 000 00"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <label htmlFor="name">Message:</label>
                    <textarea
                      id="message"
                      placeholder="Write your message here"
                      defaultValue={""}
                    />
                  </div>
                  <div className="mers_tm_button">
                    <a id="send_message" href="#">
                      <span>Submit Now</span>
                      <span className="icon">
                        <img className="svg" src="img/svg/play.svg" alt="" />
                      </span>
                    </a>
                  </div>
                </form>
              </div>
              <div className="infos">
                <div className="address">
                  <h3>
                  123 Main Street, London WC1X 0AA,{" "}
                    <span className="colored">United Kingdom.</span>
                  </h3>
                </div>
                <div className="list">
                  <ul>
                    <li>
                      <div className="list_inner">
                        <div className="icon">
                          <img className="svg" src="img/svg/call.svg" alt="" />
                        </div>
                        <div className="short">
                          <span>Contact Phone</span>
                          <h3>
                            <a className="animation_link" href="#">
                            +123-456-7890
                            </a>
                          </h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <div className="icon">
                          <img className="svg" src="img/svg/mail.svg" alt="" />
                        </div>
                        <div className="short">
                          <span>Contact Mail</span>
                          <h3>
                            <a
                              className="animation_link"
                              href="mailto:info@Ceativeltd.co.uk"
                            >
info@Ceativeltd.co.uk                            </a>
                          </h3>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="copyright">
                  <p>
                    Design By{" "}
                    <a
                      href="https://themeforest.net/user/Codeefly"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Consultancy Outfit.
                    </a>
                  </p>
                  <p>
                    © 2024 by{" "}
                    <a
                      href="https://themeforest.net/user/Codeefly/portfolio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ceative.
                    </a>{" "}
                    All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="background_image">
          <img src="img/contact/1.png" alt="" />
        </div> */}
      </div>
    </div>
  );
};
export default Contact;
