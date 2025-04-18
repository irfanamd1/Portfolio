import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { motion } from 'motion/react'
import { Link } from "react-scroll";
import { links, resume } from '../assets/index.jsx'

const Hero = () => {
  return (
    <div id="home" className=" px-8 xl:px-20 sm:px-16 grid lg:grid-cols-2 mt-6">
      <motion.div
        initial={{ opacity: 0, x: -100}}
        animate={{ opacity: 1, x: 0}}
        transition={{ delay: 1, duration: 0.5}}
      >
        <div className="font-bold text-2xl lg:text-4xl leading-10 lg:leading-relaxed text-white">
          <h2>Hello,</h2>
          <h2>
            This is <span className="text-[#ec4899]">Irfan Ahamed S</span>, I'm
            a passionate and motivated fresher with a strong foundation in{" "}
            <span className="text-[#16f2b3]">Web Development</span>
          </h2>
        </div>
        <div className="flex gap-8 text-3xl lg:text-4xl text-[#ec4899] cursor-pointer mt-6 lg:mt-10">
          {
            links.map((item, index) => (
              <a key={ index } href={ item.link } target="_blank" aria-label="Links">
                <item.icon className="hover:scale-125 transition-all duration-300 ease-in-out" />
              </a>
            ))
          }
        </div>
        <div className="mt-6 lg:mt-10 flex gap-3 lg:gap-8">
          <Link 
            to="contact"
            smooth={ true }
            duration={ 500 }
            offset={ -100 }
          >
            <div className="px-2 py-3 lg:px-6 lg:py-4 lg:font-bold rounded-full text-white bg-gradient-to-r from-[#da22ff] to-[#9733ee] flex items-center gap-2 cursor-pointer">
              CONTACT ME <FaRegCircleUser className="inline" />
            </div>
          </Link>
          <a href={ resume } target="_blank">
            <div className="px-2 py-3 lg:px-6 lg:py-4 lg:font-bold rounded-full text-white bg-gradient-to-r from-[#9733ee] to-[#da22ff] flex items-center gap-2">
              GET RESUME <FaDownload className="inline" />
            </div>
          </a>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity:0, scale: 0 }}
        animate={{ opacity:1, scale: 1 }}
        transition={{
            delay: 0.5,
            duration: 0.5
        }}
        className="border bg-[#15224e] border-[#3b3d5f] rounded-md mt-6 h-fit lg:mx-6">
        <div className="flex items-center gap-3 border-b border-[#3b3d5f] py-4">
          <div className="ml-5 w-3 h-3 bg-[#f87171] rounded-full"></div>
          <div className="w-3 h-3 bg-[#fb923c] rounded-full"></div>
          <div className="w-3 h-3 bg-[#bbf7d0] rounded-full"></div>
        </div>
        <div className="p-4">
          <code className="font-mono text-xs md:text-sm lg:text-base">
            <div className="blink">
              <span className="mr-2 text-pink-500">const</span>
              <span className="mr-2 text-white">coder</span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-gray-400">{"{"}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
              <span className="text-gray-400">'</span>
              <span className="text-amber-300">Irfan Ahamed S</span>
              <span className="text-gray-400">'</span>
              <span className="text-gray-400">,</span>
            </div>
            <div className="ml-4 lg:ml-8">
              <span className="text-white mr-1">skills:</span>
              <span className="text-gray-400">['</span>
              <span className="text-amber-300">ReactJS</span>
              <span className="text-gray-400">', '</span>
              <span className="text-amber-300">Redux</span>
              <span className="text-gray-400">', '</span>
              <span className="text-amber-300">NodeJs</span>
              <span className="text-gray-400">', '</span>
              <span className="text-amber-300">ExpressJs</span>
              <span className="text-gray-400">', '</span>
              <span className="text-amber-300">JavaScript</span>
              <span className="text-gray-400">', '</span>
              <span className="text-amber-300">MongoDB</span>
              <span className="text-gray-400">', '</span>
              {/* <span className="text-amber-300">MySql</span>
              <span className="text-gray-400">', '</span> */}
              <span className="text-amber-300">HTML</span>
              <span className="text-gray-400">', '</span>
              <span className="text-amber-300">CSS</span>
              <span className="text-gray-400">', '</span>
              {/* <span className="text-amber-300">Bootstap</span>
              <span className="text-gray-400">', '</span> */}
              <span className="text-amber-300">TailwindCSS</span>
              <span className="text-gray-400">', '</span>
              <span className="text-amber-300">MaterialUI</span>
              <span className="text-gray-400">'],</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div>
              <span className="text-gray-400">{"}"};</span>
            </div>
          </code>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
