import { motion } from "framer-motion";
import data from '../data/data.json'

export default function Technologies() {

  const { technologies } = data

  const float = {
    y: [0, -5, 0],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <div className="bg-gradient-to-b from-black via-[#0b0f1a] to-black text-white  py-16 px-6 font-mono space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-green-400 py-2">
        👨‍🚀 My Tech Universe
      </h1>

      <div data-aos="flip-down" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {technologies.map((section, i) => (
          <div
            key={i}
            className=" border border-green-400 rounded-xl p-6 shadow-[0_0_10px_#00ff0060] hover:shadow-[0_0_20px_#00ff0090] transition-shadow"
          >
            <h2 className="text-xl font-bold text-green-400 mb-4 text-center">
              {section.title}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              {section.techs.map((tech, j) => (
                <motion.div
                  key={j}
                  animate={float}
                  className="bg-[#0f172a] text-green-300 border border-green-600 rounded-md px-3 py-2 text-center text-sm md:text-base flex items-center"
                >
                  {tech}
                </motion.div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}