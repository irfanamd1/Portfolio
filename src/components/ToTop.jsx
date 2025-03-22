import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa6";
import { Link } from 'react-scroll';

const ToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <Link
      to="home"
      smooth={true}
      duration={500}
      offset={-100}
      className="cursor-pointer"
    >
      <div className="fixed bottom-4 right-4 w-10 h-10 bg-gradient-to-r from-[#da4453] to-[#89216b] rounded-full flex items-center justify-center">
        <FaArrowUp className="text-white" />
      </div>
    </Link>
  );
};

export default ToTop;
