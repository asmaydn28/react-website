import ProjectCard from "./Card.jsx";
import { projects } from "../projectData";

function CardsProject() {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          text={project.text}
          img={project.img}
          github={project.github}
          netlify={project.netlify}
        />
      ))}
    </>
  );
}

export default CardsProject;
