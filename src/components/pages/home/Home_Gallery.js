import React, { useState } from "react";

// Sample images (replace with your hotel images)
const images = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  "https://images.unsplash.com/photo-1533777324565-a040eb52fac2",
  "https://images.unsplash.com/photo-1542317854-4157ff6b70fa",
  "https://images.unsplash.com/photo-1542317854-4167ff6b70fa",
];

const Home_Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        
        {/* Header */}
        <div className="gallery-header">
          <h5>Gallery</h5>
          <h2>Experience Luxury Through Our Photos</h2>
          <p>Explore our rooms, restaurant, spa, and exclusive events.</p>
        </div>

        {/* Grid */}
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div className="lightbox" onClick={closeLightbox}>
            <img src={images[lightboxIndex]} alt={`Gallery ${lightboxIndex + 1}`} />
            <span className="close-btn" onClick={closeLightbox}>&times;</span>
          </div>
        )}

      </div>
    </section>
  );
};

export default Home_Gallery;
