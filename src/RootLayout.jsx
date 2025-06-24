import { Outlet } from "react-router-dom";
import NavbarStart from "./sections/navbar/navbar";
import HeroSection from "./sections/HeroSection/HeroSection";
import { Container, Row } from "react-bootstrap";

const RootLayout = () => (
  <>
    <NavbarStart />
    <section className="bg-body-tertiary mt-5">
      <Container>
        <Row>
          <HeroSection />
          <Outlet />
        </Row>
      </Container>
    </section>
  </>
);

export default RootLayout; 