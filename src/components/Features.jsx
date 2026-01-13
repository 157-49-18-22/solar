import './Features.css';

const Features = () => {
    const features = [
        {
            icon: 'fa-wallet',
            title: 'Maximum Savings',
            description: 'Reduce your electricity bills by up to 90% from day one. Solar is an investment with guaranteed high returns.'
        },
        {
            icon: 'fa-leaf',
            title: 'Eco-Friendly',
            description: 'Reduce your carbon footprint significantly. A typical home solar system saves ~4 tons of CO2 annually.'
        },
        {
            icon: 'fa-home',
            title: 'Increase Property Value',
            description: 'Homes with solar installations sell faster and for a premium compared to non-solar homes.'
        },
        {
            icon: 'fa-shield-alt',
            title: '25-Year Warranty',
            description: 'Relax with our comprehensive performance warranty. We ensure your system operates at peak efficiency.'
        }
    ];

    return (
        <section className="features-section" id="features">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Why Grid Zero?</span>
                    <h2 className="section-title">Powering a Brighter Future</h2>
                    <p className="section-subtitle">
                        Experience the benefits of clean energy with our premium solar solutions designed for modern homes.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon-wrapper">
                                <i className={`fas ${feature.icon}`}></i>
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                            <div className="feature-glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
