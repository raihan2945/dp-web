import React, { useState } from "react";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { baseUrl } from "../../../utility/url";
import ImageModal from "../UI/ImageModal";

// import ImageGallery from 'react-image-gallery';
// import { Carousel } from 'react-carousel-minimal';
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const Gallery = ({ data }) => {
  const [modalShow, setModalShow] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

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

  const images = [9, 8, 7, 6, 5].map((number) => ({
    src: `https://placedog.net/${number}00/${number}00?id=${number}`,
  }));
  const allImage = data?.Photos.map((item) => ({
    src: `${baseUrl}${item}`,
  }));

  // const allImage = data?.Photos.map((item, index)=>{
    
  //   return()src:`${baseUrl}${item}`
    
  // })

  return (
    <>
      <div className="container">
        <div className="gallery-section" id="gallery-section">
          <h1>Gallery</h1>
          {data?.Photos && (
            <MultiCarousel
              autoPlay={true}
              infinite={true}
              responsive={responsive}
            >
              {data?.Photos.map((item, index) => {
                return (
                  <div
                    onClick={() =>{
                      setModalShow(true)
                      setImageIndex(index)
                    }

                    } 
                    style={{ width: "100%", height: "20rem", padding: "1rem" }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={`${baseUrl}${item}`}
                    />
                  </div>
                );
              })}
              {/* <div>1</div> */}
            </MultiCarousel>
          )}
        </div>
      </div>

      <ImageModal show={modalShow} onHide={() => setModalShow(false)}>
        <Carousel 
        images={allImage} 
        style={{ height: "85vh", width: "100%" }}
        canAutoPlay={false}
        index={imageIndex}
        hasCaptions ={false}
        className="image_gallery"
        objectFit="contain"
         />
      </ImageModal>
    </>
  );
};

export default Gallery;
