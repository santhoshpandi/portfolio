import { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import { useLocation, useNavigate } from "react-router";

export default function Header() {
  const [slideMenu, setSlideMenu] = useState(false);
  const [active, setActive] = useState<string>("home");

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { section: id } });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  /* ---------- Intersection Observer ---------- */
  useEffect(() => {

    if (location.pathname !== "/") return;

    const sections = navItems
      .map(item => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -40% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };

  }, [location.pathname]);
  /* ------------------------------------------- */

  return (
    <>
      <div className=" text-green-400 p-[18px] flex items-center justify-between text-[18px] backdrop-blur-md  sticky top-0 left-0 right-0 	max-w-[81rem] mx-auto z-100">
        <div className="md:block hidden font-semibold">Santhosh🦊</div>
        <h1 className="md:hidden block  md:text-2xl text-xl font-extrabold text-green-400 font-typewriter">SP</h1>


        {/* Mobile menu button */}
        <div
          onClick={() => setSlideMenu(!slideMenu)}
          className="md:hidden ml-auto mr-4 cursor-pointer hover:scale-110 duration-150"
        >
          <ImMenu />
        </div>

        {/* Navigation Links */}
        <div
          className={`duration-200 md:flex md:flex-row md:gap-4 md:static fixed md:w-auto w-full z-[1] flex flex-col left-0 md:h-auto md:rounded-none rounded-sm top-[64px]
        md:bg-transparent bg-green-900 text-white
        ${slideMenu ? "h-[255px]" : "h-0 md:h-auto overflow-hidden md:overflow-visible"}`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setActive(item.id);
                setSlideMenu(false);
              }}
              className={`inline-block px-[18px] py-3 md:p-2 relative navItems cursor-pointer hover:scale-105
            ${active === item.id ? "activeNav" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <a href="/portfolio/assets/resume/my_resume.pdf" download='resume' className="flex gap-2 items-center bg-green-400 text-black md:px-2 py-1 rounded-sm md:text-[16px] px-1 text-[13px] hover:bg-green-800 hover:text-white duration-150">
          Resume <FaDownload />
        </a>
      </div>

      {/* Mobile menu Overlay */}
      <span
        className={`fixed bg-slate-900/50 top-0 bottom-0 right-0 left-0 z-50 ${slideMenu ? "" : "invisible"}`}
        onClick={() => setSlideMenu(false)}
      ></span>
    </>
  );
}