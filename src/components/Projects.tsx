import data from "../data/data.json"
import { motion } from "framer-motion"
import { Link } from "react-router"
import ProjectCard from "./template/ProjectCard"
import type { Project } from "../data/data.type"

export default function Projects() {

  const { projects } = data as { projects: Project[] };

  const sortedProjects = [...projects].sort((a, b) => {
    const dateDiff =
      (new Date(b.completedAt ?? 0).getTime()) -
      (new Date(a.completedAt ?? 0).getTime());

    return dateDiff !== 0 ? dateDiff : b.id - a.id;
  });

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto py-10">

      <h1 className="text-green-400 text-center text-3xl md:text-4xl font-semibold py-2">
        📽 Projects
      </h1>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6 p-5 items-center"
      >
        {sortedProjects.slice(0,5).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {projects.length > 5 && (
          <div className="text-center  mt-4">
            <Link
              to="/projects#"
              className="px-5 py-2 border animate-pulse border-green-400  rounded bg-green-400 text-black transition shadow-xl shadow-green-300"
            >
              View More Projects →
            </Link>
          </div>
        )}
      </motion.div>



    </section>
  )
}