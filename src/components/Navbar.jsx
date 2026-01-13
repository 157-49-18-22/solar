import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    {/* Logo */}
                    <a href="#home" className="logo">
                        <img
                            src="/logo/Png/Grid Zero-01.png"
                            alt="Grid Zero Logo"
                            className="logo-img"
                        />
                    </a>

                    {/* Navigation Links */}
                    <div className="nav-links">
                        <a href="#home" className="nav-link">Home</a>
                        <a href="#services" className="nav-link">Services</a>
                        <a href="#about" className="nav-link">About</a>
                        <a href="#contact" className="nav-link">Contact</a>
                    </div>

                    {/* CTA Button */}
                    <a href="#contact" className="nav-cta">
                        Get Started
                        <i className="fas fa-arrow-right"></i>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button className="mobile-menu-toggle" aria-label="Toggle Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
