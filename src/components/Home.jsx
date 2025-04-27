import imgUrl from '../assets/illustrations/home1.png'
import TypeWriter from './minorComponents/TypeWriter'
import Links from './minorComponents/Links'
import data from '../data/data.json'

export default function Home(){
  return(
    <div id='home' className='flex py-[30px] flex-col md:flex-row items-center justify-evenly relative z-10'
   >
      <div className='md:w-[50%] md:pl-[55px] md:pr-0 px-[15px] text-white text-[30px] md:text-[40px] md:text-start text-center'>
        Hello ✋<br />
        I'm <span className='text-purple-400 md:text-[50px] text-[40px]'>{data.name}</span>
         <TypeWriter />
         <ul className='flex md:justify-normal justify-center gap-4 text-[30px] mt-3'>
         <Links />
         </ul>
      </div>

      <div className='md:w-[50%] md:block hidden mt-2 w-[45%]'>
        <img 
        className='w-full h-full' 
        src={imgUrl} alt="illlustration"        
         />
      </div>
    </div>
  )
}