import React from "react";

function Services() {
  return (
    <section className="tc-services-style1">
      <div className="content section-padding section-padding-x">
        <div className="container">
          <div className="title mb-80 text-center">
            <p className="color-666 text-uppercase wow"> our services </p>
          </div>
          <div className="services">
            <div className="row">
              <div className="col-lg-4">
                <a
                  href="#"
                  className="service-card wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="icon">
                    <i className="la la-hard-hat"></i>
                  </div>
                  <h5 className="fsz-24 mb-20">
                    {" "}
                    Branding and Digital Marketing{" "}
                  </h5>
                  <div className="img">
                    <img
                      src="/home1/assets/img/services/ser1.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    Medha Aesthetics (EyeCatch) offers comprehensive branding
                    services aimed at creating unique and memorable identities
                    for diverse businesses. From logo design and brand strategy
                    to packaging, marketing collateral, and digital advertising
                    campaigns, our team ensures that each brand we develop
                    stands out and excels in the competitive market.
                  </div>
                  <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
              <div className="col-lg-4">
                <a
                  href="#"
                  className="service-card mt-150 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="icon">
                    <i className="la la-bezier-curve"></i>
                  </div>
                  <h5 className="fsz-24 mb-20">
                    EyeCatchArchitects and Interiors
                  </h5>
                  <div className="img">
                    <img
                      src="/home1/assets/img/services/ser2.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    Our architectural division specializes in designing
                    functional and visually stunning spaces. Whether for
                    commercial buildings, residential projects, or public
                    spaces, Medha Aesthetics combines architectural expertise
                    with artistic and aesthetic vision to bring each project to
                    life. We specialize in the design and execution of both
                    interiors and exteriors of retail spaces from bare cell to
                    complete showrooms and villas.
                  </div>
                  <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
              <div className="col-lg-4">
                <a
                  href="#"
                  className="service-card wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="icon">
                    <i className="la la-bed"></i>
                  </div>
                  <h5 className="fsz-24 mb-20">EyeCatch Home </h5>
                  <div className="img">
                    <img
                      src="/home1/assets/img/services/ser3.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    Medha Aesthetics' furniture studio, situated in a 20,000 sq
                    ft space at Rallaguda, Shamsabad, Hyderabad, crafts bespoke
                    pieces that seamlessly blend form and function. From
                    conceptualization to customization, our designers create
                    furniture that enhances spaces and reflects our commitment
                    to innovation and quality craftsmanship. Our furniture
                    studio serves as an exclusive experience center cum sales
                    point, showcasing a diverse range of world-class furniture
                    and interior embellishments. We are planning to start a 5000
                    sq ft display, supply, and sales showroom at Road number 12
                    Banjara Hills, Hyderabad. We are also planning to let out
                    franchises of our furniture showroom in Andhra Pradesh,
                    Telangana, and Karnataka very soon.
                  </div>
                  <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </a>
              </div>
              {/* <div className="col-lg-3">
                <a
                  href="#"
                  className="service-card mt-150 wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <div className="icon">
                    <i className="la la-comments"></i>
                  </div>
                  <h5 className="fsz-24 mb-20">
                    Project Consulting & Supervisor
                  </h5>
                  <div className="img">
                    <img
                      src="/home1/assets/img/services/ser4.jpg"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    Project Analysis, Bid Documentation, Construction Supervisor
                  </div>
                  <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </a>
              </div> */}
            </div>
          </div>
          {/* <div className="text-center">
            <a
              href="#"
              className="butn rounded-pill mt-80 hover-bg-black bg-orange1 text-white"
            >
              <span>
                Get A Free Quote Now
                <i className="small ms-1 ti-arrow-top-right"></i>
              </span>
            </a>
          </div> */}
        </div>
      </div>
      <div className="ser-img">
        <img src="/home1/assets/img/services/ser.jpg" alt="" />
      </div>
    </section>
  );
}

export default Services;
