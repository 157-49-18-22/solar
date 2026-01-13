import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section section-padding" id="contact">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get Started Today</h2>
                    <p className="section-subtitle">
                        Ready to switch to solar? Fill out the form below and our experts will get back to you within 24 hours.
                    </p>
                </div>

                <div className="contact-form-container">
                    <form className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control-custom"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="form-control-custom"
                                    placeholder="+91 XXXXX XXXXX"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control-custom"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="solution" className="form-label">Solution Type</label>
                                <select id="solution" className="form-control-custom" required>
                                    <option value="">Select Solution</option>
                                    <option value="residential">Residential Solar</option>
                                    <option value="commercial">Commercial Solar</option>
                                    <option value="society">Housing Society</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message"
                                className="form-control-custom"
                                rows="5"
                                placeholder="Tell us about your requirements..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="form-btn">
                            Submit Request
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
