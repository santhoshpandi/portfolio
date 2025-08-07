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
      className="relative z-[0] flex flex-col justify-center  rounded-lg hover:shadow-[0px_0px_4px_4px] hover:shadow-green-500 md:w-auto ">

      {/* --------  Image --------- */}
      <img className='rounded-t-lg  md:h-[250px] w-full ' src={imgUrl} alt="image" />

      {/* --------  hover part starts👇 --------- */}

      <div className={`
      ${slideUp ? 'md:h-[250px] h-full' : 'h-0 overflow-hidden'}
       absolute top-0 duration-300 bg-slate-900 bg-opacity-95 text-white text-[15px] overflow-y-hidden flex flex-col justify-center items-center rounded-t-lg px-2`}>
        <h1 className='m-2'>
          {description}
        </h1>
        {/* --------  Technologies --------- */}
        <ul className='flex flex-wrap gap-1 justify-evenly items-center py-1'>
          {
            technologies.map((tech, index) => (
              <li key={index} className='bg-[#C4B454] text-black px-2  rounded-sm'>{tech}</li>
            ))
          }
        </ul>
      </div>

      {/* --------  hover part ends☝ --------- */}

      <div className='bg-green-800 text-white px-3  py-2 flex justify-between items-center gap-1.5 rounded-b-lg'>
        <h1 className='font-semibold text-center '>{title}</h1>        

        {/* --------  Links --------- */}
        <div className='flex gap-5 justify-center text-2xl'>
          <a href={sourceCodeLink}> <FaLaptopCode
            className='cursor-pointer hover:text-purple-300' /></a>
          {
            previewLink ?
            <a href={previewLink}> <IoEye
            className='cursor-pointer hover:text-pink-300' /></a>
            : <></>
          }
        </div>
      </div>

    </div>
  )
}