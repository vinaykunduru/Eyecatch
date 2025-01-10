import React from "react";

function Footer() {
  return (
    <footer className="tc-footer-style1 border-top">
      <div className="container">
        <div className="top-content section-padding">
          <div className="row gx-0">
            <div className="col-lg-4">
              <div className="info-side">
                <div className="text fsz-24 color-333 lh-3 fw-600">
                  With over three decades of expertise in branding, advertising,
                  and design, Eyecatch turns ideas into impactful stories.
                  Driven by creativity and innovation, we craft experiences that
                  inspire and redefine possibilities.
                </div>
                <div className="foot-social mt-50">
                  <a href="#">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-2">
              <div className="branch-card">
                <h5 className="mb-20 mt-5 mt-lg-0 fw-600"> Hyderabad </h5>
                <ul className="footer-links">
                  <li>
                    <a href="#">
                      First Floor, Plot No 710, Road No. 36, <br />
                      Aditya Enclave, Venkatagiri, Jubilee Hills, <br />
                      Hyderabad, Telangana 500033
                    </a>
                  </li>
                  <li>
                    <a href="#"> hyderabad@eyecatch.co.in </a>
                  </li>
                  <li>
                    <a href="#"> +91 812 522 5696 </a>
                  </li>
                </ul>
              </div>
              {/* <div className="branch-card">
                <h5 className="mb-20 mt-5 fw-600"> Boston, MA </h5>
                <ul className="footer-links">
                  <li>
                    <a href="#"> 3D Visualization Architect </a>
                  </li>
                  <li>
                    <a href="#"> Interior Architect </a>
                  </li>
                  <li>
                    <a href="#"> Sustainable Design Architect </a>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="col-lg-3">
              <div className="branch-card">
                <h5 className="mb-20 mt-5 mt-lg-0 fw-600"> Vijayawada </h5>
                <ul className="footer-links">
                  <li>
                    <a href="#">MG Road, Vijayawada 520010 Andhra Pradesh</a>
                  </li>
                  <li>
                    <a href="#"> contact@eyecatch.co.in </a>
                  </li>
                  <li>
                    <a href="#"> +91 924 642 5696 </a>
                  </li>
                  <li>
                    <a href="#"> +91 903 242 5695 </a>
                  </li>
                </ul>
              </div>
              {/* <div className="branch-card">
                <h5 className="mb-20 mt-5 fw-600"> Helps </h5>
                <ul className="footer-links">
                  <li>
                    <a href="#"> Term & Conditions </a>
                  </li>
                  <li>
                    <a href="#"> Partner Policy </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row">
            <div className="col-lg-6">
              <p className="fsz-13">© 2025 - Eyecatch. All rights reserved.</p>
            </div>
            <div className="col-lg-6">
              <div className="foot-links mt-4 mt-lg-0">
                <a href="/"> Home </a>
                <a href="/about"> About </a>
                <a href="/services"> Services </a>
                <a href="/works"> Works </a>
                <a href="/contact"> Contact </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
