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
          <h1 className="dr-title">{data?.Title}</h1>
          <h1 className="dr-title">{data?.Name}</h1>
          {/* <h2 className="doctor-title">
            I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. I don't know, but the flag is a big
            plus.
          </h2> */}
          <div className="speciality">

            <p style={{fontSize:".9rem",fontWeight:"400", marginBottom:"0"}}><span style={{color:"#FF9201"}}>{data?.Speciality} <i class="fas fa-circle" style={{fontSize:".3rem", color:"#919399"}}></i> </span><span> {Math.round(data?.YearsOfExperience)}  years of experience</span></p>
            <p style={{fontSize:".9rem"}}>{data?.SubSpeciality.map(s=><span style={{}}>{s} <i class="fas fa-circle" style={{fontSize:".3rem", color:"#919399"}}></i>  </span>)}</p>
            {/* <div className="s-container">
              <div className="s-item">{data?.Speciality}</div>
            </div> */}
          </div>

          <div className="chamber">
            <p>Chamber</p>
            <h6>Islami Bank Hospital</h6>
           <div  className="location-address"><span><i class="fas fa-map-marker-alt"></i></span><span style={{marginLeft:'.5rem'}}>Plot-31, Main Road-3, Block-D, Section-11, Mirpur, 1216 Dhaka, Dhaka, Bangladesh</span></div> 
          </div>
          {/* <div className="sub-speciality">
            <h3>Sub speciality</h3>
            <div className="s-container">
                {data?.SubSpeciality.map(item=>(
                    <div className="s-item">{item}</div>
                ))}
            </div>
          </div> */}
          <div className="hero-buttons">
            <button className="button1"type="button" data-toggle="modal" data-target="#exampleModalCenter">
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
