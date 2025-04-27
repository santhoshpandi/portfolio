import { FaHtml5, FaJs, FaNodeJs, FaGitAlt, FaJava } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiVite, SiPython } from "react-icons/si";

export default function Technologies() {
  return (
    <div id="skills" className="flex flex-col justify-center items-center py-6 relative z-10">
      <h1 className="md:text-[35px] text-[25px] font-semibold text-orange-300  w-full text-center">Technologies</h1><br />

      <div className="text-white md:text-[70px] text-[50px] flex flex-wrap gap-8 md:w-[50%] w-[75%] justify-center">
        <FaHtml5 className="text-orange-400" />
        <IoLogoCss3 className="text-blue-400" />
        <FaJs className="text-yellow-500" />
        <FaReact className="text-blue-500" />
        <RiTailwindCssFill className="text-blue-300" />
        <SiPython className="text-blue-300" />
        <FaNodeJs className="text-green-300" />
        <SiExpress className="text-green-400" />
        <SiMongodb className="text-green-400" />
        <FaGitAlt className="text-red-500" />
        <SiVite className="text-pink-400" />
        <FaJava className="text-red-500" />
      </div>

    </div>
  )
}