import './Footer.css';
import { Trophy } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <Trophy className="logo-icon" size={24} />
            <span className="logo-title">Charlotte Pickle Bros</span>
          </div>
          <p className="footer-motto">Play for HIS Glory</p>
          <p className="footer-desc">
            Bringing the community together through the amazing sport of Pickleball in Charlotte, NC.
          </p>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/tournaments">Tournaments</a></li>
            <li><a href="/coaching">Coaching</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://dashboard.dupr.com/dashboard/browse/clubs/6604911172" target="_blank" rel="noopener noreferrer" title="DUPR Dashboard" style={{ width: 'auto', padding: '0 1rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '700' }}>
              DUPR Club
            </a>
            <a href="https://www.pickleheads.com/groups/clt-picklebros" target="_blank" rel="noopener noreferrer" title="Pickleheads Group" style={{ width: 'auto', padding: '0 1rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '700' }}>
              Pickleheads
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Charlotte Pickle Bros. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
