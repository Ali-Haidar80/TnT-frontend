import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import design from "../assets/video/giphy.mp4";
import planning from "../assets/video/1.mp4";
import web from "../assets/video/2.png";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const MyCarousoel = ({ data }) => {
  return (
    <Carousel
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", ""]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      arrows={false}
    >
      <div>
        <img
          src={
            data?.[0]?.image ? `http://localhost:5000/${data?.[0]?.image}` : web
          }
          className="h-[100vh]"
          alt=""
        />
      </div>
      <div className="">
        <video
          src={
            data?.[0]?.video
              ? `http://localhost:5000/${data?.[0]?.video}`
              : planning
          }
          className="h-[100vh]"
          controls
        ></video>
      </div>
      <div className="">
        <video
          src={
            data?.[0]?.giff
              ? `http://localhost:5000/${data?.[0]?.giff}`
              : design
          }
          className="h-[100vh]"
          controls
          autoPlay
          muted
          loop
        ></video>
      </div>
     
    </Carousel>
  );
};

export default MyCarousoel;
