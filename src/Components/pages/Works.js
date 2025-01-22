import React from "react";
import { useNavigate } from "react-router-dom";
import { COLLECTION_LIST } from "../../consts/SubjectsList";

const Works = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px', // Space between items
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    imageWrapper: {
      width: 'calc(33.33% - 20px)',
      minWidth: '300px',
      aspectRatio: '4/3',
      position: 'relative',
      cursor: 'pointer',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
    label: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '15px',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
      color: 'white',
      textAlign: 'center',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      margin: '40px 0',
      color: '#f5f5f5',
    },
  };

  return (
    <div>
      <h1 style={styles.title}>גלריית התמונות</h1>
      <div style={styles.container}>
        {COLLECTION_LIST.map((image) => (
          <div
            key={image.id}
            style={styles.imageWrapper}
            onClick={() => navigate(`/collections/${image.label}`)}
          >
            <img
              src={image.image}
              alt={image.label}
              style={styles.image}
            />
            <div style={styles.label}>{image.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
