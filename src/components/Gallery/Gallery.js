import React, { useState } from "react";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ImageModal from "../UI/ImageModal";

import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const Gallery = ({ data }) => {
  // const router = useRouter();
  const [modalShow, setModalShow] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';

    const URL = process.env.BASE_URL || `${origin}`;
    // console.log("url -", URL)

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


  const allImage = data?.Photos.map((item) => ({
    src: `${URL}/${item}`,
  }));

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
                      src={`${URL}/${item}`}
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
