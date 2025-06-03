import { Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import styles from "./Resume.module.scss";

function Resume() {

  const pdfUrl = "/asim.pdf";
  
  
  const [pdfExists, setPdfExists] = useState(true);
  
  useEffect(() => {
    
    fetch(pdfUrl)
      .then(response => {
        if (!response.ok) {
          setPdfExists(false);
          console.error("PDF dosyası bulunamadı:", response.status);
        }
      })
      .catch(error => {
        setPdfExists(false);
        console.error("PDF kontrolü sırasında hata:", error);
      });
  }, []);

  return (
    <>
      <Col xs={{span:12, order:1}} xl={{span:8, order:2}} className="my-5">
        <div className="p-4 bg-white rounded shadow-sm border rounded-0">
          <div className="p-4">
            <h1 className={`text-2xl font-bold mb-4 ${styles.h1Resume}`}>BENİM ÖZGEÇMİŞİM</h1>
            
            {!pdfExists ? (
              <div className="text-red-500 p-4 border rounded">
                PDF dosyası bulunamadı. Lütfen dosya yolunu kontrol edin.
              </div>
            ) : (
              <div>
                
                <iframe
                  src={pdfUrl}
                  title="Resume PDF"
                  width="100%"
                  height="600px"
                  className="border-0"
                />
              </div>
            )}
            
            <a
              href={pdfUrl}
              download="asim.pdf"
              className="text-white d-inline-block mt-4 btn btn-dark w-100"
            >
              PDF İndir
            </a>
          </div>
        </div>
      </Col>
    </>
  );
}

export default Resume;

/* import { Col } from "react-bootstrap";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';


function Resume() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  return (
    <>
      <Col xs={12} md={8} className="mt-5">
        <div className="p-4 bg-white rounded shadow-sm border">
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">My Resume</h1>
            <div className="border rounded-lg p-4">
              <Document file="/asim.pdf">
                <Page pageNumber={1} />
              </Document>
            </div>
            <a
              href="asim.pdf"
              download="asim.pdf"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Download PDF
            </a>
          </div>
        </div>
      </Col>
    </>
  );
}

export default Resume;
 */