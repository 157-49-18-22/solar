import './Stats.css';

const Stats = () => {
    const stats = [
        {
            number: '5000+',
            text: 'Happy Customers',
            icon: 'fa-users'
        },
        {
            number: '10MW+',
            text: 'Solar Installed',
            icon: 'fa-solar-panel'
        },
        {
            number: '₹50Cr+',
            text: 'Savings Generated',
            icon: 'fa-rupee-sign'
        },
        {
            number: '100%',
            text: 'Clean Energy',
            icon: 'fa-leaf'
        }
    ];

    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-item"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <div className="stat-icon">
                                <i className={`fas ${stat.icon}`}></i>
                            </div>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-text">{stat.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
