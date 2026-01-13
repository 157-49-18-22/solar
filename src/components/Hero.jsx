import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import sunAnimation from '../assets/sun.json';
import './Hero.css';

const CountUp = ({ end, duration = 2000, suffix = '', decimals = 0 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            if (progress < duration) {
                const percentage = progress / duration;
                const ease = 1 - Math.pow(1 - percentage, 4);

                setCount(end * ease);
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return (
        <span>
            {count.toFixed(decimals)}{suffix}
        </span>
    );
};

const Hero = () => {
    return (
        <section className="hero-section" id="home">
            {/* Stars - Fade away as sun rises */}
            <div className="stars">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="star"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            width: `${1 + Math.random() * 2}px`,
                            height: `${1 + Math.random() * 2}px`
                        }}
                    />
                ))}
            </div>

            {/* Animated Background Elements */}
            <div className="floating-solar">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="solar-cell-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${15 + Math.random() * 10}s`
                        }}
                    />
                ))}
            </div>



            {/* Sun Animation - Lottie */}
            <div className="hero-sun-container">
                <Lottie animationData={sunAnimation} loop={true} className="lottie-sun" />
            </div>

            {/* Light Spread Effect */}
            <div className="light-spread"></div>

            {/* Energy Beams */}
            <div className="energy-beam" style={{ left: '30%', animationDelay: '0s' }}></div>
            <div className="energy-beam" style={{ left: '50%', animationDelay: '1s' }}></div>
            <div className="energy-beam" style={{ left: '70%', animationDelay: '2s' }}></div>


            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Still Paying for Electricity?
                    </h1>
                    <p className="hero-subtitle">
                        Switch to solar. Let the sun pay your bills. Join India's clean energy revolution with Grid Zero.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-buttons">
                        <a href="#contact" className="btn-primary-custom">
                            Join the Revolution
                            <i className="fas fa-bolt"></i>
                        </a>
                        <a href="#services" className="btn-outline-custom">
                            Learn More
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>

                    {/* Hero Stats */}
                    <div className="hero-stats">
                        <div className="hero-stat">
                            <div className="hero-stat-number">
                                <CountUp end={5000} suffix="+" duration={2000} />
                            </div>
                            <div className="hero-stat-text">Happy Customers</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-number">
                                <CountUp end={10} suffix="MW+" duration={2000} />
                            </div>
                            <div className="hero-stat-text">Solar Installed</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-number">
                                <CountUp end={4.9} suffix="★" decimals={1} duration={2000} />
                            </div>
                            <div className="hero-stat-text">Customer Rating</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-number">
                                <CountUp end={100} suffix="%" duration={2000} />
                            </div>
                            <div className="hero-stat-text">Clean Energy</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <i className="fas fa-chevron-down"></i>
            </div>
        </section>
    );
};

export default Hero;
