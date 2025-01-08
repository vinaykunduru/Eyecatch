import React from "react";

function Experience() {
  return (
    <section className="tc-experience-style1 section-padding-x">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-2">
            <div className="exp-num mb-100 wow zoomIn" data-wow-delay="0.3s">
              <h5 className="fsz-18 text-uppercase">
                years of <br /> experience
              </h5>
              <h2 className="num"> 30 </h2>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="img wow">
              <img
                src="/home1/assets/img/exp.png"
                alt=""
                className="img-cover"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="info wow fadeInUp" data-wow-delay="0.3s">
              <h3 className="fsz-45 fw-600 mb-30"> Est. 1991 </h3>
              <div className="text fsz-15 color-666">
                Our journey began in 1991 when we founded an advertising agency
                in Vijayawada named EyeCatch. We quickly established ourselves
                as a leading agency in the fields of advertisement and branding,
                earning a distinguished reputation in record time. In 2010, we
                transformed our agency into a private limited company named
                Medha Aesthetics Pvt. Ltd. Over three decades, we have
                specialized in branding, architecture, and furniture design,
                showcasing our innovative approach to visual communication and
                aesthetics under the guidance of a smart and creative board of
                directors and top-level leadership.
              </div>
              <a
                href="#"
                className="butn rounded-pill mt-50 hover-bg-black bg-white"
              >
                <span>
                  Know More <i className="small ms-1 ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src="/home1/assets/img/c_line.png" alt="" className="c-line wow" />
    </section>
  );
}

export default Experience;
