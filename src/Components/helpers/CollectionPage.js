import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, ImageList, ImageListItem } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import { IMAGE_LIST } from "../../consts/SubjectsList";
import DialogForImage from "./Dialog";

const CollectionPage = () => {
  const [selectedImages, setSelectedImages] = useState(null);
  const { label } = useParams();
  const navigate = useNavigate();
  const collection = IMAGE_LIST.find((item) => item.label === label);

  if (!collection) {
    return <p>Collection not found.</p>;
  }

  const filteredImages = IMAGE_LIST.filter(
    (image) => image.label === collection.label
  );

  const handleOpenDialog = (image) => {
    setSelectedImages(image);
  };

  const handleCloseDialog = () => {
    setSelectedImages(null);
  };

  return (
    <div >
      <h1 >
        <Button
          style={{ border: "1px solid #0072ff" }}
          endIcon={<ArrowBack />}
          onClick={() => navigate("/works")}
        ></Button>
        {collection.label}
      </h1>

      {/* Gallery for the images */}
      <ImageList variant="masonry" cols={2} gap={5}>
        {filteredImages.map((image, index) => (
          <ImageListItem key={index} onClick={() => handleOpenDialog(image)}>
            <img
              src={`${image.image}?w=248&fit=crop&auto=format`}
              srcSet={`${image.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={image.label}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      {selectedImages && (
        <DialogForImage
          open={!!selectedImages}
          onClose={handleCloseDialog}
          image={selectedImages}
        />
      )}
    </div>
  );
};

export default CollectionPage;
