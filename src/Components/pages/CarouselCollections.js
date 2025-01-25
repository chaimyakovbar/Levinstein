import React from "react";
import { useNavigate } from "react-router-dom";

import { Carousel } from "react-responsive-carousel";
import { COLLECTION_LIST, CAROUSEL_LIST } from "../../consts/SubjectsList";

const CarouselCollections = () => {
  const navigate = useNavigate();

  return (
    <div>
      {COLLECTION_LIST.slice(0, 3).map((image, index) => (
        <div
          key={index}
        >
          {index === 0 ? (
            <Carousel
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              transitionTime={1000}
              animationHandler={"fade"}
            >
              {CAROUSEL_LIST.map((item, index) => (
                
                <img key={index} src={item.image} alt={item.label} />

              ))}
            </Carousel>
          ) : (
            <>
              <div >
                <img
                  style={{ height: '100px' }}
                  src={image.image}
                  alt={`${image.label} Theme`}
                  onClick={() => {
                    navigate(`/collections/${image.label}`);
                  }}
                />
                <div>
                  <h2 >{image.label}</h2>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CarouselCollections;
