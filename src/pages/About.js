import React from "react";
import { NavLink } from "react-router-dom";
import web from "../images/logo-animated.gif";
import Common from "./Common";

const About = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h4>
                    <strong className="brand-name"> Shivam Tech</strong>
                  </h4>
                  <p className="my-3">
                    To remove educational backwardness , and create awareness
                    about the national ideals of JUSTICE , LIBERTY , EQUALITY
                    AND FRATERNITY , SECULARISM and SOCIALISM.
                  </p>
                  <div className="mt-03 text-center">
                    <NavLink to="/contact" className="btn-get-started">
                      Contact Us
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="common image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
