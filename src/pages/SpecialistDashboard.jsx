import { Calendar, Users, MessageCircle, Clock, Video, FileText, LogOut, Brain, BarChart3, UserCheck } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SpecialistDashboard.css';

const SpecialistDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const user = { name: 'Dr. Sarah Martinez', email: 'sarah@example.com', specialty: 'Clinical Psychology' };

  const todayAppointments = [
    { patient: 'John D.', time: '10:00 AM', type: 'video', status: 'upcoming' },
    { patient: 'Maria R.', time: '2:00 PM', type: 'in-person', status: 'upcoming' },
    { patient: 'James C.', time: '4:00 PM', type: 'video', status: 'completed' }
  ];

  const recentMessages = [
    { id: '1', from: 'John D.', message: 'Thank you for the session today', time: '1h ago' },
    { id: '2', from: 'Maria R.', message: 'Can we reschedule tomorrow?', time: '3h ago' }
  ];

  const patientStats = {
    totalPatients: 45,
    activePatients: 32,
    newThisMonth: 8,
    completedSessions: 156
  };

  return (
    <div className="specialist-dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <div className="logo">
            <Brain size={32} />
            <span>Menta</span>
          </div>
          <div className="user-info">
            <div className="user-details">
              <span className="user-name">{user.name}</span>
              <span className="user-role">{user.specialty}</span>
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
            <BarChart3 size={20} />
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
            className={`nav-item ${activeTab === 'patients' ? 'active' : ''}`}
            onClick={() => setActiveTab('patients')}
          >
            <Users size={20} />
            Patients
          </button>
          <button 
            className={`nav-item ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            <MessageCircle size={20} />
            Messages
          </button>
          <button 
            className={`nav-item ${activeTab === 'notes' ? 'active' : ''}`}
            onClick={() => setActiveTab('notes')}
          >
            <FileText size={20} />
            Session Notes
          </button>
        </nav>

        <main className="dashboard-main">
          {activeTab === 'overview' && (
            <div className="overview-content">
              <div className="welcome-section">
                <h1>Welcome, {user.name}</h1>
                <p>Here's your practice overview for today</p>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">
                    <Users size={24} />
                  </div>
                  <div className="stat-info">
                    <h3>{patientStats.totalPatients}</h3>
                    <p>Total Patients</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <UserCheck size={24} />
                  </div>
                  <div className="stat-info">
                    <h3>{patientStats.activePatients}</h3>
                    <p>Active Patients</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <Calendar size={24} />
                  </div>
                  <div className="stat-info">
                    <h3>{patientStats.completedSessions}</h3>
                    <p>Sessions This Month</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <BarChart3 size={24} />
                  </div>
                  <div className="stat-info">
                    <h3>{patientStats.newThisMonth}</h3>
                    <p>New Patients</p>
                  </div>
                </div>
              </div>

              <div className="cards-grid">
                <div className="dashboard-card">
                  <div className="card-header">
                    <Calendar size={24} />
                    <h3>Today's Appointments</h3>
                  </div>
                  <div className="card-content">
                    <div className="appointments-list">
                      {todayAppointments.map((appointment, index) => (
                        <div key={index} className={`appointment-item ${appointment.status}`}>
                          <div className="appointment-info">
                            <p className="patient-name">{appointment.patient}</p>
                            <div className="appointment-details">
                              <Clock size={14} />
                              <span>{appointment.time}</span>
                              <span className="appointment-type">{appointment.type}</span>
                            </div>
                          </div>
                          <div className={`status-badge ${appointment.status}`}>
                            {appointment.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="dashboard-card">
                  <div className="card-header">
                    <MessageCircle size={24} />
                    <h3>Recent Messages</h3>
                  </div>
                  <div className="card-content">
                    <div className="messages-list">
                      {recentMessages.map((message) => (
                        <div key={message.id} className="message-item">
                          <div className="message-info">
                            <p className="message-from">{message.from}</p>
                            <p className="message-text">{message.message}</p>
                          </div>
                          <span className="message-time">{message.time}</span>
                        </div>
                      ))}
                    </div>
                    <button className="btn-secondary">View All Messages</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appointments' && (
            <div className="tab-content">
              <h2>Appointments</h2>
              <p>Manage your patient appointments and schedule</p>
            </div>
          )}

          {activeTab === 'patients' && (
            <div className="tab-content">
              <h2>Patient Management</h2>
              <p>View and manage your patient roster</p>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="tab-content">
              <h2>Messages</h2>
              <p>Communicate securely with your patients</p>
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="tab-content">
              <h2>Session Notes</h2>
              <p>Manage patient session notes and treatment plans</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SpecialistDashboard;