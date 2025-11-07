import { Phone, Mail, MapPin, Clock, ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <header className="page-header">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1>Contact Us</h1>
          <p>Get in touch with our mental health support team</p>
        </div>
      </header>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get Support</h2>
              <p>We're here to help you access mental health services in your community. Reach out anytime.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon crisis">
                    <Phone size={24} />
                  </div>
                  <div className="method-info">
                    <h3>Crisis Hotline</h3>
                    <p>24/7 immediate support</p>
                    <a href="tel:988" className="contact-link crisis">988</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Phone size={24} />
                  </div>
                  <div className="method-info">
                    <h3>General Support</h3>
                    <p>Monday - Friday, 8AM - 6PM</p>
                    <a href="tel:+15551234567" className="contact-link">(555) 123-4567</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Mail size={24} />
                  </div>
                  <div className="method-info">
                    <h3>Email Support</h3>
                    <p>Response within 24 hours</p>
                    <a href="mailto:support@menta.org" className="contact-link">support@menta.org</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="method-info">
                    <h3>Main Office</h3>
                    <p>123 Wellness Street<br />Community Center, Suite 200<br />Your City, ST 12345</p>
                  </div>
                </div>
              </div>

              <div className="hours-section">
                <h3><Clock size={20} /> Office Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                  <div className="hours-item crisis-hours">
                    <span>Crisis Support</span>
                    <span>24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="services">Services Information</option>
                    <option value="appointment">Appointment Request</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;