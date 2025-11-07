import { Users, UserPlus, Activity, Calendar, Settings, LogOut, Brain } from 'lucide-react';
import { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Patients', value: '1,247', change: '+12%' },
    { label: 'Mental Health Specialists', value: '89', change: '+5%' },
    { label: 'Active Sessions', value: '156', change: '+8%' },
    { label: 'Crisis Interventions', value: '23', change: '-15%' }
  ];

  const recentActivity = [
    { type: 'registration', user: 'Dr. Sarah Martinez', action: 'New therapist registered', time: '2 hours ago' },
    { type: 'appointment', user: 'Patient #1234', action: 'Emergency session scheduled', time: '4 hours ago' },
    { type: 'crisis', user: 'Crisis Team', action: 'Crisis intervention completed', time: '6 hours ago' }
  ];

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="admin-nav">
          <div className="admin-logo">
            <Brain size={32} />
            <span>Menta Admin</span>
          </div>
          <button className="logout-btn">
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </header>

      <div className="admin-content">
        <aside className="admin-sidebar">
          <nav className="admin-menu">
            <button 
              className={`menu-item ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <Activity size={20} />
              Overview
            </button>
            <button 
              className={`menu-item ${activeTab === 'specialists' ? 'active' : ''}`}
              onClick={() => setActiveTab('specialists')}
            >
              <UserPlus size={20} />
              Register Specialists
            </button>
            <button 
              className={`menu-item ${activeTab === 'users' ? 'active' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              <Users size={20} />
              Manage Users
            </button>
            <button 
              className={`menu-item ${activeTab === 'appointments' ? 'active' : ''}`}
              onClick={() => setActiveTab('appointments')}
            >
              <Calendar size={20} />
              Appointments
            </button>
            <button 
              className={`menu-item ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <Settings size={20} />
              Settings
            </button>
          </nav>
        </aside>

        <main className="admin-main">
          {activeTab === 'overview' && (
            <div className="overview-content">
              <h1>Dashboard Overview</h1>
              
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <h3>{stat.label}</h3>
                    <div className="stat-value">{stat.value}</div>
                    <div className={`stat-change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
                      {stat.change} from last month
                    </div>
                  </div>
                ))}
              </div>

              <div className="activity-section">
                <h2>Recent Activity</h2>
                <div className="activity-list">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="activity-item">
                      <div className="activity-info">
                        <strong>{activity.user}</strong>
                        <p>{activity.action}</p>
                      </div>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'specialists' && (
            <div className="specialists-content">
              <h1>Register Mental Health Specialists</h1>
              
              <form className="specialist-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Dr. John Smith" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="doctor@example.com" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>License Number</label>
                    <input type="text" placeholder="LIC123456" />
                  </div>
                  <div className="form-group">
                    <label>Specialty</label>
                    <select>
                      <option>Select Specialty</option>
                      <option>Clinical Psychology</option>
                      <option>Psychiatry</option>
                      <option>Marriage & Family Therapy</option>
                      <option>Addiction Counseling</option>
                      <option>Child Psychology</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div className="form-group">
                    <label>Location</label>
                    <select>
                      <option>Select Location</option>
                      <option>Downtown Community Center</option>
                      <option>Northside Health Clinic</option>
                      <option>Eastside Family Services</option>
                      <option>Westside Wellness Hub</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Bio</label>
                  <textarea rows="4" placeholder="Brief professional biography..."></textarea>
                </div>

                <button type="submit" className="btn-register">Register Specialist</button>
              </form>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="users-content">
              <h1>User Management</h1>
              
              <div className="users-table">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th>Joined</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dr. Sarah Martinez</td>
                      <td>Therapist</td>
                      <td><span className="status active">Active</span></td>
                      <td>Jan 15, 2024</td>
                      <td><button className="btn-action">Edit</button></td>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>Patient</td>
                      <td><span className="status active">Active</span></td>
                      <td>Feb 20, 2024</td>
                      <td><button className="btn-action">View</button></td>
                    </tr>
                    <tr>
                      <td>Dr. James Wilson</td>
                      <td>Therapist</td>
                      <td><span className="status pending">Pending</span></td>
                      <td>Mar 10, 2024</td>
                      <td><button className="btn-action">Approve</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;