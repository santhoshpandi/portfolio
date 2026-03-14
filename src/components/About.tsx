import imgUrl from '../assets/illustrations/about2.png'
import { motion } from 'framer-motion'
import data from '../data/data.json'

export default function About() {

  const { about } = data;

  return (
    <motion.section
      initial={{ opacity: 0, scale: 1.2, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      id='about' className='flex overflow-x-hidden bg-slate-800 py-[30px] flex-col md:flex-row justify-evenly items-center  bg-opacity-5 relative z-10 '>
      <div className='md:w-1/2 md:text-[18px] text-[15px]  text-white px-[20px]  leading-8'>
        <h1 className='text-2xl mb-2'>About Me 👌</h1>
        {
          about.map((data, index) => (
            <li key={index}>{data}</li>
          ))
        }
      </div>
      <div className='md:w-[30%] w-[70%] '>
        <img
          className='w-full h-full'
          src={imgUrl} alt="illlustration"
        />
      </div>
    </motion.section>
  )
}