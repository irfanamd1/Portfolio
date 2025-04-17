import React from 'react'
import { profilePic, proPic } from '../assets/index.jsx'
import { useInView } from 'react-intersection-observer'
import { motion } from 'motion/react'

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
            <div className='grid lg:grid-cols-2'>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate= {inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6, duration: 0.5}}
                    className=' mx-auto mt-10 order-1 lg:order-2 '
                >
                    <img className='w-[240px] h-[300px] grayscale rounded-md hover:grayscale-0 hover:scale-110 transition-all ease-in-out duration-700' src={ proPic } alt="Irfan Ahamed" />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: -100}}
                    animate= {inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.5}}
                    className='mt-10 text-white text-base lg:text-[18px] lg:leading-8 order-2 lg:order-1 '
                >
<p>My name is Irfan Ahamed, and I am a highly motivated and passionate Full Stack Web Developer with a solid foundation in both frontend and backend technologies. I specialize in building dynamic, user-focused web applications using modern tools such as HTML, CSS, JavaScript, Bootstrap, TailwindCSS, MaterialUI, and React.js on the frontend, alongside Node.js, Express, and RESTful APIs on the backend. I am also proficient in managing and optimizing databases with MongoDB to ensure high-performance and scalable solutions. I thrive in collaborative environments and am eager to contribute to innovative teams and impactful projects. I am actively seeking job opportunities that align with my skills and enthusiasm for full stack web development.</p>                </motion.div>
            </div>
        </motion.div>
    </div>
  )
}

export default About
