import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from 'motion/react'
import { edu, education } from "../assets";

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="education" className="px-8 xl:px-20 sm:px-16 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h1 className="bg-[#1a1443] w-fit mx-auto text-white rounded-md px-6 py-2 text-xl lg:text-4xl">
          Education
        </h1>
      </motion.div>
      <div className="grid lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center justify-center mt-10"
        >
          <img className="w-80" src={ edu } alt="ref image" />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col gap-4 mt-10 lg:mx-6"
        >
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-[#101123] border border-[#2a2e5a] rounded-md cursor-pointer hover:border-violet-800 hover:scale-105 transition-all duration-700 ease-in-out"
            >
              <div className="flex gap-4 p-4">
                <item.icon className="text-violet-600 text-[80px] lg:text-[50px] mt-8 mr-4" />
                <div>
                  <p className="text-center text-[#16f2b3]">{item.year}</p>
                  <p className="text-xl lg:text-2xl text-gray-100 my-2">
                    {item.degree}
                  </p>
                  <p className="text-white text-base">{item.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
