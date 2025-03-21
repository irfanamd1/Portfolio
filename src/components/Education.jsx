import React from 'react'
import edu from '../assets/edu.png'
import { FaSchool } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

const Education = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

  return (
    <div id='education' className='px-8 xl:px-20 sm:px-16 mt-10'>
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
        >
            <h1 className='bg-[#1a1443] w-fit mx-auto text-white rounded-md px-6 py-2 text-xl lg:text-4xl'>Education</h1>
        </motion.div>
      <div className='grid lg:grid-cols-2'>
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className='flex items-center justify-center'
        >
            <img className='w-80' src={ edu } alt="" />
        </motion.div>
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
            className='flex flex-col gap-4 mt-10 lg:mx-6'
        >
            <div className='bg-[#101123] border border-[#2a2e5a] rounded-md cursor-pointer hover:border-violet-800 hover:scale-105 transition-all duration-700 ease-in-out'>
                <div className='flex gap-4 p-4'>
                    <IoSchool className='text-violet-600 text-[80px] lg:text-[50px] mt-8 mr-4' />
                    <div>
                        <p className='text-center text-[#16f2b3]'>2023 - 2025</p>
                        <p className='text-xl lg:text-2xl text-gray-100 my-2'>Master of Computer Applications (MCA)</p>
                        <p className='text-white text-base'>Jamal Mohamed College, Tiruchirappalli</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#101123] border border-[#2a2e5a] rounded-md cursor-pointer hover:border-violet-800 hover:scale-105 transition-all duration-700 ease-in-out'>
                <div className='flex gap-4 p-4'>
                    <IoSchool className='text-violet-600 text-[80px] lg:text-[50px] mt-10 mr-4' />
                    <div>
                        <p className='text-center text-[#16f2b3]'>2020 - 2023</p>
                        <p className='text-xl lg:text-2xltext-2xl text-gray-100 my-2'>Bachelor of Computer Applications (BCA)</p>
                        <p className='text-white text-base'>Noorul Islam College of Arts and Science, Kumaracoil</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#101123] border border-[#2a2e5a] rounded-md cursor-pointer hover:border-violet-800 hover:scale-105 transition-all duration-700 ease-in-out'>
                <div className='flex gap-4 p-4'>
                    <FaSchool className='text-violet-600 text-[80px] lg:text-[50px] mt-8 mr-4' />
                    <div>
                        <p className='text-center text-[#16f2b3]'>2019 - 2020</p>
                        <p className='text-xl lg:text-2xltext-2xl text-gray-100 my-2'>Higher Secondary Certificate (HSC)</p>
                        <p className='text-white text-base'>St. Joseph's Matriculation Higher Secondary School, Nagercoil</p>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Education
