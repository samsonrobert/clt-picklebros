import { Calendar, MapPin, Trophy } from 'lucide-react';
import './Tournaments.css';

const Tournaments = () => {
  const upcomingTournaments = [
    {
      id: 1,
      title: 'CPB April 2026 Round Robin',
      date: 'April 12 &18, 2026',
      location: 'Pickleball Charlotte',
      level: 'Coed Doubles (3.5-3.75 & 3.75-4.5+)',
      prize: 'Medals & Gift cards',
    },
    {
      id: 2,
      title: 'CPB May 2026 Round Robin',
      date: 'May 2, 2026',
      location: 'Kannapolis Pickleball  Club',
      level: 'All Levels (3.0 - 4.5+)',
      prize: 'Medals & Gift cards',
    },
    {
      id: 3,
      title: 'CPB 4th Annual Tournament',
      date: 'September 12, 2026',
      location: 'Kannapolis Pickleball Club',
      level: 'All Levels ( 3.0 - 4.5+',
      prize: 'Medals & Gift cards',
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
            <button className="btn-register" onClick={() => window.open('https://pickleballtournaments.com/', '_blank', 'noopener,noreferrer')}>Register Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;
