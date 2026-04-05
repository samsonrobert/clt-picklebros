import './Gallery.css';

const Gallery = () => {
  const images = [
    '/gallery-01.jpg',
    '/gallery-02.JPG',
    '/gallery-03.jpeg',
    '/gallery-04.JPG',
    '/gallery-05.JPG',
    '/gallery-06.JPG',
    '/gallery-07.JPG',
    '/gallery-08.JPG',
    '/gallery-09.JPG',
    '/gallery-10.JPG'
  ];

  return (
    <div className="gallery-page animate-fade-in container">
      <div className="page-header">
        <h1>Photo <span className="highlight">Gallery</span></h1>
        <p>Memories from our recent tournaments, clinics, and open play sessions.</p>
      </div>

      <div className="gallery-grid">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img src={img} alt={`Pickleball moment ${idx + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
