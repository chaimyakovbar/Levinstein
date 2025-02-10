const imageCollections = {
  designs: require.context(
    "../assets/images/designs",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  circumcision: require.context(
    "../assets/images/circumcision",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  bar_miztva: require.context(
    "../assets/images/bar_miztva",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  bat_miztva: require.context(
    "../assets/images/bat_miztva",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  wedding: require.context(
    "../assets/images/wedding",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  engagement: require.context(
    "../assets/images/engagement",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  tefilin: require.context(
    "../assets/images/tefilin",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  business: require.context(
    "../assets/images/business",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  carousel: require.context(
    "../assets/images/carousle_images",
    false,
    /\.(png|jpe?g|svg)$/
  ),
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
  carousel: "סקרים",
};

const BATCH_SIZE = 24;

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

// Create initial batch with images from all collections
let currentStartId = 1;
const initialBatches = Object.entries(imageCollections).reduce(
  (acc, [key, context]) => {
    if (key === "carousel") return acc;

    try {
      const images = context.keys().slice(0, 4);
      const batchImages = images.map((image, index) => ({
        id: currentStartId + index,
        label: collectionLabels[key],
        image: context(image),
        collection: key,
      }));
      currentStartId += context.keys().length;
      return [...acc, ...batchImages];
    } catch (error) {
      console.error(`Error processing collection ${key}:`, error);
      return acc;
    }
  },
  []
);

const remainingBatches = Object.entries(imageCollections).reduce(
  (acc, [key, context]) => {
    if (key === "carousel") return acc;

    try {
      const images = context.keys().slice(4);
      const batches = createImageBatches(
        context,
        collectionLabels[key],
        key,
        currentStartId
      );
      currentStartId += images.length;
      return [...acc, ...batches];
    } catch (error) {
      console.error(`Error processing collection ${key}:`, error);
      return acc;
    }
  },
  []
);

export const IMAGE_LIST = initialBatches;
export const REMAINING_BATCHES = remainingBatches;
export const COLLECTION_LIST = Object.entries(imageCollections)
  .filter(([key]) => key !== "carousel")
  .map(([key]) => ({
    id: key === "designs" ? 1 : currentStartId++,
    label: collectionLabels[key],
    image: imageCollections[key](imageCollections[key].keys()[0]),
    collection: key,
  }))
  .filter((item) => item && item.image);

export const CAROUSEL_LIST = imageCollections.carousel
  .keys()
  .map((image, index) => ({
    id: index + 1,
    image: imageCollections.carousel(image),
    collection: "carousel",
  }))
  .filter((item) => item && item.image);
