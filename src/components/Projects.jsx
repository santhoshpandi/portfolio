import ProjectTemplate from "./minorComponents/ProjectTemplate"
import data from "../data/data.json"
import { motion } from "framer-motion"

export default function Projects() {

  return (
    <div id='projects' className='flex flex-col justify-center items-center py-[20px] overflow-x-hidden'>
      <h1 className="text-green-400 text-center text-3xl md:text-4xl font-semibold  bg-opacity-5 w-full relative z-10 py-2">📽 Projects</h1>
      <motion.ul
        initial={{ opacity: 0, rotateX: -90 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className='grid lg:grid-cols-3 md:grid-cols-2 rounded-sm grid-cols-1  gap-10  md:p-[20px] px-[40px] py-[20px] overflow-y-scroll max-h-[800px] ctr'>
        {
          data.projects.map((project, index) => (
            <li key={index}><ProjectTemplate project={project} /></li>
          ))
        }
      </motion.ul>
    </div>
  )
}