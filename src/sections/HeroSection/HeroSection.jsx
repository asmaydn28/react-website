import { Col, Image } from "react-bootstrap";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import styles from "./HeroSection.module.scss";

function HeroSection() {
  return (
    <Col
      xs={{ span: 12, order: 2 }}
      xl={{ span: 4, order: 1 }}
      className="mt-5"
    >
      <div className="text-xl-start text-center">
        <div>
          <Image
            className="shadow"
            src="/img/asmaydn.jpg"
            width={150}
            height={150}
            roundedCircle
            alt="Asım Aydın"
          />
          <h2 className={styles.name}>ASIM AYDIN</h2>
          <a href="mailto:asimaydin.dev@gmail.com" className={styles.gmail}>
            ASİMAYDİN.DEV@GMAİL.COM
          </a>
        </div>

        <hr />

        <h2 className={styles.about}>Hakkında</h2>
        <p>
          Merhaba, ben Asım!
          <br />
          Ordu Üniversitesi mezunu ve tutkulu bir Junior Full Stack
          Developer'ım. Teknoloji ve yazılım dünyasına büyük bir merakla
          bağlıyım, sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyorum.
          Yeni teknolojiler keşfetmek, modern geliştirme araçlarıyla projeler
          üretmek ve karmaşık problemlere çözüm bulmak beni heyecanlandırıyor.
          Frontend ve Backend alanlarında deneyim kazanarak sağlam bir yazılım
          kariyeri inşa etmek için çalışıyorum. Öğrenme yolculuğuma ortak olmak
          veya projelerimi incelemek isterseniz{" "}
          <a
            href="https://github.com/asmaydn28"
            target="_blank"
            className={styles.githubLinkedin}
          >
            GitHub
          </a>{" "}
          veya{" "}
          <a
            href="https://www.linkedin.com/in/as%C4%B1mayd%C4%B1n/"
            target="_blank"
            className={styles.githubLinkedin}
          >
            LinkedIn
          </a>{" "}
          üzerinden bana ulaşabilirsiniz!
        </p>
        <button className="btn btn-outline-secondary">ABOUT ME</button>

        <hr />

        <div className="mb-3">
          <a
            href="https://github.com/asmaydn28"
            target="_blank"
            className={styles.icon}
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/asımaydın"
            target="_blank"
            className={styles.icon}
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:asmaydn2828@gmail.com"
            target="_blank"
            className={styles.icon}
          >
            <CiMail size={20} />
          </a>
        </div>

        <div>
          <p>© ASIM AYDIN</p>
        </div>
      </div>
    </Col>
  );
}

export default HeroSection;
