import TypeWriter from './animations/TypeWriter'
import Links from './template/Links'
import data from '../data/data.json'
import { motion } from 'framer-motion'

import image from '../assets/illustrations/hero_image.jpg'

export default function Hero() {

  const { name } = data 

  return (
    <section id='hero' className='flex py-[30px] overflow-x-hidden flex-col md:flex-row items-center justify-evenly relative z-10'
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} // animates once when 30% in view

        className='md:w-[50%] md:pl-[55px] md:pr-0 px-[15px] text-white text-[30px] md:text-[40px] md:text-start text-center'>
        Hello ✋<br />
        I'm <span className='text-purple-400 md:text-[50px] text-[40px]'>{name}</span>
        <TypeWriter />
        <ul className='flex md:justify-normal justify-center gap-4 text-[30px] mt-3'>
          <Links />
        </ul>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
          transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="md:w-[50%] md:block hidden mt-2 overflow-hidden p-2"
      >
        <img
          className="w-[350px] mx-auto object-contain rounded-tr-[10px]
           rounded-tl-[150px] rounded-bl-[10px] rounded-br-[150px] duration-150"
          src={image}
          alt="illustration"
        />
      </motion.div>

    </section>
  )
}