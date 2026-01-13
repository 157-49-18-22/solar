import './Process.css';

const Process = () => {
    const steps = [
        {
            number: '01',
            title: 'Consultation',
            description: 'We analyze your energy needs and roof structure to provide a free tailored proposal.'
        },
        {
            number: '02',
            title: 'System Design',
            description: 'Our engineers create a custom solar layout to maximize energy production for your home.'
        },
        {
            number: '03',
            title: 'Installation',
            description: 'Certified professionals install your system in just 1-2 days with minimal disruption.'
        },
        {
            number: '04',
            title: 'Power On',
            description: 'We handle inspections and utility connection so you can start saving immediately.'
        }
    ];

    return (
        <section className="process-section" id="process">
            <div className="container">
                <div className="process-header">
                    <h2 className="process-title">Simple 4-Step Process</h2>
                    <p className="process-subtitle">From consultation to activation, we handle everything.</p>
                </div>

                <div className="process-steps">
                    {steps.map((step, index) => (
                        <div key={index} className="process-step">
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                            {index !== steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
