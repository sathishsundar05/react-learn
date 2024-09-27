
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        stopOnHover={true}
      >
        <div>
          <img src="https://images.unsplash.com/photo-1550326897-59b13e651fcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyb3VzZWx8ZW58MHx8MHx8fDA%3D" alt="First Slide" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1424161318821-cb73e69b9422?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyb3VzZWx8ZW58MHx8MHx8fDA%3D" alt="Second Slide" />
        </div>
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1667516600195-551635f9dcbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcm91c2VsfGVufDB8fDB8fHww" alt="Third Slide" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
