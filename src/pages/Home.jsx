import { ArrowRight, Calendar, Users, Star } from 'lucide-react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-badge stagger-1">Play for HIS Glory</div>
          <h1 className="hero-title stagger-2">
            Welcome to <span className="highlight">Charlotte</span> <br /> Pickle Bros
          </h1>
          <p className="hero-subtitle stagger-3">
            Join the fastest growing pickleball community in North Carolina.
            Whether you're a beginner or a pro, there's a court waiting for you.
          </p>
          <div className="hero-actions stagger-3">
            <button onClick={() => navigate('/tournaments')} className="btn-primary">
              Find a Tournament <ArrowRight size={20} />
            </button>
            <button onClick={() => navigate('/about')} className="btn-secondary secondary">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section container">
        <div className="grid grid-cols-3">
          <div className="feature-card" onClick={() => navigate('/tournaments')} style={{ cursor: 'pointer' }}>
            <div className="feature-icon"><Calendar size={32} /></div>
            <h3>Competitive Tournaments</h3>
            <p>Regularly scheduled local and regional tournaments for all skill levels.</p>
          </div>
          <div className="feature-card" onClick={() => navigate('/coaching')} style={{ cursor: 'pointer' }}>
            <div className="feature-icon"><Star size={32} /></div>
            <h3>Expert Coaching</h3>
            <p>Elevate your game with clinics and private lessons from certified pros.</p>
          </div>
          <div className="feature-card" onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>
            <div className="feature-icon"><Users size={32} /></div>
            <h3>Vibrant Community</h3>
            <p>Connect with players, find partners, and enjoy the social side of the sport.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
