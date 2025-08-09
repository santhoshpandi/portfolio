import TypeWriter from './minorComponents/TypeWriter'
import Links from './minorComponents/Links'
import data from '../data/data.json'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

import image1 from '../assets/illustrations/space_cute_images/image1.jpg'
import image2 from '../assets/illustrations/space_cute_images/image2.jpg'
import image3 from '../assets/illustrations/space_cute_images/image3.jpg'
import image4 from '../assets/illustrations/space_cute_images/image4.jpg'
import image5 from '../assets/illustrations/space_cute_images/image5.jpg'
import image6 from '../assets/illustrations/space_cute_images/image6.jpg'
import image7 from '../assets/illustrations/space_cute_images/image7.jpg'
import image8 from '../assets/illustrations/space_cute_images/image8.jpg'

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

export default function Home() {

  const [currentImage, setCurrentImage] = useState(
    images[Math.floor(Math.random() * images.length)]
  );

   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval); // cleanup when unmounted
  }, []);

  const float = {
    y: [0, -15, 0],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <div id='home' className='flex py-[30px] overflow-x-hidden flex-col md:flex-row items-center justify-evenly relative z-10'
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} // animates once when 30% in view

        className='md:w-[50%] md:pl-[55px] md:pr-0 px-[15px] text-white text-[30px] md:text-[40px] md:text-start text-center'>
        Hello ✋<br />
        I'm <span className='text-purple-400 md:text-[50px] text-[40px]'>{data.name}</span>
        <TypeWriter />
        <ul className='flex md:justify-normal justify-center gap-4 text-[30px] mt-3'>
          <Links />
        </ul>
      </motion.div>

      <motion.div        
        animate={float}
        className="md:w-[50%] md:block hidden mt-2 overflow-hidden p-2"
      >
        <img
          className="w-[350px] mx-auto object-contain rounded-tr-[10px]
           rounded-tl-[150px] rounded-bl-[10px] rounded-br-[150px] duration-150"
          src={currentImage}
          alt="illustration"
        />
      </motion.div>

    </div>
  )
}