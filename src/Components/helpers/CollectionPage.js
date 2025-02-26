import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const imageCollections = {
  designs: require.context("../../assets/images/designs", false, /\.(png|jpe?g|svg)$/),
  circumcision: require.context("../../assets/images/circumcision", false, /\.(png|jpe?g|svg)$/),
  bar_miztva: require.context("../../assets/images/bar_miztva", false, /\.(png|jpe?g|svg)$/),
  bat_miztva: require.context("../../assets/images/bat_miztva", false, /\.(png|jpe?g|svg)$/),
  wedding: require.context("../../assets/images/wedding", false, /\.(png|jpe?g|svg)$/),
  engagement: require.context("../../assets/images/engagement", false, /\.(png|jpe?g|svg)$/),
  tefilin: require.context("../../assets/images/tefilin", false, /\.(png|jpe?g|svg)$/),
  business: require.context("../../assets/images/business", false, /\.(png|jpe?g|svg)$/),
};

const collectionLabels = {
  designs: "תפאורה",
  circumcision: "ברית מילה",
  bar_miztva: "בר מצווה",
  bat_miztva: "בת מצווה",
  wedding: "חתונה",
  engagement: "אירוסין",
  tefilin: "הנחת תפילין",
  business: "עסקים",
};

const CollectionPage = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);

  return (
    <Box sx={{ backgroundColor: "#1a1a1a", minHeight: "100vh", padding: "20px", color: "#f5f5f5" }}>
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "20px" }}>
        גלריית תמונות
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
        {Object.keys(collectionLabels).map((key) => (
          <Button
            key={key}
            onClick={() => setSelectedCollection(key)}
            sx={{
              backgroundColor: selectedCollection === key ? "#f5f5f5" : "rgba(255, 255, 255, 0.2)",
              color: selectedCollection === key ? "#1a1a1a" : "#f5f5f5",
              borderRadius: "8px",
              padding: "10px 20px",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.3)" },
            }}
          >
            {collectionLabels[key]}
          </Button>
        ))}
      </Box>

      {selectedCollection && (
        <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
          <Typography variant="h5">{collectionLabels[selectedCollection]}</Typography>
        </Box>
      )}

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "15px", maxWidth: "1200px", margin: "0 auto" }}>
        {selectedCollection &&
          imageCollections[selectedCollection]
            .keys()
            .map((imagePath, index) => {
              const imgSrc = imageCollections[selectedCollection](imagePath);
              const img = new Image();
              img.src = imgSrc;
              const aspectRatio = img.width / img.height;
              let spanConfig = {};
              
              if (aspectRatio > 1.5) {
                spanConfig = { gridColumn: "span 2", gridRow: "span 1" };
              } else if (aspectRatio < 0.9) {
                spanConfig = { gridColumn: "span 1", gridRow: "span 2" };
              } else {
                spanConfig = { gridColumn: "span 1", gridRow: "span 1" };
              }
              
              return (
                <Box key={index} sx={{ borderRadius: "12px", overflow: "hidden", backgroundColor: "#2a2a2a", ...spanConfig }}>
                  <LazyLoadImage
                    src={imgSrc}
                    alt={collectionLabels[selectedCollection]}
                    effect="blur"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
              );
            })}
      </Box>
    </Box>
  );
};

export default CollectionPage;
