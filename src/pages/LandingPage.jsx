import { Heart, Brain, Users, Star, ArrowRight, CheckCircle, Play, Phone, MapPin, Clock, Shield, Calendar, MessageCircle, Video, FileText, Award, Globe } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/resources">Resources</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            
            <div className="auth-buttons">
              <button className="hotline-btn" onClick={() => window.open('tel:988', '_self')}>
                <Phone size={16} />
                Crisis Hotline: 988
              </button>
              <Link to="/login" className="btn-secondary">Login</Link>
              <Link to="/register" className="btn-primary">Register as Patient</Link>
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
              <Link to="/services" className="btn-primary large">
                Find Local Services
                <ArrowRight size={20} />
              </Link>
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

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How Menta Works</h2>
            <p>Getting mental health support in your community is simple and straightforward</p>
          </div>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-icon">
                <MapPin size={24} />
              </div>
              <h3>Find Local Services</h3>
              <p>Search for therapists, support groups, and mental health resources in your area using our comprehensive directory.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-icon">
                <Calendar size={24} />
              </div>
              <h3>Book Appointment</h3>
              <p>Schedule directly with providers or join support groups. Many offer same-day appointments and flexible scheduling.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-icon">
                <Heart size={24} />
              </div>
              <h3>Get Support</h3>
              <p>Receive care through in-person visits, telehealth sessions, or community support groups - whatever works best for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources">
        <div className="container">
          <div className="section-header">
            <h2>Mental Health Resources</h2>
            <p>Free resources and tools to support your mental wellness journey</p>
          </div>
          <div className="resources-grid">
            <div className="resource-card" onClick={() => window.open('#', '_blank')}>
              <FileText size={32} />
              <h3>Self-Help Guides</h3>
              <p>Evidence-based guides for managing anxiety, depression, stress, and more</p>
              <span className="resource-link">Access Guides →</span>
            </div>
            <div className="resource-card" onClick={() => window.open('#', '_blank')}>
              <Video size={32} />
              <h3>Wellness Videos</h3>
              <p>Guided meditations, breathing exercises, and mental health education</p>
              <span className="resource-link">Watch Videos →</span>
            </div>
            <div className="resource-card" onClick={() => window.open('#', '_blank')}>
              <MessageCircle size={32} />
              <h3>Community Forum</h3>
              <p>Connect with others, share experiences, and find peer support</p>
              <span className="resource-link">Join Forum →</span>
            </div>
            <div className="resource-card" onClick={() => window.open('#', '_blank')}>
              <Award size={32} />
              <h3>Wellness Challenges</h3>
              <p>30-day challenges for building healthy mental health habits</p>
              <span className="resource-link">Start Challenge →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="service-areas">
        <div className="container">
          <div className="section-header">
            <h2>We Serve Your Community</h2>
            <p>Mental health services available across multiple locations and languages</p>
          </div>
          <div className="areas-content">
            <div className="areas-list">
              <div className="area-group">
                <h4>Service Areas</h4>
                <ul>
                  <li><MapPin size={16} /> Downtown Community Center</li>
                  <li><MapPin size={16} /> Northside Health Clinic</li>
                  <li><MapPin size={16} /> Eastside Family Services</li>
                  <li><MapPin size={16} /> Westside Wellness Hub</li>
                  <li><MapPin size={16} /> Mobile Crisis Units</li>
                </ul>
              </div>
              <div className="area-group">
                <h4>Languages Supported</h4>
                <ul>
                  <li><Globe size={16} /> English</li>
                  <li><Globe size={16} /> Spanish</li>
                  <li><Globe size={16} /> Mandarin</li>
                  <li><Globe size={16} /> Arabic</li>
                  <li><Globe size={16} /> ASL Interpreters</li>
                </ul>
              </div>
              <div className="area-group">
                <h4>Specialties</h4>
                <ul>
                  <li><Heart size={16} /> Trauma & PTSD</li>
                  <li><Heart size={16} /> Anxiety & Depression</li>
                  <li><Heart size={16} /> Addiction Recovery</li>
                  <li><Heart size={16} /> Family Therapy</li>
                  <li><Heart size={16} /> Youth Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial">
        <div className="container">
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
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
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <blockquote>
                "The crisis support saved my life. Having 24/7 access without barriers made all the difference during my darkest moment."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <div className="author-name">James Chen</div>
                  <div className="author-title">Crisis Survivor</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <blockquote>
                "The support group helped me realize I wasn't alone. Meeting others with similar struggles in a safe space was transformative."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <div className="author-name">Sarah Johnson</div>
                  <div className="author-title">Support Group Member</div>
                </div>
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
            <Link to="/services" className="btn-cta">
              Find Local Services
              <ArrowRight size={20} />
            </Link>
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
                <h4>Services</h4>
                <Link to="/services">Find Therapists</Link>
                <Link to="/services">Support Groups</Link>
                <Link to="/resources">Resources</Link>
                <a href="tel:988">Crisis Hotline</a>
              </div>
              
              <div className="link-group">
                <h4>Resources</h4>
                <Link to="/resources">Self-Help Guides</Link>
                <Link to="/resources">Wellness Videos</Link>
                <Link to="/resources">Community Forum</Link>
                <Link to="/resources">Mental Health Blog</Link>
              </div>
              
              <div className="link-group">
                <h4>Support</h4>
                <Link to="/contact">Contact Us</Link>
                <a href="#">Help Center</a>
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