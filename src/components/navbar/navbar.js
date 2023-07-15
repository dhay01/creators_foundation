import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/navbar.css';
import logo from '../navbar/blacklogo.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

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

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
                className={`navbar-toggler ${isMenuOpen ? "active" : ""}`}
                type="button"
                onClick={handleMenuToggle}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className={`container ${isMenuOpen ? "show" : ""}`}
                onClick={closeMenu}
            >
                <div className="collapse navbar-collapse justify-content-center">
                    <ul className="navbar-nav">
                        {reversedNavItems.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <Link className="nav-link" to={item.link}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link className="navbar-brand ml-auto" to="/">
                    <img src={logo} alt="logo" width="250px" />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
