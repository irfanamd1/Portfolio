import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { projects } from '../assets'

const Projects = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

  return (
    <div id='projects' className='px-8 xl:px-20 sm:px-16 mt-10'>
        <motion.div 
            ref={ ref }
            initial= {{ opacity: 0, y: 100 }}
            animate= {inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5}}
        >
            <h1 className='bg-[#1a1443] w-fit mx-auto text-white rounded-md px-6 py-2 text-xl lg:text-4xl'>Projects</h1>
        </motion.div>
        <motion.div 
            initial= {{ opacity: 0, y: 100 }}
            animate= {inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5}}
            className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'
        >
            {projects.map((item) => (
                <div className='border border-[#2a2e5a] rounded-md bg-[#0d1225] overflow-hidden mx-6' key={item.id}>
                    <img className='rounded-t-md' src={item.img} alt={item.name} />
                    <div className='p-4'>
                        <p className='text-[#ec4899] text-xl lg:text-2xl font-bold mb-2'>{item.name}</p>
                        <p className='text-white text-sm lg:text-base mb-2'>
                            Tools: <span className='text-gray-400'>[ </span>
                            {item.skills.map((skill, index) => (
                                <span key={index} className="text-amber-300">
                                    {skill}
                                    {index < item.skills.length - 1 && <span className='text-gray-400'>, </span>}
                                </span>
                            ))}
                            <span className='text-gray-400'> ]</span>
                        </p>
                        <p className='text-white text-sm mb-4'>{item.description}</p>
                        <div className='flex justify-end'>
                            <a
                                className='text-center inline-block px-6 py-2 bg-[#ec4899] text-white rounded-md hover:bg-[#d1357e] transition-all'
                                href={item.link}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                View Demo
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>

    </div>
  )
}

export default Projects
