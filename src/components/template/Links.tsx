import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from "react-icons/io5";
import { FaFacebook, FaDiscord } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import data from "../../data/data.json"

export default function Links() {

  const { links } = data

  const iconList = [
    { name: "linkedin", icon: <IoLogoLinkedin />, color: 'text-blue-400' },
    { name: "github", icon: <IoLogoGithub />, color: 'text-white' },
    { name: "instagram", icon: <IoLogoInstagram />, color: 'text-pink-400' },
    { name: "leetcode", icon: <SiLeetcode />, color: 'text-orange-400' },
    { name: "facebook", icon: <FaFacebook />, color: 'text-blue-600' },
    { name: "discord", icon: <FaDiscord />, color: 'text-violet-400' },
    { name: "x", icon: <FaXTwitter />, color: 'text-white' },
    { name: "youtube", icon: <FaYoutube />, color: 'text-red-500' },
  ]

  return (
    <div className="flex gap-3 justify-between items-center flex-wrap">
      {
        links.map((link, index) => {
          const icon = iconList.find(icon => icon.name === link.name.toLowerCase().trim())

          if (icon) {
            return (<li key={index}>
              <a target="_blank"
                className={`${icon.color}`}
                href={data.links[1].url}>{icon.icon}</a>
            </li>)
          }
        })
      }
    </div>
  )
}