import React from "react";

function Header() {
  return (
    <header className="tc-header-style2">
      <div className="container">
        <div className="top-info">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-8">
                <h1 className="js-title">
                  What We Offer
                  {/* <span className="sub-font"> Services </span> */}
                </h1>
                <div className="text fsz-18 color-666">
                  <p className="text fsz-18 color-666">
                    {" "}
                    Explore our range of innovative solutions in branding,
                    advertising, design, and more—crafted to elevate your
                    vision.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="side-info ps-lg-5">
                  <div className="facts-wrapper" data-speed="1" data-lag="0.5">
                    <div className="title fsz-12 text-uppercase mb-30">
                      <i className="icon-6 bg-orange1 rounded-circle me-2"></i>
                      The Facts
                    </div>
                    <div className="numbers">
                      <div className="row">
                        <div className="col-6">
                          <h2 className="num sub-font">
                            <span className="counter">99</span>%
                          </h2>
                          <p> Clients Satisfied </p>
                        </div>
                        <div className="col-6">
                          <h2 className="num sub-font">
                            <span className="counter">152</span>
                          </h2>
                          <p> Projects Done </p>
                        </div>
                      </div>
                    </div>
                    <img
                      src="/innerpages/assets/img/subtract.png"
                      alt=""
                      className="line"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
