import ProjectCard from "./Card";

function CardsProject() {
  return (
    <>
      <ProjectCard
        title={"React ToDo App"}
        text={"React ile oluşturulmuş basit bir yapılacaklar listesi uygulaması."}
        img={"/img/15.png"}
        github={"https://github.com/asmaydn28/react-todo-app"}
        netlify={"https://asimaydin15.netlify.app/"}
      />

      <ProjectCard
        title={"First React Project"}
        text={"React ile oluşturulmuş İlk projem."}
        img={"/img/14.png"}
        github={"https://github.com/asmaydn28/first-react-project"}
        netlify={"https://asimaydin14.netlify.app/"}
      />
    </>
  );
}

export default CardsProject;
