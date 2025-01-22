import React from "react";
import { useNavigate } from "react-router-dom";
import { COLLECTION_LIST } from "../../consts/SubjectsList";

const Works = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: '20px',
    },
    imageWrapper: {
      width: '100%', // תופס 100% מהמסך
      maxWidth: '600px', // הגבלה מקסימלית לרוחב של כל תמונה (אפשר לשנות)
      marginBottom: '20px',
      overflow: 'hidden',
    },
    image: {
      width: '100%', // תופס את כל רוחב הקונטיינר
      height: 'auto', // שומר על פרופורציות של התמונה
      objectFit: 'cover', // ימנע עיוות בתמונה אם היא לא מתאימה בול לגודל שלה
    },
    label: {
      textAlign: 'center',
      marginTop: '10px',
      fontWeight: 'bold',
    }
  };

  return (
    <div>
      <p>גלריית התמונות</p>
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
