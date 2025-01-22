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

// const labelsArray = [
//   "חתונות",
//   "אירוסין",
//   "בר מצווה",
//   "ברית מילה",
//   "פתיחת עסק",
//   "אירועי צדקה",
//   "הופעות",
// ];

const imageList = [
  ...designImages.keys().map((image, index) => ({
    id: index + 1,
    label: "תפאורה",
    image: designImages(image),
    collection: "design",
  })),
  ...circumcisionImages.keys().map((image, index) => ({
    id: designImages.keys().length + index + 1,
    label: "ברית מילה",
    image: circumcisionImages(image),
    collection: "circumcision",
  })),
  ...barMitzvahImages.keys().map((image, index) => ({
    id: circumcisionImages.keys().length + index + 1,
    label: "בר מצווה",
    image: barMitzvahImages(image),
    collection: "bar_mitzvah",
  })),
];

const collectionList = [
  imageList.find((item) => item.collection === "design"),
  imageList.find(
    (item) => item.collection === "circumcision" && item.id === 30
  ), // hard coded id for better resolution
  imageList.find(
    (item) => item.collection === "bar_mitzvah" && item.id === 105
  ), // hard coded id for better resolution
];

const carouselList = [
  imageList.find((item) => item.collection === "design"),
  imageList.find((item) => item.collection === "circumcision" && item.id === 38),
  imageList.find((item) => item.collection === "bar_mitzvah" && item.id === 92),
];

export const IMAGE_LIST = imageList;
export const COLLECTION_LIST = collectionList;
export const CAROUSEL_LIST = carouselList;
