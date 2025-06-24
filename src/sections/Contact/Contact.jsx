import { Col } from "react-bootstrap";
import styles from "./Contact.module.scss";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Contact() {
  return (
    <>
      <Col
        xs={{ span: 12, order: 1 }}
        xl={{ span: 8, order: 2 }}
        className="my-5"
      >
        <div className="bg-white rounded shadow-sm border rounded-0">
          <div className="p-5">
            <h2>
              <a href="#" className={`${styles.h2about} text-decoration-none`}>
                İLETİŞİM
              </a>
            </h2>
          </div>
          <div className="border-top p-5">
            <p>
              İletişime geçmekten çekinmeyin. Bana şu adresten e-posta
              gönderebilirsiniz:
              <br />
              <a
                href="mailto:asimaydin.dev@gmail.com"
                className="text-decoration-none text-dark"
              >
                asimaydin.dev@gmail.com
              </a>
            </p>
          </div>
          <div className="mx-5 mb-5">
            <a href="https://github.com/asmaydn28" target="_blank" className="me-4 text-dark">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/as%C4%B1mayd%C4%B1n/" target="_blank" className="me-4 text-dark">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:asmaydn2828@gmail.com" className="text-dark">
              <CiMail size={20} />
            </a>
          </div>
        </div>
      </Col>
    </>
  );
}

export default Contact;
