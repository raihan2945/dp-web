import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { baseUrl } from "../../../utility/url";

const Gallery = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container">
      <div className="gallery-section" id="gallery-section">
      <h1>Gallery</h1>
        {data?.Photos && (
          <Carousel autoPlay={true} infinite={true} responsive={responsive}>
            {data?.Photos.map((item) => {
              return <div style={{width:"100%",height:"20rem", padding:"1rem"}}>
                <img style={{width:"100%", height:"100%", objectFit:"cover"}} src={`${baseUrl}${item}`}/>
              </div>;
            })}
            {/* <div>1</div> */}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Gallery;
