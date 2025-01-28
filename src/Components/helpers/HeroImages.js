import React, { useState, useEffect } from 'react';
import './HeroImages.css'

import img1 from '../../assets/images/bar_mitzvah/bar_mitzvah_1.jpg';
import img3 from '../../assets/images/bar_mitzvah/bar_mitzvah_2.jpg';
import img4 from '../../assets/images/bar_mitzvah/bar_mitzvah_3.jpg';
import img5 from '../../assets/images/bar_mitzvah/bar_mitzvah_4.jpg';

const HeroImages = () => {
  const images = [img1, img3, img4, img5];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // תחלופה כל 3 שניות
    }, 6000);

    return () => clearInterval(interval); // ניקוי interval כשהקומפוננטה מתפרקת
  }, [images.length]);

  return (
    <div style={styles.app}>
      <div style={styles.imageContainer}>
        <img
          src={images[currentImage]}
          alt={`slide-${currentImage}`}
          className="carousel-image"
        />
      </div>
    </div>
  );
};

const styles = {
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    backgroundColor: 'rgb(26, 26, 26)',
    width: '100%',
  },
  imageContainer: {
    position: 'relative',
    width: '80%',
    maxWidth: '800px',
    height: '400px',
    overflow: 'hidden',
    borderRadius: '10px',
  },
};

export default HeroImages;
