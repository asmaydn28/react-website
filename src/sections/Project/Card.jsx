import { Card, Button } from 'react-bootstrap';

const ProjectCard = ({ title, text, img, github, netlify }) => {
  return (
    <Card className="m-4 rounded-0">
        <Card.Title className='p-2 fw-semibold'>{title}</Card.Title>
        <Card.Text className='ps-2 pb-2'>{text}</Card.Text>
        <Card.Img className='rounded-0' variant="top" src={img} />
      <Card.Body className='bg-secondary-subtle p-0'>
        <Button variant="info" className="w-50 rounded-0 fw-semibold">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white">
            Github
          </a>
        </Button>
        <Button variant="danger" className='w-50 rounded-0 fw-semibold'>
          <a href={netlify} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white">
            Canlı
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;