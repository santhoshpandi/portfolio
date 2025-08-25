import ProjectTemplate from "./minorComponents/ProjectTemplate"
import data from "../data/data.json"
import { motion } from "framer-motion"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Projects() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div id="projects" className="w-full max-w-6xl mx-auto py-10 ">
      <h1 className="text-green-400 text-center text-3xl md:text-4xl font-semibold  bg-opacity-5 w-full relative z-10 py-2">📽 Projects</h1>
      <motion.div
        initial={{ opacity: 0, rotateX: -90 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="p-5 max-h-[800px] ctr">

        <Carousel
          swipeable
          draggable
          showDots
          autoPlay
          autoPlaySpeed={3000}
          infinite
          responsive={responsive}
          itemClass="p-3"          
          containerClass="pb-6"
          className="md:px-6 px-4 my-auto rounded-lg ">
          {data.projects.map((project, index) => (
            <div key={index}>
              <ProjectTemplate project={project} />
            </div>
          ))
          }
        </Carousel>
      </motion.div>
    </div>
  )
}