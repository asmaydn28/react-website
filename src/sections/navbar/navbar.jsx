import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './navbar.module.scss';
import { Link } from "react-router-dom";

function NavbarStart() {
    return(
        <Navbar expand="lg" className={styles.Navbar}>
            <Container fluid className='p-0 mx-2'>
                <Navbar.Brand className={`${styles.Brand} px-4 py-2`} as={Link} to="/">ASIM AYDIN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/AboutMe" className={`${styles.Link} px-3`}>ABOUT</Nav.Link>
                    <Nav.Link as={Link} to="/Resume" className={`${styles.Link} px-3`}>RESUME</Nav.Link>
                    <Nav.Link as={Link} to="/Project" className={`${styles.Link} px-3`}>PROJECT</Nav.Link>
                    <Nav.Link as={Link} to="/Contact" className={`${styles.Link} px-3`}>CONTACT</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarStart;