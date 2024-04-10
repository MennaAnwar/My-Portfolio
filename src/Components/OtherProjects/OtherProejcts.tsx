import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import "./OtherProjects.css";
import otherProjects from "./ProjectsData";

const OtherProjects: FC = () => {
  const handleMouseEnter = () => {
    document.getElementById("c")?.classList.add("view");
  };

  const handleMouseLeave = () => {
    document.getElementById("c")?.classList.remove("view");
  };

  return (
    <>
      <h2>Other Projects</h2>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: -20,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="Swiper3d"
      >
        {otherProjects.map((project, index) => (
          <SwiperSlide key={`project-` + index}>
            <div className="Box">
              <div className="course web text-center">
                <a
                  href={project.link}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="icon">
                    <img src={project.icon} alt={project.title} />
                  </div>
                  <h4>{project.title}</h4>
                  {project.tech.split(" ").map((tech, index) => (
                    <span
                      key={`badge` + index}
                      className="badge rounded-pill bg-primary px-2 py-1 me-2 bg-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default OtherProjects;
