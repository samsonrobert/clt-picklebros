import './About.css';
import { Target, Heart, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page animate-fade-in container">
      <div className="page-header">
        <h1>About <span className="highlight">Charlotte Pickle Bros</span></h1>
        <p>Our story and our mission to grow the best community in the Queen City.</p>
      </div>

      <div className="about-content">
        <section className="about-hero">
          <div className="about-image">
            <img src="/gallery-01.jpg" alt="Pickleball courts" />
          </div>
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Charlotte Pickle Bros started as a small group of friends who found a shared
              passion for the sport of pickleball. What began as casual weekend matches
              quickly grew into a burning desire to create a structured, competitive, and
              deeply supportive community in the heart of Charlotte.
            </p>
            <p>
              We believe in the power of sports to bring people together. Guided by our
              motto, <strong>"Play for HIS Glory"</strong>, we focus on integrity,
              sportsmanship, and pushing each other to be our best both on and off the court.
            </p>
          </div>
        </section>

        <section className="core-values">
          <h2>Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><Heart size={32} /></div>
              <h3>Community First</h3>
              <p>We welcome players of all backgrounds and skill levels. Everyone has a place on our courts.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Target size={32} /></div>
              <h3>Excellence</h3>
              <p>Through our tournaments and coaching, we strive for high-quality play and continuous improvement.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Shield size={32} /></div>
              <h3>Integrity</h3>
              <p>Honesty in line calls, respect for opponents, and playing with a sense of higher purpose.</p>
            </div>
          </div>
        </section>

        <section className="contact-us" style={{ textAlign: 'center', marginTop: '2rem', padding: '3rem', backgroundColor: 'var(--bg-elevated)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h2>Contact Us</h2>
          <p style={{ fontSize: '1.2rem', marginTop: '1.5rem', color: 'var(--text-main)' }}>
            <strong>Club Director:</strong> Albert Johnson<br />
            <span style={{ display: 'inline-block', marginTop: '0.8rem' }}>
              <strong>Email Us:</strong> <a href="mailto:CLTPicklebros@yahoo.com" style={{ color: 'var(--p-light-blue)', textDecoration: 'underline' }}>CLTPicklebros@yahoo.com</a>
            </span>
          </p>
          <p style={{ color: 'var(--text-muted)', marginTop: '1.5rem' }}>
            Reach out to us for any questions regarding tournaments, coaching, or joining the club!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
