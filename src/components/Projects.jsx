import ProjectTemplate from "./minorComponents/ProjectTemplate"
import data from "../data/data.json"
export default function Projects(){  

  return(
    <div id='projects' className='flex flex-col justify-center items-center py-[20px]'>
      <h1 className="text-green-400 text-center text-[25px] md:text-[35px] font-semibold bg-white bg-opacity-5 w-full relative z-10">Projects</h1>
      <ul className='grid lg:grid-cols-3 md:grid-cols-2 rounded-sm grid-cols-1  gap-10  md:p-[20px] px-[40px] py-[20px] overflow-y-scroll max-h-[800px] ctr'>        
        {
          data.projects.map((project,index)=>(
            <li key={index}><ProjectTemplate project={project} /></li>
          ))
        }
      </ul>
      </div>
  )
}