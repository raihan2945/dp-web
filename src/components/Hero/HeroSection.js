import Link from "next/link";
import React, { useState } from "react";
import Modal from "../UI/Modal";

const HeroSection = ({ data }) => {
  const [modalShow, setModalShow] = useState(false);

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";


  const URL = process.env.BASE_URL || `${origin}`;
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            {/* <h1 className="dr-title"></h1> */}
            <h1 className="dr-title">{data?.Title} {data?.Name}</h1>
            {/* <h2 className="doctor-title">
            I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. I don't know, but the flag is a big
            plus.
          </h2> */}
            <div className="speciality">
              {data?.Speciality && (
                <div
                  style={{
                    // fontSize: ".9rem",
                    // fontWeight: "400",
                    // marginBottom: "0",
                    display: "flex",
                    alignItems: "center",
                    gap: ".5rem",
                  }}
                >
                  <div style={{ color: "#FF9201" }}>{data?.Speciality}</div>
                  <i
                    class="fas fa-circle"
                    style={{
                      fontSize: ".4rem",
                      color: "#919399",
                      marginTop: "4px",
                    }}
                  ></i>
                  <div>
                    {Math.round(data?.YearsOfExperience)}
                    {data?.YearsOfExperience && "+ years of experience"}
                  </div>
                </div>
              )}
              <div
                className="edu"
                style={{
                  fontSize: ".9rem",
                  display: "flex",
                  gap: ".5rem",
                  alignItems: "center",
                }}
              >
                {Array.isArray(data?.Educations) &&
                  data?.Educations?.length > 0 &&
                  data?.Educations?.map((s, index) => (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p style={{ margin: "0rem" }}>{s.Code} </p>
                      {index ==
                      Number(
                        Array.isArray(data?.Educations) &&
                          data?.Educations?.length
                      ) -
                        1 ? (
                        ""
                      ) : (
                        <i
                          class="fas fa-circle"
                          style={{
                            marginLeft: ".5rem",
                            fontSize: ".4rem",
                            color: "#919399",
                          }}
                        ></i>
                      )}
                    </div>
                  ))}
              </div>
              {/* <div className="s-container">
              <div className="s-item">{data?.Speciality}</div>
            </div> */}
            </div>

            <div className="chamber">
              <p>Chamber</p>
              <div className="location-address">
                <h6 style={{color:"#000000"}}>
                  {Array.isArray(data?.Chambers) && data?.Chambers[0]?.Name}
                </h6>
                {/* <h6>Islami Bank Hospital</h6> */}
                <span>
                  <i class="fas fa-map-marker-alt"></i>
                </span>
                <span style={{ marginLeft: ".5rem" }}>
                  {/* Plot-31, Main Road-3, Block-D, Section-11, Mirpur, 1216 Dhaka,
                  Dhaka, Bangladesh */}
                  {Array.isArray(data?.Chambers) && data?.Chambers[0]?.Address}
                </span>
              </div>
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
              <button
                className="button1"
                type="button"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                onClick={() => setModalShow(true)}
              >
                Call for Appointment
              </button>
              <button className="button2" onClick={() => setModalShow(true)}>
                View Chamber
              </button>
            </div>

            <div style={{ marginTop: "3rem" }} className="media_links">
              {Array.isArray(data?.MediaLinks) &&
                data?.MediaLinks?.length > 0 &&
                data?.MediaLinks?.map((item) => {
                  return (
                    <div className="icon-box">
                      <a href={`${item.value}`}>
                        <i className={`fab fa-${item?.key?.toLowerCase()}`}></i>
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <img
              src={`${URL}/${data?.ProfileImage}`}
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>

      <Modal show={modalShow} onHide={() => setModalShow(false)} data={data} />
    </>
  );
};

export default HeroSection;
