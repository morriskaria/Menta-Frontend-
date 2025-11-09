import { MapPin, Phone, Calendar, Users, Heart, Brain, Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const therapists = [
    { name: "Dr. Grace Wanjiku", specialty: "Anxiety & Depression", location: "Nairobi CBD", rating: 4.9, available: "Today" },
    { name: "Dr. James Kiprotich", specialty: "Trauma & PTSD", location: "Westlands Clinic", rating: 4.8, available: "Tomorrow" },
    { name: "Dr. Amina Hassan", specialty: "Family Therapy", location: "Karen Medical Centre", rating: 4.9, available: "This Week" },
  ];

  const supportGroups = [
    { name: "Anxiety Support Circle", type: "In-Person", time: "Tuesdays 6PM", location: "Nairobi Community Centre" },
    { name: "Depression Recovery Group", type: "Virtual", time: "Thursdays 7PM", location: "Online" },
    { name: "Grief & Loss Support", type: "Hybrid", time: "Saturdays 2PM", location: "Kilimani Wellness Hub" },
  ];

  return (
    <div className="services-page">
      <header className="page-header">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1>Mental Health Services</h1>
          <p>Find the right support for your mental health journey</p>
        </div>
      </header>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            <div className="service-section">
              <h2><Brain size={24} /> Find a Therapist</h2>
              <div className="therapist-list">
                {therapists.map((therapist, index) => (
                  <div key={index} className="therapist-card">
                    <div className="therapist-info">
                      <h3>{therapist.name}</h3>
                      <p className="specialty">{therapist.specialty}</p>
                      <div className="details">
                        <span><MapPin size={16} /> {therapist.location}</span>
                        <span><Star size={16} /> {therapist.rating}</span>
                      </div>
                    </div>
                    <div className="therapist-actions">
                      <span className="availability">Available {therapist.available}</span>
                      <button className="btn-book">Book Appointment</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-section">
              <h2><Users size={24} /> Support Groups</h2>
              <div className="group-list">
                {supportGroups.map((group, index) => (
                  <div key={index} className="group-card">
                    <h3>{group.name}</h3>
                    <div className="group-details">
                      <span className="group-type">{group.type}</span>
                      <span><Calendar size={16} /> {group.time}</span>
                      <span><MapPin size={16} /> {group.location}</span>
                    </div>
                    <button className="btn-join">Join Group</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="crisis-section">
            <h2><Phone size={24} /> Crisis Support</h2>
            <div className="crisis-cards">
              <div className="crisis-card">
                <h3>24/7 Crisis Hotline</h3>
                <p className="crisis-number">1192</p>
                <button className="btn-crisis" onClick={() => window.open('tel:1192', '_self')}>
                  Call Now
                </button>
              </div>
              <div className="crisis-card">
                <h3>Crisis Text Line</h3>
                <p className="crisis-number">Text MSADA to 22122</p>
                <button className="btn-crisis" onClick={() => window.open('sms:22122?body=MSADA', '_self')}>
                  Text Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;