import React from "react";
import { Box, Typography } from '@mui/material';

const AboutSection = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(38, 38, 38, 0.9))',
        padding: { xs: '40px 20px', md: '60px 40px' },
        borderRadius: '20px',
        maxWidth: '1000px',
        margin: '40px auto',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "white",
          textAlign: "center",
          maxWidth: "800px",
          mx: "auto",
          fontSize: { xs: "1rem", md: "1.2rem" },
          lineHeight: 1.8,
          fontWeight: 400,
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          '& br': {
            display: 'block',
            content: '""',
            marginTop: "1.5em",
          },
        }}
      >
        שלום! אני נתנאל, צלם מקצועי המתמחה בתפיסת רגעים ייחודיים וסיפורי חיים
        דרך העדשה. עבורי, צילום הוא דרך לחבר אנשים לרגעים ולרגשות בצורה
        ייחודית ואותנטית.
        <br />
        כל מפגש צילומי מותאם אישית לחלומות ולרצונות שלך, עם דגש על חוויות
        משמעותיות, אווירה נינוחה, ורגישות לפרטים הקטנים שהופכים כל צילום
        ליצירת אמנות.
        <br />
        אני מזמין אותך ליצור יחד זיכרונות יפים שילוו אותך לנצח – בואו נצלם
        את הסיפור שלך.
      </Typography>
    </Box>
  );
};

export default AboutSection; 