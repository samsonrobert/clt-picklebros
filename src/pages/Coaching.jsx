import { CheckCircle } from 'lucide-react';
import './Coaching.css';

const Coaching = () => {
  const coaches = [
    {
      name: 'Coach Albert Johnson',
      role: 'Head Professional',
      bio: 'Former tennis pro turned pickleball addict. Specializes in strategy and mechanics.',
      image: '/coach-johnson.jpg'
    },
    {
      name: 'Coach Hanish',
      role: 'Beginner Clinic Lead',
      bio: 'Patient and encouraging. Perfect for those picking up a paddle for the first time.',
      image: '/coach-hanish.JPG'
    }
  ];

  return (
    <div className="coaching-page animate-fade-in container">
      <div className="page-header">
        <h1>Elevate Your <span className="highlight">Game</span></h1>
        <p>Private lessons, group clinics, and drilling sessions for all skill levels.</p>
      </div>

      <div className="coaching-content">
        <div className="coaches-section">
          <h2>Meet Our Coaches</h2>
          <div className="coaches-grid">
            {coaches.map((coach, idx) => (
              <div key={idx} className="coach-card">
                <img src={coach.image} alt={coach.name} className="coach-image" />
                <div className="coach-info">
                  <h3>{coach.name}</h3>
                  <span className="coach-role">{coach.role}</span>
                  <p>{coach.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pricing-section">
          <h2>Training Options</h2>
          <div className="pricing-cards">
            <div className="price-card">
              <h3>Private Lesson</h3>
              <div className="price">$60 <span>/ hr</span></div>
              <ul>
                <li><CheckCircle size={18} className="check-icon" /> 1-on-1 focus</li>
                <li><CheckCircle size={18} className="check-icon" /> Video analysis</li>
                <li><CheckCircle size={18} className="check-icon" /> Customized drills</li>
              </ul>
              <button>Book Now</button>
            </div>
            <div className="price-card featured">
              <div className="featured-badge">Most Popular</div>
              <h3>Group Clinic</h3>
              <div className="price">$25 <span>/ session</span></div>
              <ul>
                <li><CheckCircle size={18} className="check-icon" /> 4-8 players</li>
                <li><CheckCircle size={18} className="check-icon" /> Skill-based groups</li>
                <li><CheckCircle size={18} className="check-icon" /> Tactical gameplay</li>
              </ul>
              <button>View Schedule</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coaching;
