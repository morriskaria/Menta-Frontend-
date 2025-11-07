import { Heart, Brain, Users, Star, ArrowRight, CheckCircle, Play } from 'lucide-react';
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
              <a href="#features">Features</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
            
            <div className="auth-buttons">
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
              Your Mental Health
              <span className="gradient-text"> Deserves Care</span>
            </h1>
            
            <p className="hero-description">
              Connect with licensed professionals, track your wellness journey, and access personalized mental health resources in a safe, supportive environment.
            </p>
            
            <div className="hero-buttons">
              <button className="btn-primary large">
                Start Your Journey
                <ArrowRight size={20} />
              </button>
              <button className="btn-demo">
                <div className="play-icon">
                  <Play size={20} />
                </div>
                Watch Demo
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
              <div className="stat-number">50K+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Sessions Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Licensed Therapists</div>
            </div>
            <div className="stat">
              <div className="stat-number">4.9★</div>
              <div className="stat-label">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Comprehensive Mental Wellness</h2>
            <p>Everything you need to support your mental health journey in one integrated platform</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon brain">
                <Brain size={32} />
              </div>
              <h3>AI-Powered Insights</h3>
              <p>Get personalized recommendations and insights based on your mental health patterns, mood tracking, and progress analytics.</p>
              <ul>
                <li><CheckCircle size={20} /> Mood pattern analysis</li>
                <li><CheckCircle size={20} /> Personalized recommendations</li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon heart">
                <Heart size={32} />
              </div>
              <h3>Wellness Tracking</h3>
              <p>Monitor your emotional well-being with intuitive mood tracking, sleep patterns, and daily wellness metrics.</p>
              <ul>
                <li><CheckCircle size={20} /> Daily mood check-ins</li>
                <li><CheckCircle size={20} /> Progress visualization</li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon users">
                <Users size={32} />
              </div>
              <h3>Professional Support</h3>
              <p>Connect with licensed therapists and mental health professionals through secure video sessions and messaging.</p>
              <ul>
                <li><CheckCircle size={20} /> Licensed therapists</li>
                <li><CheckCircle size={20} /> 24/7 crisis support</li>
              </ul>
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
              "Menta has completely transformed how I approach my mental health. The personalized insights and professional support have been life-changing."
            </blockquote>
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <div className="author-info">
                <div className="author-name">Sarah Johnson</div>
                <div className="author-title">Marketing Manager</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Transform Your Mental Health?</h2>
          <p>Join thousands who have already started their wellness journey with Menta</p>
          <button className="btn-cta">
            Start Free Trial
            <ArrowRight size={20} />
          </button>
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