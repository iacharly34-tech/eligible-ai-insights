import { removeBackground, loadImageFromUrl } from './backgroundRemoval';

export const processCharlyImage = async (): Promise<string> => {
  try {
    // Load the current Charly image from the uploaded file
    const charlyImageUrl = '/lovable-uploads/6537d5ff-d496-4132-a49b-75e2d127ec58.png';
    const imageElement = await loadImageFromUrl(charlyImageUrl);
    
    // Remove background using the AI segmentation
    const resultBlob = await removeBackground(imageElement);
    
    // Create URL for the processed image
    const processedUrl = URL.createObjectURL(resultBlob);
    
    return processedUrl;
  } catch (error) {
    console.error('Error processing Charly image:', error);
    // Return original image as fallback
    return '/lovable-uploads/6537d5ff-d496-4132-a49b-75e2d127ec58.png';
  }
};