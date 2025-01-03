import { useState } from 'react';
import { FaLaptopCode } from "react-icons/fa";
import { IoEye } from "react-icons/io5";

export default function ProjectTemplate({ project }) {
  const [slideUp, setSlideUp] = useState(false)

  //Destructuring Props
  const { title, image, description, sourceCodeLink, previewLink, technologies } = project

  //Project Images available in Public folder
  const imgUrl = '/portfolio/assets/project_images' + image

  return (
    <div
      onMouseEnter={() => setSlideUp(true)}
      onMouseLeave={() => setSlideUp(false)}
      className="relative z-[0] duration-150   flex flex-col justify-center  rounded-sm hover:shadow-[0px_0px_4px_4px] hover:shadow-green-500 md:w-auto ">

      {/* --------  Image --------- */}
      <img className='rounded-t-sm  md:h-[300px] w-full h-[200px]' src={imgUrl} alt="image" />

      {/* --------  hover part --------- */}

      <div className={`
      ${slideUp ? 'md:h-[300px] h-[200px]' : 'h-0 overflow-hidden'}
       absolute top-0 duration-150 bg-slate-900 bg-opacity-80 text-white text-[15px] flex justify-center items-center rounded-t-sm`}>
        <h1 className='m-4'>
          {description}
        </h1>
      </div>

      {/* --------  hover part ends --------- */}

      <div className='bg-green-800 text-white px-2  py-3 flex justify-center items-center flex-col gap-3 rounded-b-sm'>
        <h1 className='font-semibold text-center '>{title}</h1>

        {/* --------  Technologies --------- */}
        <ul className='flex flex-wrap gap-3 justify-evenly items-center py-1'>

          {
            technologies.map((tech, index) => (
              <li key={index} className='bg-[#C4B454] text-black px-2  rounded-sm'>{tech}</li>
            ))
          }
        </ul>

        {/* --------  Links --------- */}
        <div className='flex gap-5 justify-center text-2xl'>
          <a href={sourceCodeLink}> <FaLaptopCode
            className='cursor-pointer hover:text-purple-300' /></a>
          <a href={previewLink}> <IoEye
            className='cursor-pointer hover:text-pink-300' /></a>
        </div>
      </div>

    </div>
  )
}