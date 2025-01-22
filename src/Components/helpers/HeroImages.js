import React from "react";
import mainphoto from "../../assets/images/circumcision/circumcision_3.jpg";
import { Box, Typography } from '@mui/material';

const HeroImages = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: { xs: '60vh', sm: '50vh', md: '45vh' }, // Reduced responsive heights
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${mainphoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%", // Adjusted to show better part of image
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          transition: 'transform 0.8s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          width: '100%',
          padding: '0 20px',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: 'white',
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.2rem' },
            fontWeight: '300', // Lighter weight for elegance
            letterSpacing: '4px',
            fontFamily: 'Heebo, sans-serif',
            textTransform: 'uppercase',
            opacity: 0.95,
            transition: 'all 0.4s ease',
            textShadow: '2px 2px 15px rgba(0,0,0,0.3)',
            marginBottom: '15px',
            '&:hover': {
              letterSpacing: '6px',
              textShadow: '2px 2px 20px rgba(0,0,0,0.4)',
            },
          }}
        >
          לתפוס את הרגעים
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
            fontWeight: '300',
            letterSpacing: '8px',
            fontFamily: 'Heebo, sans-serif',
            textTransform: 'uppercase',
            opacity: 0.85,
            transition: 'all 0.4s ease',
            textShadow: '2px 2px 10px rgba(0,0,0,0.3)',
            '&::before, &::after': {
              content: '""',
              display: 'inline-block',
              width: { xs: '40px', sm: '60px', md: '80px' },
              height: '1px',
              backgroundColor: 'rgba(255,255,255,0.7)',
              margin: '0 15px',
              verticalAlign: 'middle',
              transition: 'all 0.4s ease',
            },
            '&:hover': {
              letterSpacing: '10px',
              '&::before, &::after': {
                width: { xs: '60px', sm: '80px', md: '100px' },
                backgroundColor: 'rgba(255,255,255,0.9)',
              },
            },
          }}
        >
          שלכם
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroImages;
