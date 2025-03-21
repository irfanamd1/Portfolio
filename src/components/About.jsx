import React from 'react'
import profilePic from '../assets/profilePic.jpg'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const About = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

  return (
    <div id='about' className='px-8 xl:px-20 sm:px-16 mt-10'>
        <motion.div 
            ref={ ref }
            initial= {{ opacity: 0, y: 100 }}
            animate= {inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5}}
        >
            <h1 className='bg-[#1a1443] w-fit mx-auto text-white rounded-md px-6 py-2 text-xl lg:text-4xl'>About Me</h1>
        </motion.div>
        <div className='grid lg:grid-cols-2'>
            <motion.div 
                ref={ ref }
                initial={{ opacity: 0 }}
                animate= {inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.5}}
                className=' mx-auto mt-10 order-1 lg:order-2 '
            >
                <img className='w-[280px] h-[300px] grayscale rounded-md hover:grayscale-0 hover:scale-110 transition-all ease-in-out duration-700' src={ profilePic } alt="Irfan Ahamed" />
            </motion.div>
            <motion.div 
                ref={ ref }
                initial={{ opacity: 0, x: -100}}
                animate= {inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5}}
                className='mt-10 text-white text-base lg:text-[20px] lg:leading-8 order-2 lg:order-1 '
            >
                <p>My Name is Irfan Ahamed and I'm Motivated and passionate Full Stack Web Developer with a strong foundation in frontend and backend technologies. Skilled in creating dynamic, user-centered applications using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, Material UI, React.js, Node.js, Express, and REST APIs. Proficient in managing data with MongoDB and MySQL to deliver seamless and efficient performance. Eager to collaborate with innovative teams and contribute to impactful projects. Open to job opportunities that match my skills and passion for web development.</p>
            </motion.div>
        </div>
    </div>
  )
}

export default About
