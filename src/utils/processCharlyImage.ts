import { removeBackground, loadImage } from './backgroundRemoval';
import aiCharacterTechMale from '../assets/ai-character-tech-male.png';

export const processCharlyImage = async (): Promise<string> => {
  try {
    // Load the original tech male character image
    const response = await fetch(aiCharacterTechMale);
    const blob = await response.blob();
    const imageElement = await loadImage(blob);
    
    // Remove background using the AI segmentation
    const resultBlob = await removeBackground(imageElement);
    
    // Create URL for the processed image
    const processedUrl = URL.createObjectURL(resultBlob);
    
    return processedUrl;
  } catch (error) {
    console.error('Error processing Charly image:', error);
    throw error;
  }
};