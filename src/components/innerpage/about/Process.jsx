import React from "react";

function Process() {
  return (
    <section className="tc-process-style2">
      <div className="container">
        <h2 className="fsz-45 fw-500 mb-80 text-center">
          EyeCatch
          <span className="sub-font fst-italic color-orange1 fw-400">
            Philosophy
          </span>
        </h2>
        <div className="content">
          <div className="row">
            <div className="col-lg-5">
              <div className="accordion-side wow fadeInUp slow">
                <div className="accordion" id="accordionProcess">
                  <ul className="fsz-26 fw-600 story">
                    <li>Stories matter. </li>
                    <li>We are all stories. </li>
                    <li>Parts matter. </li>
                    <li>We are an indispensable part. </li>
                    <li>We tell stories that comfort, enrich, enhance. </li>
                    <li>
                      We sell stories that are untouched and so touching.{" "}
                    </li>
                    <li>We are a new-age storytelling agile ensemble. </li>
                    <li>We are a next-gen narrative mélange. </li>
                    <li>We are all built from the stories we tell and sell.</li>
                    <li>We are a thirsty crew. </li>
                    <li>
                      We harvest stories that shape the better world you desire
                      and dream of.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="imgs">
                <div className="img" data-lag="0.2">
                  <img
                    src="/innerpages/assets/img/process/proc1.jpg"
                    alt=""
                    className="img-cover"
                  />
                  <span className="txt sub-font"> Design </span>
                </div>
                <div className="img" data-lag="0.4">
                  <img
                    src="/innerpages/assets/img/process/proc2.jpg"
                    alt=""
                    className="img-cover"
                  />
                  <span className="txt sub-font"> Handover </span>
                </div>
                <div className="img" data-lag="0.3">
                  <img
                    src="/innerpages/assets/img/process/proc3.jpg"
                    alt=""
                    className="img-cover"
                  />
                  <span className="txt sub-font"> Survey </span>
                </div>
                <div className="img" data-lag="0.5">
                  <img
                    src="/innerpages/assets/img/process/proc4.jpg"
                    alt=""
                    className="img-cover"
                  />
                  <span className="txt sub-font"> Implement </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/innerpages/assets/img/prc_bg.png"
        alt=""
        className="bg"
        data-speed="1.2"
      />
    </section>
  );
}

export default Process;
