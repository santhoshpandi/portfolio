import data from '../data/data.json'
import { TbExternalLink } from "react-icons/tb";

export default function Certification() {
  return (
    <section id="certification" className="py-16 px-8 bg-[#0d0f1a] text-[#d4f1f4]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#00ff7f] mb-8 py-2 text-center">
        🗃 Certification
      </h2>
      <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {
          data.certifications.map((cert, index) => (
            <div data-aos="zoom-in-up" key={index} className="relative p-5 bg-[#24272e8e] rounded-lg border border-[#00ff7f]/30 flex flex-col md:flex-row items-center gap-4 h-full ">
              {
                cert.image &&
                <img
                  src={'/portfolio/assets/certificates/' + cert.image}
                  alt={cert.name}
                  className="w-28 h-28 md:w-36 md:h-36 object-contain rounded-md shadow-md"
                />
              }
              <div>
                <h3 className="text-xl font-semibold mb-1">{cert.name}</h3>
                <p className="text-[#00ff7f] mb-1">{cert.institution}</p>
                <section className="flex gap-2 items-center mb-1">
                  {
                    cert.id &&
                    <p>
                      Credential Id: <span className="text-[#00ff7f]">
                        {cert.id}
                      </span>
                    </p>
                  }
                  {
                    cert.link &&
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <TbExternalLink className="text-xl text-[#32ff7e]" />
                    </a>
                  }
                </section>
                <p className="absolute top-0 right-0 bg-[#00ff7f]/10 text-[#00ff7f] text-sm px-2 py-1 rounded-tr-md border border-[#00ff7f]/50">
                  {cert.year}
                </p>
                <p className="text-[#fbffc1] hidden md:block">
                  {cert.description}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}