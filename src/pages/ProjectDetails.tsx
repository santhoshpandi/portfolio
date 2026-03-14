import { useParams, Link } from "react-router";
import data from "../data/data.json";
import type { Project } from "../data/data.type";
import ProjectTemplate from "../components/template/ProjectTemplate";

export default function ProjectDetails() {

  const { id } = useParams();
  const project: Project | undefined =
    data.projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="text-center text-green-400 py-20">
        Project not found
      </div>
    );
  }
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 text-white">

      {/* Back button */}
      <div className="flex justify-end mb-6">
        <Link
          to="/projects"
          className="text-green-400 hover:text-green-300 border border-green-400 px-3 py-1 rounded-md transition"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Project Template */}
      <ProjectTemplate project={project} />

    </section>
  );
}