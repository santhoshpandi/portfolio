import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from "react-icons/io5";
import data from "../../data/data.json"
export default function Links() {
  return (
    <>
      <li><a target="_blank" className='text-blue-300' href={data.links[0].url}><IoLogoLinkedin /></a></li>
      <li><a target="_blank" className='text-pink-400' href={data.links[1].url}><IoLogoInstagram /></a></li>
      <li><a target="_blank" className='text-white' href={data.links[2].url}><IoLogoGithub /></a></li>
    </>
  )
}