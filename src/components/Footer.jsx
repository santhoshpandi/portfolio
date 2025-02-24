import Links from "./minorComponents/Links";
export default function Footer(){
  return(
    <div className="flex justify-between items-center p-4 bg-white bg-opacity-5 md:text-[15px] text-[13px] relative z-10">
      <h1 className="md:text-2xl text-xl font-bold text-green-500 font-typewriter">SP</h1>
      <h1 className="text-white">&copy; {new Date().getFullYear()} SanthoshPandi🦋</h1>
      <ul className='flex md:text-[25px] text-[15px] gap-4 '>
      <Links />
      </ul>
    </div>
  )
}