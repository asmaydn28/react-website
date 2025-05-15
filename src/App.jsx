import { Routes, Route } from "react-router-dom";
import NavbarStart from "./sections/navbar/navbar";
import AboutMe from "./sections/AboutMe/AboutMe";
import HeroSection from "./sections/HeroSection/HeroSection";
import AboutThisSite from "./sections/AboutThisSite/AboutThisSite";
import Resume from "./sections/Resume/Resume";
import { Container, Row } from "react-bootstrap";
import NotFound from "./sections/NotFound/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Project from "./sections/Project/Project";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <NavbarStart />
      <section className="bg-body-tertiary">
        <Container>
          <Row>
            <HeroSection />
            <Routes>
              <Route path="/" element={<AboutThisSite />} />
              <Route path="/AboutMe" element={<AboutMe />} />
              <Route path="/Resume" element={<Resume />} />
              <Route path="/Project" element={<Project/>}/>
              <Route path="/Contact" element={<Contact/>}/>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default App;