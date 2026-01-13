import { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const testimonials = [
        {
            name: "Rajesh Kumar",
            role: "Homeowner",
            text: "Installing solar with Grid Zero was the best decision for our home. The team was professional, and our electricity bill has dropped by 80%. Highly recommended!",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Jhana Shree",
            role: "Store Owner",
            text: "Great service. The ordering process was smooth, and communication was clear throughout. I received my bulk tissue order quickly and exactly as promised. everything was verified before dispatch.",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "Amit Patel",
            role: "Resident",
            text: "Seamless installation process and excellent after-sales support. I love tracking my daily savings on the app. Truly a game-changer for my energy expenses.",
            image: "https://randomuser.me/api/portraits/men/86.jpg"
        },
        {
            name: "Swathi Pvt",
            role: "Manager",
            text: "The quality of both the product and service has been exceptional. Their team is incredibly supportive — always ready to explain, assist, and ensure smooth delivery.",
            image: "https://randomuser.me/api/portraits/women/68.jpg"
        },
        {
            name: "Arun Singh",
            role: "Developer",
            text: "I'm really pleased with the experience. From the moment I reached out, the team was proactive and supportive. They guided me through product selection perfectly.",
            image: "https://randomuser.me/api/portraits/men/46.jpg"
        }
    ];

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    const getCardClass = (index) => {
        if (index === activeIndex) return 'active';
        if (index === (activeIndex - 1 + testimonials.length) % testimonials.length) return 'prev'; // Simplified logic for demonstration
        if (index === (activeIndex + 1) % testimonials.length) return 'next';

        // Better logic for infinite carousel feel with just 5 items
        const diff = (index - activeIndex);
        if (diff === -1 || (activeIndex === 0 && index === testimonials.length - 1)) return 'prev';
        if (diff === 1 || (activeIndex === testimonials.length - 1 && index === 0)) return 'next';

        return 'hidden';
    };

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <div className="testimonials-header">
                    <span className="client-review-text">Client Review</span>
                    <h2 className="testimonial-title">TESTIMONIAL</h2>
                    <div className="header-stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>

                <div className="testimonials-viewport">
                    <div className="testimonials-container">
                        {testimonials.map((item, index) => {
                            let className = 'testimonial-card hidden';
                            if (index === activeIndex) className = 'testimonial-card active';
                            else if (index === (activeIndex - 1 + testimonials.length) % testimonials.length) className = 'testimonial-card prev';
                            else if (index === (activeIndex + 1) % testimonials.length) className = 'testimonial-card next';

                            return (
                                <div
                                    key={index}
                                    className={className}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className="quote-icon">
                                        <i className="fas fa-quote-left"></i>
                                    </div>
                                    <p className="testimonial-text">
                                        {item.text}
                                    </p>
                                    <div className="testimonial-author">
                                        <img src={item.image} alt={item.name} className="author-avatar" />
                                        <div className="author-info">
                                            <h4>{item.name}</h4>
                                            <span>{item.role}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="testimonial-dots">
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={`dot ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
