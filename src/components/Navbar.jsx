import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tournaments', path: '/tournaments' },
    { name: 'Coaching', path: '/coaching' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-logo">
          <NavLink to="/" className="logo-link">
            <img src="/CharlottePickleBros-Logo.jpg" alt="Charlotte Pickle Bros Logo" className="logo-image" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            <div className="logo-text">
              <span className="logo-title">Charlotte Pickle Bros</span>
              <span className="logo-subtitle">Play for HIS Glory</span>
            </div>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-links desktop-only">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
            >
              {link.name}
              <div className="nav-indicator"></div>
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle desktop-hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? 'mobile-nav-item active' : 'mobile-nav-item'
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
