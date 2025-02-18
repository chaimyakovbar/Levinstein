import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "eu-north-1",
  credentials: {
    accessKeyId: "AKIAYEKP5YGTHSDIIIGB",
    secretAccessKey: "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"
  }
});

const S3_CONFIG = {
  bucketName: "netanelprojects",
  folders: {
    designs: "designs/",
    circumcision: "circumcision/",
    bar_miztva: "bar_miztva/",
    bat_miztva: "bat_miztva/",
    wedding: "wedding/",
    engagement: "engagement/",
    tefilin: "tefilin/",
    business: "business/",
    carousel: "carousel/"
  }
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

const getS3ObjectUrl = (key) => {
  return `https://${S3_CONFIG.bucketName}.s3.amazonaws.com/${key}`;
};

async function listFolderObjects(folderPrefix) {
  try {
    const command = new ListObjectsV2Command({
      Bucket: S3_CONFIG.bucketName,
      Prefix: folderPrefix
    });
    
    const response = await s3Client.send(command);
    // Transform the S3 response into the format your components expect
    return response.Contents.map(item => ({
      id: item.Key,
      image: `https://${S3_CONFIG.bucketName}.s3.${S3_CONFIG.region}.amazonaws.com/${item.Key}`,
      label: item.Key.split('/')[0] // or however you want to structure the label
    })) || [];
  } catch (error) {
    console.error(`Error listing objects in ${folderPrefix}:`, error);
    return [];
  }
}

async function createImageBatches(folderKey, label, startId) {
  const objects = await listFolderObjects(S3_CONFIG.folders[folderKey]);
  const batches = [];

  for (let i = 0; i < objects.length; i += BATCH_SIZE) {
    const batchImages = objects
      .slice(i, i + BATCH_SIZE)
      .map((object, index) => ({
        id: startId + i + index,
        label,
        image: getS3ObjectUrl(object.id),
        collection: folderKey,
      }));
    batches.push(batchImages);
  }

  return batches;
}

async function initializeCollections() {
  let currentStartId = 1;
  const initialBatches = [];
  const remainingBatches = [];
  const collectionList = [];

  for (const [key, folder] of Object.entries(S3_CONFIG.folders)) {
    if (key === 'carousel') continue;

    try {
      const objects = await listFolderObjects(folder);
      
      const initialImages = objects.slice(0, 4).map((object, index) => ({
        id: currentStartId + index,
        label: collectionLabels[key],
        image: getS3ObjectUrl(object.id),
        collection: key,
      }));
      initialBatches.push(...initialImages);

      const batches = await createImageBatches(
        key,
        collectionLabels[key],
        currentStartId + 4
      );
      remainingBatches.push(...batches);

      if (objects.length > 0) {
        collectionList.push({
          id: key === "designs" ? 1 : currentStartId,
          label: collectionLabels[key],
          image: getS3ObjectUrl(objects[0].id),
          collection: key,
        });
      }

      currentStartId += objects.length;
    } catch (error) {
      console.error(`Error processing collection ${key}:`, error);
    }
  }

  return {
    IMAGE_LIST: initialBatches,
    REMAINING_BATCHES: remainingBatches,
    COLLECTION_LIST: collectionList,
    CAROUSEL_LIST: await getCarouselList()
  };
}

async function getCarouselList() {
  const objects = await listFolderObjects(S3_CONFIG.folders.carousel);
  return objects.map((object, index) => ({
    id: index + 1,
    image: getS3ObjectUrl(object.id),
    collection: "carousel",
  }));
}

export {
  s3Client,
  S3_CONFIG,
  initializeCollections,
  getS3ObjectUrl
}; 