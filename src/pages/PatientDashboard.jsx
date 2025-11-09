import { Calendar, Heart, MessageCircle, Clock, Video, BookOpen, LogOut, Brain, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './PatientDashboard.css';

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const user = { name: 'Grace Wanjiku', email: 'grace.wanjiku@gmail.com' };

  const upcomingAppointment = {
    professional: 'Dr. James Kiprotich',
    specialty: 'Clinical Psychologist',
    date: 'Nov 15, 2024',
    time: '2:00 PM',
    type: 'video'
  };

  const recentMessages = [
    { id: '1', from: 'Dr. James Kiprotich', message: 'Habari, how are you feeling today?', time: '2h ago' },
    { id: '2', from: 'Menta Support Team', message: 'Your appointment at Nairobi clinic is confirmed', time: '1d ago' }
  ];

  const recommendedResources = [
    { title: 'Managing Stress in Urban Kenya', duration: '5 min read' },
    { title: 'Traditional Breathing Techniques', duration: '8 min read' }
  ];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <div className="logo">
            <Brain size={32} />
            <span>Menta</span>
          </div>
          <div className="user-info">
            <div className="user-details">
              <span className="user-name">{user.name}</span>
              <span className="user-role">Patient</span>
            </div>
            <Link to="/" className="logout-btn">
              <LogOut size={16} />
              Logout
            </Link>
          </div>
        </div>
      </header>

      <div className="dashboard-content">
        <nav className="dashboard-nav">
          <button 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <Heart size={20} />
            Overview
          </button>
          <button 
            className={`nav-item ${activeTab === 'appointments' ? 'active' : ''}`}
            onClick={() => setActiveTab('appointments')}
          >
            <Calendar size={20} />
            Appointments
          </button>
          <button 
            className={`nav-item ${activeTab === 'mood' ? 'active' : ''}`}
            onClick={() => setActiveTab('mood')}
          >
            <Heart size={20} />
            Mood Tracker
          </button>
          <button 
            className={`nav-item ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            <MessageCircle size={20} />
            Messages
          </button>
          <button 
            className={`nav-item ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            <BookOpen size={20} />
            Resources
          </button>
        </nav>

        <main className="dashboard-main">
          {activeTab === 'overview' && (
            <div className="overview-content">
              <div className="welcome-section">
                <h1>Welcome back, {user.name.split(' ')[0]}!</h1>
                <p>Here's your mental health overview</p>
              </div>

              <div className="cards-grid">
                <div className="dashboard-card">
                  <div className="card-header">
                    <Calendar size={24} />
                    <h3>Next Appointment</h3>
                  </div>
                  <div className="card-content">
                    <p className="professional-name">{upcomingAppointment.professional}</p>
                    <p className="specialty">{upcomingAppointment.specialty}</p>
                    <div className="appointment-time">
                      <Clock size={16} />
                      <span>{upcomingAppointment.date} at {upcomingAppointment.time}</span>
                    </div>
                    <button className="btn-primary">
                      <Video size={16} />
                      Join Video Call
                    </button>
                  </div>
                </div>

                <div className="dashboard-card">
                  <div className="card-header">
                    <Heart size={24} />
                    <h3>Recent Mood</h3>
                  </div>
                  <div className="card-content">
                    <div className="mood-display">
                      <div className="mood-emoji">😊</div>
                      <div className="mood-info">
                        <p className="mood-status">Good</p>
                        <p className="mood-time">Logged today</p>
                      </div>
                    </div>
                    <button className="btn-secondary">Track Mood</button>
                  </div>
                </div>

                <div className="dashboard-card">
                  <div className="card-header">
                    <MessageCircle size={24} />
                    <h3>Messages</h3>
                  </div>
                  <div className="card-content">
                    <p className="message-count">{recentMessages.length}</p>
                    <p className="message-label">Unread messages</p>
                    <button className="btn-secondary">View Messages</button>
                  </div>
                </div>
              </div>

              <div className="crisis-section">
                <div className="crisis-card">
                  <Phone size={24} />
                  <div className="crisis-info">
                    <h3>Need Immediate Help?</h3>
                    <p>Crisis support is available 24/7</p>
                  </div>
                  <button className="btn-crisis" onClick={() => window.open('tel:1192', '_self')}>
                    Call 1192
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appointments' && (
            <div className="tab-content">
              <h2>Appointments</h2>
              <p>Manage your upcoming and past appointments</p>
            </div>
          )}

          {activeTab === 'mood' && (
            <div className="tab-content">
              <h2>Mood Tracker</h2>
              <p>Track your daily mood and emotional well-being</p>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="tab-content">
              <h2>Messages</h2>
              <p>Communicate with your mental health professionals</p>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="tab-content">
              <h2>Resources Library</h2>
              <div className="resources-list">
                {recommendedResources.map((resource, index) => (
                  <div key={index} className="resource-item">
                    <BookOpen size={20} />
                    <div className="resource-info">
                      <p className="resource-title">{resource.title}</p>
                      <p className="resource-duration">{resource.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default PatientDashboard;