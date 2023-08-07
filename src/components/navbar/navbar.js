import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './logocircle.png';
import './navbar.css';

function Navbarheader() {
    const navItems = [
        { label: "الرئيسية ", link: "/" },
        { label: "من نحن", link: "/about" },
        { label: "اخر الاخبار", link: "/news" },
        { label: "اعضاء المنظمة", link: "/staff" },
        { label: "المقالات", link: "/articles" },
        { label: "معرض الصور", link: "/gallery" },
        { label: "اتصل بنا", link: "/contact" }
    ];

    const reversedNavItems = [...navItems].reverse();

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleCloseOffcanvas = () => {
        setShowOffcanvas(false);
    };

    const handleToggleOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas);
    };

    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleToggleOffcanvas} />
                        <Navbar.Offcanvas
                            show={showOffcanvas}
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton onClick={handleCloseOffcanvas}>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    مؤسسة مبدعون للتربية والفنون
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1 pe-3 custom-nav">
                                    {reversedNavItems.map((item, index) => (
                                        <Nav.Link className="nav-items" as={Link} to={item.link} key={index} onClick={handleCloseOffcanvas}>
                                            {item.label}
                                        </Nav.Link>
                                    ))}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        <Navbar.Brand className="ml-auto">
                            <img
                                alt=""
                                src={logo}
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                            />
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Navbarheader;