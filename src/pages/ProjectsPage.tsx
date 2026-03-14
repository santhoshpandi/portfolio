import data from "../data/data.json";
import ProjectCard from "../components/template/ProjectCard";
import { Link } from "react-router";
import type { Project } from "../data/data.type";

export default function ProjectsPage() {

 const { projects } = data as { projects: Project[] };

  const sortedProjects = [...projects].sort((a, b) => {
    const dateDiff =
      (new Date(b.completedAt ?? 0).getTime()) -
      (new Date(a.completedAt ?? 0).getTime());

    return dateDiff !== 0 ? dateDiff : b.id - a.id;
  });


  return (
    <section id="projects" className="max-w-6xl mx-auto md:px-6 md:py-16 px-3 py-8">

      <div className="flex justify-between items-center mb-8">
        <h1 className="md:text-4xl text-xl text-green-400 text-center  font-semibold">
          🚀 All Projects
        </h1>
        <Link to='/'>
          <button
          className="border border-green-400 text-green-400 md:text-xl text-sm px-2 py-1 hover:bg-green-900/80 cursor-pointer transition"
          >⬅ Home</button>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

      </div>

    </section>
  );
}