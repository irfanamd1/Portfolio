import React, { useEffect, useState } from 'react'
import { IoMenu, IoClose } from "react-icons/io5";
import { motion } from 'motion/react'
import { Link } from 'react-scroll'
import { navItems } from '../assets';

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const [activeItem, setActiveItem] = useState('home');

    const variants = {
        open: {
            clipPath: 'circle(1000px at 90% 5%)',
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 20
            }
        },
        closed: {
            clipPath: 'circle(30px at 90% 5%)',
            opacity: 0,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        }
    }   

    return (
        <div className='fixed top-0 right-0 w-full z-40'>
            {/* Desktop Navbar */}
            <motion.div 
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='hidden lg:flex justify-between items-center bg-[rgb(82_76_92_/_30%)] backdrop-blur-[8px] w-full px-6 xl:px-16 sm:px-12 max-w-[100rem] py-6 mx-auto'
            >
                <div className='text-3xl font-bold flex items-center gap-2'>
                    <span className='text-white'>Irfan</span>
                    <span className='text-[#ec4899]'>Ahamed</span>
                </div>
                <div className='flex items-center justify-between list-none gap-14 text-white text-lg cursor-pointer'>
                    {navItems.map(({ id, text, to }) => (
                        <Link
                            key={id} 
                                className={`cursor- list-none hover:text-[#16f2b3] ${activeItem === to ? 'active' : ''}`}
                                to={to}
                                smooth={true}
                                duration={500}
                                offset={-100}
                            onClick={ () => setActiveItem(to) }
                        >
                            {text}
                        </Link>
                    ))}
                </div>
            </motion.div>

            {/* Mobile Navbar */}
            <div className='lg:hidden flex justify-between items-center bg-[rgb(82_76_92_/_30%)] backdrop-blur-[8px] w-full px-6 xl:px-16 sm:px-12 max-w-[100rem] py-6'>
                <motion.div
                    initial={{ opacity: 0, x: -100, y: 0 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-xl lg:text-2xl font-bold flex items-center gap-2'>
                    <span className='text-white'>Irfan</span>
                    <span className='text-[#ec4899]'>Ahamed</span>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 100, y: 0 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-white text-2xl cursor-pointer'>
                    {menu ? (
                        <IoClose aria-label="Close menu" onClick={() => setMenu(false)} />
                    ) : (
                        <IoMenu aria-label="Open menu" onClick={() => setMenu(true)} />
                    )}
                </motion.div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className="fixed top-16 right-0 bottom-0 bg-[#0a0d37] border-2 border-[#3b3d5f] rounded-md backdrop-blur-[18px] mr-4 w-[90%] h-fit z-20"
                initial={false}
                animate={menu ? 'open' : 'closed'}
                variants={variants}
                style={{ clipPath: 'circle(30px at 90% 5%)' }}
            >
                <div className="flex flex-col gap-4 text-white text-base px-4 py-6">
                    {navItems.map(({ id, text, to }) => (
                        <div
                            key={id}
                            className={`cursor-pointer ${activeItem === to ? 'active' : ''}`}

                        >
                            <Link
                                to={ to }
                                smooth={ true }
                                duration={ 500 }
                                offset={ -100 }
                                onClick={() => { setMenu(false), setActiveItem(to) }}
                            >
                                {text}
                            </Link>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Navbar
