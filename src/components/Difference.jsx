import Lottie from 'lottie-react';
import solarAnimation from '../assets/solar.json';
import './Difference.css';

const Difference = () => {
    return (
        <section className="difference-section" id="difference">
            <div className="container">
                <div className="difference-grid">
                    {/* Left Side - Content */}
                    <div className="difference-content">
                        <span className="section-tag">The Grid Zero Advantage</span>
                        <h2 className="section-title">Why Grid Zero is Different</h2>
                        <p className="difference-text">
                            We combine cutting-edge solar technology with sustainable practices to deliver energy solutions that are both environmentally responsible and economically smart. Every installation is designed for maximum efficiency, durability, and long-term savings.
                        </p>

                        <div className="difference-features">
                            <div className="diff-feature-item">
                                <div className="diff-icon-wrapper">
                                    <i className="fas fa-leaf"></i>
                                </div>
                                <div className="diff-text-content">
                                    <h3>Eco-Friendly Solutions</h3>
                                    <p>Reduce your carbon footprint with clean, renewable solar energy that's good for the planet.</p>
                                </div>
                            </div>

                            <div className="diff-feature-item">
                                <div className="diff-icon-wrapper">
                                    <i className="fas fa-bolt"></i>
                                </div>
                                <div className="diff-text-content">
                                    <h3>Maximum Energy Efficiency</h3>
                                    <p>Our high-efficiency panels generate more power per square foot than standard systems.</p>
                                </div>
                            </div>

                            <div className="diff-feature-item">
                                <div className="diff-icon-wrapper">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <div className="diff-text-content">
                                    <h3>25-Year Performance Warranty</h3>
                                    <p>Comprehensive warranties covering equipment, workmanship, and system performance.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Lottie Animation */}
                    <div className="difference-image">
                        <div className="lottie-wrapper">
                            <Lottie animationData={solarAnimation} loop={true} />
                        </div>
                        {/* Decorative background elements behind animation */}
                        <div className="blob-1"></div>
                        <div className="blob-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Difference;
