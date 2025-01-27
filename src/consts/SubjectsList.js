const designImages = require.context(
  "../assets/images/design",
  false,
  /\.(png|jpe?g|svg)$/
);
const circumcisionImages = require.context(
  "../assets/images/circumcision",
  false,
  /\.(png|jpe?g|svg)$/
);
const barMitzvahImages = require.context(
  "../assets/images/bar_mitzvah",
  false,
  /\.(png|jpe?g|svg)$/
);

const BATCH_SIZE = 16; // Number of images to load in each batch

// Helper function to create image batches
const createImageBatches = (context, label, collection, startId) => {
  const allImages = context.keys();
  const batches = [];

  for (let i = 0; i < allImages.length; i += BATCH_SIZE) {
    const batchImages = allImages
      .slice(i, i + BATCH_SIZE)
      .map((image, index) => ({
        id: startId + i + index,
        label,
        image: context(image),
        collection,
      }));
    batches.push(batchImages);
  }

  return batches;
};

// Create batches for each collection
const designBatches = createImageBatches(designImages, "תפאורה", "design", 1);
const circumcisionBatches = createImageBatches(
  circumcisionImages,
  "ברית מילה",
  "circumcision",
  designImages.keys().length + 1
);
const barMitzvahBatches = createImageBatches(
  barMitzvahImages,
  "בר מצווה",
  "bar_mitzvah",
  designImages.keys().length + circumcisionImages.keys().length + 1
);

// Combine first batch from each collection for initial load
const initialBatch = [
  ...(designBatches[0] || []),
  ...(circumcisionBatches[0] || []),
  ...(barMitzvahBatches[0] || []),
];

// Combine remaining batches
const remainingBatches = [
  ...designBatches.slice(1),
  ...circumcisionBatches.slice(1),
  ...barMitzvahBatches.slice(1),
];

// Ensure specific images are included in initial batch
const requiredIds = [30, 38, 92, 105];
const ensureSpecificImages = (images) => {
  const missingImages = [];

  requiredIds.forEach((id) => {
    if (!images.find((item) => item.id === id)) {
      const collection =
        id <= 30
          ? circumcisionImages
          : id <= 92
          ? barMitzvahImages
          : designImages;

      const label = id <= 30 ? "ברית מילה" : id <= 92 ? "בר מצווה" : "תפאורה";

      const imageIndex = id - 1;
      const image = collection.keys()[imageIndex];

      if (image) {
        missingImages.push({
          id,
          label,
          image: collection(image),
          collection:
            label === "ברית מילה"
              ? "circumcision"
              : label === "בר מצווה"
              ? "bar_mitzvah"
              : "design",
        });
      }
    }
  });

  return [...images, ...missingImages];
};

const finalInitialBatch = ensureSpecificImages(initialBatch);

export const IMAGE_LIST = finalInitialBatch;
export const REMAINING_BATCHES = remainingBatches;
export const COLLECTION_LIST = [
  finalInitialBatch.find(
    (item) => item.collection === "design" && item.id === 1
  ) || {
    id: 1,
    label: "תפאורה",
    image: designImages.keys()[0] && designImages(designImages.keys()[0]),
    collection: "design",
  },
  finalInitialBatch.find(
    (item) => item.collection === "circumcision" && item.id === 30
  ) || {
    id: 30,
    label: "ברית מילה",
    image:
      circumcisionImages.keys()[0] &&
      circumcisionImages(circumcisionImages.keys()[0]),
    collection: "circumcision",
  },
  finalInitialBatch.find(
    (item) => item.collection === "bar_mitzvah" && item.id === 100
  ) || {
    id: 100,
    label: "בר מצווה",
    image:
      barMitzvahImages.keys()[0] &&
      barMitzvahImages(barMitzvahImages.keys()[0]),
    collection: "bar_mitzvah",
  },
].filter((item) => item && item.image);

export const CAROUSEL_LIST = [
  finalInitialBatch.find((item) => item.collection === "design"),
  finalInitialBatch.find(
    (item) => item.collection === "circumcision" && item.id === 38
  ),
  finalInitialBatch.find(
    (item) => item.collection === "bar_mitzvah" && item.id === 100
  ),
].filter((item) => item && item.image);
