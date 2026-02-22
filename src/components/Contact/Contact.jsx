import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, you'd send this to a backend/email service
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(null), 5000);
  };

  return (
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
            <h3 className="contact__info-title">Let's talk about everything!</h3>
            <p className="contact__info-text">
              Don't hesitate to reach out. I'm always open to discussing new projects, 
              creative ideas, or opportunities to be part of your vision.
            </p>

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

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="contact__form-input"
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="email" className="contact__form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="contact__form-input"
                />
              </div>
            </div>

            <div className="contact__form-group">
              <label htmlFor="subject" className="contact__form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Discussion"
                required
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="message" className="contact__form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={6}
                className="contact__form-input contact__form-textarea"
              />
            </div>

            <button type="submit" className="btn btn-primary contact__form-submit">
              Send Message
              <FiSend size={16} />
            </button>

            {status === 'success' && (
              <p className="contact__form-success">
                ✅ Message sent successfully! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
