import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Company Info */}
                    <div className="footer-col">
                        <img
                            src="/logo/Png/Grid Zero-01.png"
                            alt="Grid Zero Logo"
                            className="footer-logo"
                        />
                        <p className="footer-description">
                            Leading India's solar revolution with innovative, sustainable energy solutions.
                            Empowering homes and businesses to go green.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h3 className="footer-title">Our Services</h3>
                        <ul className="footer-links">
                            <li><a href="#services">Residential Solar</a></li>
                            <li><a href="#services">Commercial Solar</a></li>
                            <li><a href="#services">Housing Society</a></li>
                            <li><a href="#services">Maintenance</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col">
                        <h3 className="footer-title">Contact Us</h3>
                        <div className="footer-contact">
                            <p>
                                <i className="fas fa-map-marker-alt"></i>
                                123 Solar Street, Green City, India
                            </p>
                            <p>
                                <i className="fas fa-phone"></i>
                                +91 98765 43210
                            </p>
                            <p>
                                <i className="fas fa-envelope"></i>
                                info@gridzero.com
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p>&copy; 2026 Grid Zero. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
