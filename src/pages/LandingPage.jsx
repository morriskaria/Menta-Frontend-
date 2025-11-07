import { Heart, Brain, Users, Star, ArrowRight, CheckCircle, Play, Phone, MapPin, Clock, Shield } from 'lucide-react';
import { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">
              <div className="logo-icon">
                <Brain size={28} />
              </div>
              <span className="logo-text">Menta</span>
            </div>
            
            <nav className="nav">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#resources">Resources</a>
              <a href="#contact">Contact</a>
            </nav>
            
            <div className="auth-buttons">
              <button className="hotline-btn" onClick={() => window.open('tel:988', '_self')}>
                <Phone size={16} />
                Crisis Hotline: 988
              </button>
              <button className="btn-secondary">Sign In</button>
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="trust-badge">
              <Star size={16} />
              Trusted by 50,000+ users worldwide
            </div>
            
            <h1 className="hero-title">
              Community Mental Health
              <span className="gradient-text"> Made Accessible</span>
            </h1>
            
            <p className="hero-description">
              Breaking barriers to mental health care in your community. Connect with local therapists, join support groups, and access crisis support - all in one place.
            </p>
            
            <div className="hero-buttons">
              <button className="btn-primary large">
                Find Local Services
                <ArrowRight size={20} />
              </button>
              <button className="btn-emergency" onClick={() => window.open('tel:988', '_self')}>
                <Phone size={20} />
                Need Help Now? Call 988
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">15K+</div>
              <div className="stat-label">Community Members</div>
            </div>
            <div className="stat">
              <div className="stat-number">200+</div>
              <div className="stat-label">Local Therapists</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Support Groups</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Crisis Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Community Mental Health Services</h2>
            <p>Accessible, affordable, and culturally sensitive mental health care for everyone in our community</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon brain">
                <MapPin size={32} />
              </div>
              <h3>Local Therapist Network</h3>
              <p>Find licensed mental health professionals in your area. Filter by specialty, insurance, language, and cultural background.</p>
              <ul>
                <li><CheckCircle size={20} /> Insurance-friendly options</li>
                <li><CheckCircle size={20} /> Sliding scale fees available</li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon heart">
                <Users size={32} />
              </div>
              <h3>Support Groups</h3>
              <p>Join peer support groups for anxiety, depression, grief, addiction recovery, and more. Both in-person and virtual options.</p>
              <ul>
                <li><CheckCircle size={20} /> Free community groups</li>
                <li><CheckCircle size={20} /> Facilitated by professionals</li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon users">
                <Phone size={32} />
              </div>
              <h3>Crisis Support</h3>
              <p>Immediate help when you need it most. 24/7 crisis hotline, emergency resources, and safety planning tools.</p>
              <ul>
                <li><CheckCircle size={20} /> Call 988 - No signup required</li>
                <li><CheckCircle size={20} /> Local emergency resources</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Resources Section */}
      <section className="crisis-resources">
        <div className="container">
          <div className="crisis-header">
            <h2>Need Immediate Help?</h2>
            <p>Crisis support is available 24/7 - no account required</p>
          </div>
          <div className="crisis-grid">
            <div className="crisis-card urgent">
              <Phone size={32} />
              <h3>Crisis Hotline</h3>
              <p className="crisis-number">988</p>
              <p>24/7 Suicide & Crisis Lifeline</p>
              <button className="btn-crisis" onClick={() => window.open('tel:988', '_self')}>Call Now</button>
            </div>
            <div className="crisis-card">
              <Heart size={32} />
              <h3>Text Support</h3>
              <p className="crisis-number">Text HOME to 741741</p>
              <p>Crisis Text Line</p>
              <button className="btn-crisis" onClick={() => window.open('sms:741741?body=HOME', '_self')}>Text Now</button>
            </div>
            <div className="crisis-card">
              <Shield size={32} />
              <h3>Emergency</h3>
              <p className="crisis-number">911</p>
              <p>Immediate danger or medical emergency</p>
              <button className="btn-crisis" onClick={() => window.open('tel:911', '_self')}>Call 911</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial">
        <div className="container">
          <div className="testimonial-card">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
            <blockquote>
              "Finding a therapist who understood my cultural background seemed impossible until I found Menta. The community support has been incredible."
            </blockquote>
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <div className="author-info">
                <div className="author-name">Maria Rodriguez</div>
                <div className="author-title">Community Member</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Join Your Community's Mental Health Network</h2>
          <p>Connect with local resources, support groups, and mental health professionals in your area</p>
          <div className="cta-buttons">
            <button className="btn-cta">
              Find Local Services
              <ArrowRight size={20} />
            </button>
            <button className="btn-cta-secondary" onClick={() => window.open('tel:988', '_self')}>
              <Phone size={20} />
              Crisis Support: 988
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <div className="logo-icon">
                  <Brain size={28} />
                </div>
                <span className="logo-text">Menta</span>
              </div>
              <p>Empowering individuals to take control of their mental health through innovative technology, compassionate care, and evidence-based practices.</p>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4>Product</h4>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Security</a>
                <a href="#">API</a>
              </div>
              
              <div className="link-group">
                <h4>Support</h4>
                <a href="#">Help Center</a>
                <a href="#">Contact Us</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Menta. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;