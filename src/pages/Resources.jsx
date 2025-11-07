import { FileText, Video, MessageCircle, Award, ArrowLeft, Download, Play, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Resources.css';

const Resources = () => {
  const guides = [
    { title: "Managing Anxiety", description: "Practical strategies for coping with anxiety", downloads: "2.3k" },
    { title: "Depression Self-Help", description: "Understanding and managing depression", downloads: "1.8k" },
    { title: "Stress Management", description: "Techniques for reducing daily stress", downloads: "3.1k" },
    { title: "Sleep & Mental Health", description: "Improving sleep for better mental wellness", downloads: "1.5k" },
  ];

  const videos = [
    { title: "5-Minute Breathing Exercise", duration: "5:23", views: "45k" },
    { title: "Mindfulness Meditation", duration: "12:15", views: "32k" },
    { title: "Understanding Depression", duration: "8:45", views: "28k" },
    { title: "Anxiety Coping Strategies", duration: "15:30", views: "51k" },
  ];

  const challenges = [
    { title: "30-Day Gratitude Challenge", participants: "1.2k", difficulty: "Beginner" },
    { title: "Mindfulness Month", participants: "890", difficulty: "Intermediate" },
    { title: "Stress-Free September", participants: "2.1k", difficulty: "Beginner" },
    { title: "Self-Care Challenge", participants: "1.5k", difficulty: "All Levels" },
  ];

  return (
    <div className="resources-page">
      <header className="page-header">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1>Mental Health Resources</h1>
          <p>Free tools and resources to support your mental wellness journey</p>
        </div>
      </header>

      <section className="resources-content">
        <div className="container">
          <div className="resource-section">
            <h2><FileText size={24} /> Self-Help Guides</h2>
            <div className="guides-grid">
              {guides.map((guide, index) => (
                <div key={index} className="guide-card">
                  <div className="guide-info">
                    <h3>{guide.title}</h3>
                    <p>{guide.description}</p>
                    <span className="downloads">{guide.downloads} downloads</span>
                  </div>
                  <button className="btn-download">
                    <Download size={16} />
                    Download PDF
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="resource-section">
            <h2><Video size={24} /> Wellness Videos</h2>
            <div className="videos-grid">
              {videos.map((video, index) => (
                <div key={index} className="video-card">
                  <div className="video-thumbnail">
                    <Play size={32} />
                  </div>
                  <div className="video-info">
                    <h3>{video.title}</h3>
                    <div className="video-meta">
                      <span>{video.duration}</span>
                      <span>{video.views} views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resource-section">
            <h2><MessageCircle size={24} /> Community Forum</h2>
            <div className="forum-section">
              <div className="forum-card">
                <h3>Join Our Supportive Community</h3>
                <p>Connect with others on similar journeys, share experiences, and find peer support in a safe, moderated environment.</p>
                <div className="forum-stats">
                  <span><Users size={16} /> 5,200+ members</span>
                  <span>• Active discussions daily</span>
                  <span>• Professional moderation</span>
                </div>
                <button className="btn-forum">Join Community Forum</button>
              </div>
            </div>
          </div>

          <div className="resource-section">
            <h2><Award size={24} /> Wellness Challenges</h2>
            <div className="challenges-grid">
              {challenges.map((challenge, index) => (
                <div key={index} className="challenge-card">
                  <div className="challenge-info">
                    <h3>{challenge.title}</h3>
                    <div className="challenge-meta">
                      <span className="participants">{challenge.participants} participants</span>
                      <span className={`difficulty ${challenge.difficulty.toLowerCase().replace(' ', '-')}`}>
                        {challenge.difficulty}
                      </span>
                    </div>
                  </div>
                  <button className="btn-challenge">Start Challenge</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;