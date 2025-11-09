import { ArrowLeft, User, Mail, Phone, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './PatientRegister.css';

const PatientRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    county: '',
    emergencyContact: '',
    emergencyPhone: '',
    insurance: '',
    concerns: ''
  });

  const kenyanCounties = [
    'Baringo', 'Bomet', 'Bungoma', 'Busia', 'Elgeyo-Marakwet', 'Embu', 'Garissa',
    'Homa Bay', 'Isiolo', 'Kajiado', 'Kakamega', 'Kericho', 'Kiambu', 'Kilifi',
    'Kirinyaga', 'Kisii', 'Kisumu', 'Kitui', 'Kwale', 'Laikipia', 'Lamu', 'Machakos',
    'Makueni', 'Mandera', 'Marsabit', 'Meru', 'Migori', 'Mombasa', 'Murang\'a',
    'Nairobi', 'Nakuru', 'Nandi', 'Narok', 'Nyamira', 'Nyandarua', 'Nyeri',
    'Samburu', 'Siaya', 'Taita-Taveta', 'Tana River', 'Tharaka-Nithi', 'Trans Nzoia',
    'Turkana', 'Uasin Gishu', 'Vihiga', 'Wajir', 'West Pokot'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration successful! Welcome to Menta. You can now access mental health services.');
    setFormData({
      firstName: '', lastName: '', email: '', phone: '', dateOfBirth: '',
      address: '', city: '', county: '', emergencyContact: '', emergencyPhone: '',
      insurance: '', concerns: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="register-page">
      <header className="register-header">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1>Patient Registration</h1>
          <p>Join Menta to access mental health services in your community</p>
        </div>
      </header>

      <section className="register-content">
        <div className="container">
          <div className="register-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="form-section">
                <h2><User size={20} /> Personal Information</h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
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
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 700 123 456"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="dateOfBirth">Date of Birth *</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-section">
                <h2><MapPin size={20} /> Address Information</h2>
                
                <div className="form-group">
                  <label htmlFor="address">Street Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City/Town *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="county">County *</label>
                    <select
                      id="county"
                      name="county"
                      value={formData.county}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select County</option>
                      {kenyanCounties.map((county) => (
                        <option key={county} value={county}>{county}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h2><Phone size={20} /> Emergency Contact</h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="emergencyContact">Emergency Contact Name *</label>
                    <input
                      type="text"
                      id="emergencyContact"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="emergencyPhone">Emergency Contact Phone *</label>
                    <input
                      type="tel"
                      id="emergencyPhone"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleChange}
                      placeholder="+254 700 123 456"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h2>Additional Information</h2>
                
                <div className="form-group">
                  <label htmlFor="insurance">Insurance Provider (Optional)</label>
                  <select
                    id="insurance"
                    name="insurance"
                    value={formData.insurance}
                    onChange={handleChange}
                  >
                    <option value="">Select Insurance Provider</option>
                    <option value="nhif">NHIF (National Hospital Insurance Fund)</option>
                    <option value="aar">AAR Insurance</option>
                    <option value="britam">Britam Health</option>
                    <option value="jubilee">Jubilee Insurance</option>
                    <option value="madison">Madison Insurance</option>
                    <option value="uap">UAP Insurance</option>
                    <option value="uninsured">Uninsured/Self-Pay</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="concerns">Mental Health Concerns (Optional)</label>
                  <textarea
                    id="concerns"
                    name="concerns"
                    rows="4"
                    value={formData.concerns}
                    onChange={handleChange}
                    placeholder="Briefly describe what you'd like help with (anxiety, depression, stress, etc.)"
                  ></textarea>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-register">
                  Register as Patient
                </button>
                <p className="privacy-note">
                  By registering, you agree to our privacy policy and terms of service. 
                  Your information is secure and compliant with Kenya's Data Protection Act.
                </p>
                <div className="login-redirect">
                  <p>
                    Already have an account? 
                    <Link to="/login" className="login-link"> Sign in here</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientRegister;