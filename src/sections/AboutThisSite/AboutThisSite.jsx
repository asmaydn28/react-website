import { Col } from "react-bootstrap";
import styles from "./AboutThisSite.module.scss"

function AboutThisSite() {
  return (
    <Col xs={{span:12, order:1}} xl={{span:8, order:2}}   className="mt-5">
      <div className="bg-white shadow-sm border p-5">
          <h2><a href="#" className={`text-decoration-none ${styles.h2about}`}>BU SİTE HAKKINDA</a></h2>
          <p className={`${styles.p1} text-black-50`}>
            Modern Javascript ile yazılmış, güzel, duyarlı, statik olarak oluşturulmuş, tepki veren bir uygulama.
          </p>
      </div>
      <div className="bg-white shadow-sm border border-top-0 p-5">
        <p> Websiteme hoş geldiniz. Lütfen hakkımda daha fazla bilgi edinmekten çekinmeyin veya özgeçmişime, projelerime göz atabilir veya benimle iletişime geçebilirsiniz. </p>
      </div>
    </Col>
  );
}

export default AboutThisSite;