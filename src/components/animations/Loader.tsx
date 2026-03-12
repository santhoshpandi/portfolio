import imgUrl from '/assets/loader_gif.gif'

export default function Loader(){
  return(
    <div className='flex justify-center items-center h-screen w-screen overflow-x-hidden'>
      <img src={imgUrl} 
      alt="Loading..." 
      className='md:w-[20%] w-[40%]'
      />
    </div>
  )
}