import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { skills } from "../assets";

const Skills = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  var settings = {
    infinite: true,
    autoplay: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="skills" className="px-8 xl:px-20 sm:px-16 my-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h1 className="bg-[#1a1443] w-fit mx-auto text-white rounded-md px-6 py-2 text-xl lg:text-4xl">
          Skills
        </h1>
        <div className="slider-container mt-10">
          <Slider {...settings}>
            {skills.map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="w-full relative max-w-[300px] flex items-center justify-center flex-col gap-2 border border-[#231e4b] bg-[#0d1123] h-[150px] hover:scale-110 transition-all ease-in-out duration-1000 text-white rounded-md hover:border-violet-800 cursor-pointer">
                  <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
                  <img className="rounded-md w-10" src={item.image} alt={`${item.name} logo`} />
                  <p className="font-medium">{item.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
