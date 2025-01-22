import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShareIcon from "@mui/icons-material/Share";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogForImage = ({ open, onClose, image, allImages = [] }) => {
  const [zoom, setZoom] = React.useState(1);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const index = allImages.findIndex((img) => img.image === image.image);
    setCurrentImageIndex(index >= 0 ? index : 0);
  }, [image, allImages]);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: image.label,
          text: 'Check out this image!',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === allImages.length - 1 ? 0 : prev + 1
    );
    setZoom(1);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? allImages.length - 1 : prev - 1
    );
    setZoom(1);
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const currentImage = allImages[currentImageIndex] || image;

  const styles = {
    dialog: {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    dialogPaper: {
      borderRadius: "16px",
      maxWidth: "90vw",
      maxHeight: "90vh",
      backgroundColor: '#1a1a1a',
      overflow: "hidden",
    },
    header: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      padding: "16px",
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1,
    },
    closeButton: {
      color: "#fff",
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
    },
    content: {
      padding: '0 !important',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
    },
    imageContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    image: {
      maxWidth: '100%',
      maxHeight: '70vh',
      objectFit: 'contain',
      transform: `scale(${zoom})`,
      transition: 'transform 0.3s ease',
    },
    controls: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '16px',
      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
      display: 'flex',
      justifyContent: 'center',
      gap: '12px',
    },
    controlButton: {
      color: '#fff',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      },
    },
    title: {
      color: '#fff',
      fontSize: '1.2rem',
      fontWeight: 500,
    },
    navigationButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#fff',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      width: '48px',
      height: '48px',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
      zIndex: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    prevButton: {
      left: '20px',
      borderRadius: '50%',
    },
    nextButton: {
      right: '20px',
      borderRadius: '50%',
    },
    navigationIcon: {
      fontSize: '2rem',
      color: '#fff',
    },
    imageCounter: {
      position: 'absolute',
      top: '16px',
      left: '50%',
      transform: 'translateX(-50%)',
      color: '#fff',
      fontSize: '0.9rem',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '4px 12px',
      borderRadius: '12px',
    },
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      sx={styles.dialog}
      PaperProps={{
        sx: styles.dialogPaper
      }}
      maxWidth={false}
    >
      <Box sx={styles.header}>
        <Typography sx={styles.title}>
          {currentImage.label}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            onClick={toggleFullscreen}
            sx={styles.controlButton}
          >
            {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </IconButton>
          <IconButton
            onClick={onClose}
            sx={styles.closeButton}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      <DialogContent sx={styles.content}>
        {allImages.length > 1 && (
          <>
            <IconButton
              onClick={handlePrevious}
              sx={{ ...styles.navigationButton, ...styles.prevButton }}
            >
              <NavigateBeforeIcon sx={styles.navigationIcon} />
            </IconButton>

            <IconButton
              onClick={handleNext}
              sx={{ ...styles.navigationButton, ...styles.nextButton }}
            >
              <NavigateNextIcon sx={styles.navigationIcon} />
            </IconButton>

            <Box sx={styles.imageCounter}>
              {currentImageIndex + 1} / {allImages.length}
            </Box>
          </>
        )}

        <Box sx={styles.imageContainer}>
          <img
            src={currentImage.image}
            alt={currentImage.label}
            style={styles.image}
          />
        </Box>

        <Box sx={styles.controls}>
          <IconButton
            onClick={handleZoomOut}
            sx={styles.controlButton}
            disabled={zoom <= 0.5}
          >
            <ZoomOutIcon />
          </IconButton>
          <IconButton
            onClick={handleZoomIn}
            sx={styles.controlButton}
            disabled={zoom >= 2}
          >
            <ZoomInIcon />
          </IconButton>
          <IconButton
            onClick={handleShare}
            sx={styles.controlButton}
          >
            <ShareIcon />
          </IconButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default DialogForImage;
