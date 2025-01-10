import React from "react";

function About() {
  return (
    <section className="tc-about-style7">
      <div className="container">
        <div className="row gx-0 justify-content-between">
          <div className="col-lg-3">
            <div className="rotate-box" data-speed="1" data-lag="0.4">
              <a
                href="#"
                className="rotate-circle fsz-30 rotate-text d-inline-block text-uppercase"
              >
                <svg className="textcircle" viewBox="0 0 500 500">
                  <defs>
                    <path
                      id="textcircle"
                      d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                    ></path>
                  </defs>
                  <text>
                    <textPath xlinkHref="#textcircle" textLength="900">
                      Architects - Eyecatch Advertising -
                    </textPath>
                  </text>
                </svg>
              </a>
              <img
                src="/innerpages/assets/img/leafs.png"
                alt=""
                className="icon"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info wow fadeInUp slow" data-wow-delay="0.2s">
              <div className="text fsz-25 fw-500 mb-20">
                Starting with a modest entry into the retail sector, we have
                crafted comprehensive publicity materials for numerous stores
                and showrooms. Now, we are exploring opportunities to broaden
                our interior and furniture services for both residential and
                commercial environments. To realize this vision, we are
                preparing to inaugurate a flagship showroom in Hyderabad,
                featuring world-class furniture and interior solutions. This
                showroom will serve as a centralized hub and a benchmark for all
                our future interior design endeavors.
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="numbers mt-5 mt-lg-0">
              <div
                className="number-card wow zoomIn slow"
                data-wow-delay="0.4s"
              >
                <h2 className="numb"> 95% </h2>
                <small> Clients Satisfied and repeating </small>
              </div>
              <div
                className="number-card wow zoomIn slow"
                data-wow-delay="0.6s"
              >
                <h2 className="numb"> 125% </h2>
                <small> projects done </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
