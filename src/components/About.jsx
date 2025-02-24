import imgUrl from '../assets/illustrations/about2.png'

export default function About() {
  return (
    <div id='about' className='flex py-[30px] flex-col md:flex-row justify-evenly items-center bg-white bg-opacity-5 relative z-10'>
      <div className='md:w-1/2  text-white px-[20px]  leading-8'>
        <h1 className='text-2xl mb-2'>About Me</h1>
        <li>
          A motivated
          <b className='text-green-400'> Full-Stack developer </b>
          with a solid foundation in <b className='text-red-400'>JavaScript</b>, <b className='text-orange-400'>Node.js</b>, <b className='text-blue-400'> React.js</b>, <b className='text-yellow-400'> Express.js</b>, and <b className='text-green-400'> MongoDB</b>.
        </li>
        <li>
          I am quick to learn new technologies and committed to continuous growth.</li>
        <li>
          Eager to contribute to innovative projects and collaborate with dynamic teams.
        </li>
      </div>
      <div className='md:w-[30%] w-[70%] '>
        <img
          className='w-full h-full'
          src={imgUrl} alt="illlustration"
        />
      </div>
    </div>
  )
}