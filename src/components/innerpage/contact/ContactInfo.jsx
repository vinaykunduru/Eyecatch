import React from "react";

function ContactInfo() {
  return (
    <section className="tc-contact-info-style1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="info-cards">
              <div className="row">
                <div className="col-lg-6">
                  <div className="item mt-50">
                    <h6 className="fsz-24 mb-15 fw-bold"> Hyderabad </h6>
                    <ul className="color-666 lh-6">
                      <li>
                        <a href="#">
                          {" "}
                          First Floor, Plot No 710, Road No. 36, Aditya Enclave,
                          Venkatagiri, Jubilee Hills, Hyderabad, Telangana
                          500033
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
                </div>
                <div className="col-lg-6">
                  <div className="item mt-50">
                    <h6 className="fsz-24 mb-15 fw-bold"> Vijayawada </h6>
                    <ul className="color-666 lh-6">
                      <li>
                        <a href="#">
                          MG Road, Vijayawada 520010 Andhra Pradesh
                        </a>
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
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="social-icons mt-50 text-lg-end">
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
      </div>
    </section>
  );
}

export default ContactInfo;
