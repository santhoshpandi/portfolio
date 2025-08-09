import ProjectTemplate from "./minorComponents/ProjectTemplate"
import data from "../data/data.json"
import { motion } from "framer-motion"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    centerMode: true, // center the current slide
    centerPadding: "60px", // side padding for partial view
    responsive: [
      {
        breakpoint: 1024, // tablets & small laptops
        settings: {
          slidesToShow: 2,
          centerPadding: "30px"
        }
      },
      {
        breakpoint: 768, // mobile view
        settings: {
          slidesToShow: 2,
          centerMode: false, // disable center mode for mobile
          dots: true
        }
      }
    ]
  };

  return (
    // <div id='projects' className='flex flex-col justify-center items-center py-[20px] overflow-x-hidden'>
    //   <h1 className="text-green-400 text-center text-3xl md:text-4xl font-semibold  bg-opacity-5 w-full relative z-10 py-2">📽 Projects</h1>
    //   <motion.ul
    //     initial={{ opacity: 0, rotateX: -90 }}
    //     whileInView={{ opacity: 1, rotateX: 0 }}
    //     transition={{ duration: 0.6, ease: "easeOut" }}
    //     viewport={{ once: true, amount: 0.3 }}
    //     className='grid lg:grid-cols-3 md:grid-cols-2 rounded-sm grid-cols-1  gap-10  md:p-[20px] px-[40px] py-[20px] overflow-y-scroll max-h-[800px] ctr'>
    //     {
    //       data.projects.map((project, index) => (
    //         <li key={index}><ProjectTemplate project={project} /></li>
    //       ))
    //     }
    //   </motion.ul>
    // </div>
    <div className="w-full max-w-6xl mx-auto py-10 ">
      <h1 className="text-green-400 text-center text-3xl md:text-4xl font-semibold  bg-opacity-5 w-full relative z-10 py-2">📽 Projects</h1>
      <motion.div
        initial={{ opacity: 0, rotateX: -90 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="p-5 max-h-[800px] ctr">
        
        <Slider className="md:px-6 px-4 my-auto rounded-lg"  {...settings}>
          {data.projects.map((project, index) => (
            <div key={index}><ProjectTemplate project={project} /></div>
          ))
          }
        </Slider>
      </motion.div>
    </div>
  )
}