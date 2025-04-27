import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { ImMenu } from "react-icons/im";

export default function Header(){
  const [slideMenu,setSlideMenu] = useState(false)
  return(
    <div className=" text-green-400 p-[18px] flex items-center justify-between text-[18px] backdrop-blur-md  sticky top-0 left-0 right-0 z-50	max-w-[81rem] mx-auto">
      <div className="md:block hidden font-semibold">Santhosh🦊</div>
      <h1 className="md:hidden block  md:text-2xl text-xl font-extrabold text-green-400 font-typewriter">SP</h1>

      <div 
      onClick={()=>setSlideMenu(!slideMenu)}
      className="md:hidden ml-auto mr-4 cursor-pointer"><ImMenu /></div>

      <ul
      onClick={()=>setSlideMenu(!slideMenu)}
       className={`duration-150 md:flex md:flex-row md:gap-4 md:static fixed  md:w-auto w-full  z-[1] flex flex-col  left-0  md:h-auto md:rounded-none rounded-sm top-[64px] md:bg-transparent bg-green-800 text-white
      ${slideMenu ? 'h-[255px]' : 'h-0 overflow-hidden'}
        `}>
        <li
         className="relative navItems group cursor-pointer px-[18px] py-3 md:p-2"><a href="#home">Home</a>
        </li>
        <li
         className="relative navItems group cursor-pointer px-[18px] py-3 md:p-2"><a href="#about">About</a>
        </li>
        <li className="relative navItems group cursor-pointer px-[18px] py-3 md:p-2"><a href="#certification">Certifications</a></li>
        <li className="relative navItems group cursor-pointer px-[18px] py-3 md:p-2"><a href="#projects">Projects</a></li>       
        <li className="relative navItems group cursor-pointer px-[18px] py-3 md:p-2"><a href="#contact">Contact</a></li>
      </ul>

      <a href="/portfolio/assets/resume/my_resume.pdf" download='resume' className="flex gap-2 items-center bg-green-400 text-black md:px-2 py-1 rounded-sm md:text-xl px-1 text-[13px] hover:bg-green-800 hover:text-white duration-150">
        Resume <FaDownload />
      </a>
    </div>
  )
}