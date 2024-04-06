import { arrow } from "../svgImg";

const Pricing = () => {
  return (
    <div className="mers_tm_section">
      <div className="mers_tm_pricing">
        <div className="container">
          <div className="mers_tm_title" data-text-align="center">
            <span>Choose your plan</span>
            <h3>Our Price Table</h3>
          </div>
          <div className="price_list">
            <ul>
              <li>
                <div className="list_inner tilt-effect">
                  <h3 className="price">
                    <span>
                      00<span className="currency">$</span>
                    </span>
                  </h3>
                  <h3 className="plan">Free</h3>
                  <div className="item_list">
                    <ul>
                      <li>
                        <p>
                          <i className="icon-right-open-1" />
                          <span>High Quality Logo</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <i className="icon-right-open-1" />
                          <span>Premium Stock Photos</span>
                        </p>
                      </li>
                      <li className="inactive">
                        <p>
                          <i className="icon-right-open-1" />
                          <span>Premium Stock Icons</span>
                        </p>
                      </li>
                      <li className="inactive">
                        <p>
                          <i className="icon-right-open-1" />
                          <span>PNG, SVG Format Ready</span>
                        </p>
                      </li>
                      <li className="inactive">
                        <p>
                          <i className="icon-right-open-1" />
                          <span>Live Chat Support</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <span
                    className="arrow_icon"
                    dangerouslySetInnerHTML={{ __html: arrow }}
                  ></span>
                  <a className="mers_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner tilt-effect">
                  <h3 className="price">
                    <span>
                      60<span className="currency">$</span>
                    </span>
                  </h3>
                  <h3 className="plan">Basic</h3>
                  <div className="item_list">
                    <ul>
                      <li>
                        <p>
                          <i className="icon-right-open-1" />
                          <span>High Quality Logo</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <i className="icon-right-open-1" />
                          <span>Premium Stock Photos</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <i className="icon-right-open-1" />
                          <span>Premium Stock Icons</span>
                        </p>
                      </li>
                      <li className="inactive">
                        <p>
                          <i className="icon-right-open-1" />
                          <span>PNG, SVG Format Ready</span>
                        </p>
                      </li>
                      <li className="inactive">
                        <p>
                          <i className="icon-right-open-1" />
                          <span>Live Chat Support</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <span
                    className="arrow_icon"
                    dangerouslySetInnerHTML={{ __html: arrow }}
                  ></span>
                  <a className="mers_tm_full_link" href="#" />
                  <span className="popular">Popular</span>
                </div>
              </li>
              <li>
                <div className="list_inner tilt-effect">
                  <h3 className="price">
                    <span>
                      70<span className="currency">$</span>
                    </span>
                  </h3>
                  <h3 className="plan">Optimal</h3>
                  <div className="item_list">
                    <ul>
                      <li>
                        <p>
                          <i className="icon-right-open-1" />
                          <span>High Quality Logo</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <i className="icon-right-open-1" />
                          <span>Premium Stock Photos</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <i className="icon-right-open-1" />
                          <span>Premium Stock Icons</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <i className="icon-right-open-1" />
                          <span>PNG, SVG Format Ready</span>
                        </p>
                      </li>
                      <li className="inactive">
                        <p>
                          <i className="icon-right-open-1" />
                          <span>Live Chat Support</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <span
                    className="arrow_icon"
                    dangerouslySetInnerHTML={{ __html: arrow }}
                  ></span>
                  <a className="mers_tm_full_link" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner tilt-effect">
                  <h3 className="price">
                    <span>
                      90<span className="currency">$</span>
                    </span>
                  </h3>
                  <h3 className="plan">Premium</h3>
                  <div className="item_list">
                    <ul>
                      <li>
                        <p>
                          <i className="icon-right-open-1" />
                          <span>High Quality Logo</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <i className="icon-right-open-1" />
                          <span>Premium Stock Photos</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <i className="icon-right-open-1" />
                          <span>Premium Stock Icons</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <i className="icon-right-open-1" />
                          <span>PNG, SVG Format Ready</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <i className="icon-right-open-1" />
                          <span>Live Chat Support</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <span
                    className="arrow_icon"
                    dangerouslySetInnerHTML={{ __html: arrow }}
                  ></span>
                  <a className="mers_tm_full_link" href="#" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
