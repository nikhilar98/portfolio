import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__details">
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <FiMail size={20} />
                </div>
                <div>
                  <span className="contact__detail-label">Email</span>
                  <a href="mailto:nikhilar98@gmail.com" className="contact__detail-value">
                    nikhilar98@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <FiPhone size={20} />
                </div>
                <div>
                  <span className="contact__detail-label">Phone</span>
                  <a href="tel:+919482055378" className="contact__detail-value">
                    +91 94820 55378
                  </a>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <span className="contact__detail-label">Location</span>
                  <span className="contact__detail-value">Bangalore, Karnataka</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
