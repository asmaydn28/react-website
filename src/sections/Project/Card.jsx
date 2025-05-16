import { Card, Button } from "react-bootstrap";

const ProjectCard = ({ title, text, img, github, netlify }) => {
  return (
    <Card className="m-4 rounded-0">
      <Card.Title className="p-2 fw-semibold">{title}</Card.Title>
      <Card.Text className="ps-2 pb-2">{text}</Card.Text>
      <Card.Img className="rounded-0" variant="top" src={img} />
      <Card.Body className="bg-secondary-subtle p-0">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary text-decoration-none text-white w-50 rounded-0 fw-semibold"
        >
          Github
        </a>

        <a
          href={netlify}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-danger text-decoration-none text-white w-50 rounded-0 fw-semibold"
        >
          Canlı
        </a>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
