import { FaLaptopCode } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import type { Project } from "../../data/data.type";
import comingSoonUrl from '../../assets/illustrations/coming_soon.jpg'
import { FiCalendar } from "react-icons/fi";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {

  const navigate = useNavigate();

  const { id, title, image, sourceCodeLink, previewLink, technologies, completedAt } = project;

  let imgUrl = (image && image !== '')
    ? "/portfolio/assets/project_images/" + image
    : comingSoonUrl;

  const monthYear = completedAt ? new Date(completedAt).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric"
  }) : null

  return (
    <div
      onClick={() => navigate(`/projects/${id}`)}
      className="
      group cursor-pointer
      flex flex-col
      rounded-xl
      overflow-hidden relative
      border border-green-500/20
      bg-slate-900/70
      backdrop-blur
      transition duration-300
      hover:scale-[1.03]
      hover:border-green-400
      hover:shadow-[0_0_20px_rgba(34,197,94,0.35)]
      "
    >

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          onError={(e) => {
            (e.target as HTMLImageElement).src = comingSoonUrl;
          }}
          className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4 justify-between">

        <div>
          <h2 className="text-lg font-semibold text-green-400 mb-2">
            {title}
          </h2>

          {/* <p className="text-gray-300 text-sm mb-3 line-clamp-3">
          {description}
        </p> */}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 5).map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded bg-green-500/10 border border-green-500/30 text-green-300"
              >
                {tech}
              </span>
            ))}

            {technologies.length > 5 && (
              <span className="text-xs px-2 py-1 rounded bg-green-500/10 border border-green-500/30 text-green-300">
                +{technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Links */}
        <div
          className="flex gap-4 text-xl text-white"
          onClick={(e) => e.stopPropagation()}
        >
          {sourceCodeLink && (
            <a
              href={sourceCodeLink}
              target="_blank"
              className="hover:text-purple-400 transition"
            >
              <FaLaptopCode />
            </a>
          )}

          {previewLink && (
            <a
              href={previewLink}
              target="_blank"
              className="hover:text-pink-400 transition"
            >
              <IoEye />
            </a>
          )}
        </div>
      </div>

      {monthYear && (
        <span
          className="
    absolute bottom-3 right-3
    flex items-center gap-1
    text-xs md:text-sm
    px-3 py-1
    rounded-full
    bg-green-500/10
    border border-green-400/40
    text-green-300
    backdrop-blur-md
    shadow-[0_0_10px_rgba(34,197,94,0.35)]
  "
        >
          <FiCalendar size={12} />
          {monthYear}
        </span>
      )}
    </div>
  );
}