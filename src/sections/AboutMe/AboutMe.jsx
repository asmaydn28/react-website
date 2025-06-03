import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Col } from 'react-bootstrap';
import styles from "./AboutMe.module.scss"

function AboutMe() {
  return (
    <>
      <Col xs={{span:12, order:1}} xl={{span:8, order:2}} className="mt-5">
        <div className="bg-white rounded shadow-sm border rounded-0">

          <div className='p-4'>
            <h2><a className={`text-decoration-none ${styles.aAboutMe}`} href="#">Hakkımda</a></h2>
          </div>

          <div className='border-top'>
            <div className='p-4'>
              <h1 className={styles.h1AboutMe}>Merhaba, Ben Asım – Yazılım Geliştirme Tutkunu Bir Junior Adayı</h1>
              <p className={styles.pAboutMe}>
                Çocukluğumdan beri bilgisayarlara duyduğum derin ilgi, beni yazılım dünyasının büyüleyici evrenine yöneltti. Lise yıllarımda Bilgisayar Teknik Servis alanında aldığım eğitim, teknolojinin donanım ve yazılım bileşenlerine dair sağlam bir temel oluşturmamı sağladı. Bu süreçte edindiğim merak ve öğrenme aşkı, üniversitede Bilgisayar Programlama bölümüne adım atmamla birlikte profesyonel bir boyut kazandı.
              </p>

              <h1 className={styles.h1AboutMe}>Eğitim ve Tecrübe Yolculuğum</h1>
              <p className={styles.pAboutMe}>
                Akademik hayatım boyunca yalnızca teorik bilgilerle yetinmedim - sürekli olarak pratik projeler geliştirerek kendimi ileri taşımaya odaklandım. Üniversite laboratuvarlarında geçirdiğim uzun saatler, katıldığım hackathonlar ve kişisel projelerim sayesinde problem çözme yeteneğimi geliştirirken aynı zamanda takım çalışmasının önemini de içselleştirdim.

                Şu anda Junior Full Stack Developer olarak kariyerime devam ederken, her gün yeni teknolojiler öğrenmek ve bu bilgilerimi gerçek dünya uygulamalarına dönüştürmek benim için bir tutku haline geldi. Frontend'den backend'e uzanan bu yolculukta modern framework'ler ve programlama dilleri üzerine derinlemesine çalışıyorum.
              </p>
              
              <h1 className={styles.h1AboutMe}>Vizyonum ve Hedeflerim</h1>
              <p className={styles.pAboutMe}>
                Yazılım sektöründe kalıcı bir iz bırakmak için sürekli öğrenmeye ve kendimi geliştirmeye inanıyorum. Önümüzdeki dönemde özellikle yapay zeka entegrasyonlu web uygulamaları ve scalable sistem tasarımları üzerine odaklanmayı planlıyorum.

                "Kod yazmak benim için sadece bir meslek değil, aynı zamanda yaratıcılığımı ifade etme biçimim. Her proje, çözülmeyi bekleyen yeni bir bilmece ve öğrenilecek yeni bir ders."

                Eğer benimle iletişime geçmek, projelerimi incelemek ya da sadece teknoloji üzerine sohbet etmek isterseniz, LinkedIn ve GitHub profillerim üzerinden bana ulaşabilirsiniz. Yeni fikirlere ve iş birliklerine her zaman açığım!
              </p>
            </div>
          </div>
          
        </div>
      </Col>
    </>
  );
}
export default AboutMe;
