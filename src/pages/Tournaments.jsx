import { Calendar, MapPin, Trophy } from 'lucide-react';
import './Tournaments.css';

const Tournaments = () => {
  const upcomingTournaments = [
    {
      id: 1,
      title: 'CPB Spring Tournament May 2026',
      date: 'May 9, 2026',
      location: 'Carolina Pickleball Club, Kannaplois,NC',
      level: 'DUPR 3.5 - 3.99 and DUPR 4.0 and Above',
      prize: 'Trophies & Gift cards',
      registrationUrl: 'https://pickleballtournaments.com/tournaments/cpb-spring-pickleball-tournament'
    },
    {
      id: 2,
      title: 'CPB 4th Annual Tournament',
      date: 'September 12, 2026',
      location: 'Carolina Pickleball Club, Kannaplois,NC',
      level: 'All Levels ( 3.0 - 4.5+)',
      prize: 'Trophies & Gift cards',
      registrationUrl: 'https://pickleballtournaments.com/tournaments/cpb-4th-annual-pickleball-tournament'
    }
  ];

  const pastTournaments = [
    {
      id: 1,
      title: 'CPB - BCH Junoon Fundraiser',
      date: 'March 31st, 2026',
      location: 'Pickleball Charlotte',
      level: 'Coed Doubles (3.5-3.75 & 3.75-4.5+)',
      prize: 'Medals & Gift cards',
      registrationUrl: 'https://pickleballtournaments.com/tournaments/bch-pickleball-fundraiser'
    }
  ];

  return (
    <div className="tournaments-page animate-fade-in container">
      <div className="page-header">
        <h1>Upcoming <span className="highlight">Tournaments</span></h1>
        <p>Compete, win prizes, and have fun. Register for our upcoming events below.</p>
      </div>

      <div className="tournaments-grid">
        {upcomingTournaments.map((tourney) => (
          <div key={tourney.id} className="tournament-card">
            <div className="tourney-header">
              <h2>{tourney.title}</h2>
              <span className="tourney-prize"><Trophy size={16} /> {tourney.prize}</span>
            </div>
            <div className="tourney-details">
              <p><Calendar size={18} /> {tourney.date}</p>
              <p><MapPin size={18} /> {tourney.location}</p>
              <p><span className="level-badge">{tourney.level}</span></p>
            </div>
            <button className="btn-register" onClick={() => window.open(tourney.registrationUrl || 'https://pickleballtournaments.com/', '_blank', 'noopener,noreferrer')}>Register Now</button>
          </div>
        ))}
      </div>

      <div className="page-header" style={{ marginTop: '4rem' }}>
        <h2>Past <span className="highlight">Tournaments</span></h2>
        <p>A look back at our previous events.</p>
      </div>

      <div className="tournaments-grid">
        {pastTournaments.map((tourney) => (
          <div key={tourney.id} className="tournament-card" style={{ opacity: 0.8 }}>
            <div className="tourney-header">
              <h2>{tourney.title}</h2>
              <span className="tourney-prize"><Trophy size={16} /> {tourney.prize}</span>
            </div>
            <div className="tourney-details">
              <p><Calendar size={18} /> {tourney.date}</p>
              <p><MapPin size={18} /> {tourney.location}</p>
              <p><span className="level-badge">{tourney.level}</span></p>
            </div>
            <button className="btn-register" style={{ backgroundColor: 'var(--text-muted)', cursor: 'not-allowed' }} disabled>Completed</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;
