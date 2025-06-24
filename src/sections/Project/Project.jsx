import { Col } from "react-bootstrap";
import styles from "./Project.module.scss"
import CardsProject from "./CardsProject";



function Project() {
  return (
    <>
      <Col
        xs={{ span: 12, order: 1 }}
        xl={{ span: 8, order: 2 }}
        className="mt-5"
      >
        <div className="bg-white rounded shadow-sm border rounded-0">
          <div className="px-5 py-4">
            <h2>
              <a href="#" className={`${styles.h2about} text-decoration-none`}>
                PROJELERİM
              </a>
            </h2>
          </div>
          <div className="border-top">
            <CardsProject/>
          </div>
        </div>
      </Col>
    </>
  );
}

export default Project;
