import './Services.css';

const Services = () => {
    const services = [
        {
            icon: 'fa-home',
            title: 'Residential Solar',
            description: 'Transform your home with clean, renewable energy. Save up to 90% on electricity bills with our premium solar solutions.'
        },
        {
            icon: 'fa-building',
            title: 'Commercial Solar',
            description: 'Power your business with sustainable energy. Reduce operational costs and enhance your corporate sustainability goals.'
        },
        {
            icon: 'fa-city',
            title: 'Housing Society',
            description: 'Community solar solutions for housing societies. Shared benefits, reduced costs, and a greener future for all residents.'
        },
        {
            icon: 'fa-tools',
            title: 'Installation & Maintenance',
            description: 'Expert installation and 24/7 maintenance support. We ensure your solar system runs at peak efficiency always.'
        },
        {
            icon: 'fa-chart-line',
            title: 'Energy Monitoring',
            description: 'Real-time energy monitoring and analytics. Track your savings and environmental impact with our smart dashboard.'
        },
        {
            icon: 'fa-shield-alt',
            title: '25-Year Warranty',
            description: 'Industry-leading 25-year warranty on all solar panels. Your investment is protected for decades to come.'
        }
    ];

    return (
        <section className="services-section section-padding" id="services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Solar Solutions</h2>
                    <p className="section-subtitle">
                        Comprehensive solar energy solutions tailored to your needs. From residential to commercial, we've got you covered.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="service-icon">
                                <i className={`fas ${service.icon}`}></i>
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <a href="#contact" className="service-link">
                                Learn More <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
