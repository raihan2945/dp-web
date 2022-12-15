import React from "react";
import { baseUrl } from "../../../utility/url";

const HeroSection = ({data}) => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <h1>{data?.Title}{data?.Name}</h1>
          <h2 className="doctor-title">
            I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. I don't know, but the flag is a big
            plus.
          </h2>
          <div className="speciality">
            <h3>Speciality</h3>
            <div className="s-container">
              <div className="s-item">{data?.Speciality}</div>
            </div>
          </div>
          <div className="sub-speciality">
            <h3>Sub speciality</h3>
            <div className="s-container">
                {data?.SubSpeciality.map(item=>(
                    <div className="s-item">{item}</div>
                ))}
            </div>
          </div>
          <div className="hero-buttons">
            <button className="button1">
              Call for Appointment
            </button>
            <button className="button2">
              View Chamber
            </button>
          </div>
        </div>
        <div
          className="col-lg-6 order-1 order-lg-2 hero-img"
          data-aos="zoom-in"
          data-aos-delay={200}
        >
          <img
            src={`${baseUrl}${data?.ProfileImage}`}
            className="img-fluid animated"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
