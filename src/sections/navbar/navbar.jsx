import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './navbar.module.scss';
import { Link } from "react-router-dom";
import { useState } from 'react'; 

function NavbarStart() {
    const [showOffcanvas, setShowOffcanvas] = useState(false); 

    const handleCloseOffcanvas = () => setShowOffcanvas(false);
    const handleShowOffcanvas = () => setShowOffcanvas(true);

    const offcanvasId = "offcanvasNavbar-expand-lg";
    const expandBreakpoint = "lg";

    return (
        <Navbar
            expand={expandBreakpoint}
            className={`${styles.Navbar} fixed-top`}
        >
            <Container fluid className='p-0 mx-2'>
                <Navbar.Brand
                    className={`${styles.Brand} px-4 py-2`}
                    as={Link}
                    to="/"
                    onClick={showOffcanvas ? handleCloseOffcanvas : undefined}
                >
                    ASIM AYDIN
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls={offcanvasId}
                    onClick={handleShowOffcanvas}
                />
                <Navbar.Offcanvas
                    id={offcanvasId}
                    aria-labelledby={`${offcanvasId}-label`}
                    placement="end"
                    show={showOffcanvas}
                    onHide={handleCloseOffcanvas}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`${offcanvasId}-label`}>
                            MENÜ
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className={styles.offcanvasBodyCustom}> 
                        <Nav className="text-center flex-grow-1 pe-3">
                            <Nav.Link
                                as={Link}
                                to="/AboutMe"
                                className={`${styles.Link} ${styles.offcanvasLink} mb-lg-0 mb-2`}
                                onClick={handleCloseOffcanvas}
                            >
                                ABOUT
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/Resume"
                                className={`${styles.Link} ${styles.offcanvasLink} mb-lg-0 mb-2`}
                                onClick={handleCloseOffcanvas}
                            >
                                RESUME
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/Project"
                                className={`${styles.Link} ${styles.offcanvasLink} mb-lg-0 mb-2`}
                                onClick={handleCloseOffcanvas}
                            >
                                PROJECT
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/Contact"
                                className={`${styles.Link} ${styles.offcanvasLink} border-0 mb-lg-0 mb-2`}
                                onClick={handleCloseOffcanvas}
                            >
                                CONTACT
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavbarStart;