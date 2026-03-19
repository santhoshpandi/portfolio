import type { Project } from '../../data/data.type'
import comingSoonUrl from '../../assets/illustrations/coming_soon.jpg'
import { useNavigate } from 'react-router'
import { parseDate } from '../../utils/date'

interface Props {
  project: Project
}

function ProjectTemplate({ project }: Props) {

  const { id, image, title, description, sourceCodeLink, previewLink, technologies, completedAt } = project

  const monthYear = completedAt ? parseDate(completedAt).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric"
  }) : null

  const navigate = useNavigate();

  let imgUrl = (image && image !== '')
    ? "/portfolio/assets/project_images/" + image
    : comingSoonUrl;
  return (
    <div onClick={() => navigate(`/projects/${id}`)}>
      {/* Hero */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">

        <img
          src={imgUrl}
          alt={title}
          onError={(e) => {
            (e.target as HTMLImageElement).src = comingSoonUrl;
          }}
          className="rounded-xl shadow-lg border border-green-500/20 w-full"
        />

        <div>

          <div className="text-3xl md:text-5xl font-bold text-green-400 mb-4 flex flex-wrap gap-3">
            <h3>{title}</h3>
            {monthYear && (
              <span
                className=" inline gap-1
                      text-xs md:text-sm
                      px-3 py-1
                      rounded-full
                      border border-green-400/40
                      text-green-300
                      shadow-[0_0_10px_rgba(34,197,94,0.35)]
                    "
              >
                {monthYear}
              </span>
            )}
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-8">
            {technologies.map((tech,index) => (
              <span
                key={tech+index}
                className="px-3 py-1 text-sm bg-green-400/10 border border-green-400/30 text-green-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-wrap gap-4">

            {previewLink && (
              <a
                href={previewLink}
                target="_blank"
                className="md:px-5 px-3  md:py-2 py-1  bg-green-400 text-black rounded-md hover:bg-green-300 transition"
              >
                Live Demo
              </a>
            )}

            {sourceCodeLink && (
              <a
                href={sourceCodeLink}
                target="_blank"
                className="md:px-5 px-3  md:py-2 py-1  border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-black transition"
              >
                Source Code
              </a>
            )}

          </div>

        </div>
      </div></div>
  )
}

export default ProjectTemplate