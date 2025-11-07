import { ArrowLeft, Mail, Lock, Eye, EyeOff, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'patient'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      alert(`Login successful! Welcome ${formData.userType === 'patient' ? 'Patient' : 'Dr.'}`);
      setIsLoading(false);
      // Here you would redirect to appropriate dashboard
      // if (formData.userType === 'patient') navigate('/patient-dashboard');
      // else navigate('/specialist-dashboard');
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <div className="logo-section">
            <div className="logo-icon">
              <Brain size={32} />
            </div>
            <h1>Welcome to Menta</h1>
            <p>Sign in to access your mental health dashboard</p>
          </div>
        </div>

        <div className="login-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="user-type-selector">
              <label className="user-type-label">I am a:</label>
              <div className="user-type-options">
                <label className={`user-type-option ${formData.userType === 'patient' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="userType"
                    value="patient"
                    checked={formData.userType === 'patient'}
                    onChange={handleChange}
                  />
                  <span>Patient</span>
                </label>
                <label className={`user-type-option ${formData.userType === 'specialist' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="userType"
                    value="specialist"
                    checked={formData.userType === 'specialist'}
                    onChange={handleChange}
                  />
                  <span>Mental Health Specialist</span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <Mail className="input-icon" size={20} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <Lock className="input-icon" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="btn-login" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="login-footer">
            {formData.userType === 'patient' ? (
              <p>
                Don't have an account? 
                <Link to="/register" className="register-link"> Register as Patient</Link>
              </p>
            ) : (
              <p>
                Mental Health Specialists are registered by administrators.
                <br />
                <span className="contact-admin">Contact your administrator for account access.</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;