import React, { useState } from 'react';
import { Button } from './ui/button';
import { removeBackground, loadImage } from '../utils/backgroundRemoval';
import aiCharacterTechMale from '../assets/ai-character-tech-male.png';

export const BackgroundRemover: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const handleRemoveBackground = async () => {
    setIsProcessing(true);
    
    try {
      // Load the tech male character image
      const response = await fetch(aiCharacterTechMale);
      const blob = await response.blob();
      const imageElement = await loadImage(blob);
      
      // Remove background
      const resultBlob = await removeBackground(imageElement);
      
      // Create URL for the processed image
      const processedUrl = URL.createObjectURL(resultBlob);
      setProcessedImage(processedUrl);
      
      // Download the processed image
      const link = document.createElement('a');
      link.href = processedUrl;
      link.download = 'ai-character-tech-male-no-bg.png';
      link.click();
      
    } catch (error) {
      console.error('Error removing background:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h3 className="text-lg font-semibold">Supprimer le fond du personnage</h3>
      
      <div className="flex gap-4">
        <div>
          <p className="text-sm text-muted-foreground mb-2">Image originale:</p>
          <img 
            src={aiCharacterTechMale} 
            alt="Original" 
            className="w-32 h-32 object-contain border rounded"
          />
        </div>
        
        {processedImage && (
          <div>
            <p className="text-sm text-muted-foreground mb-2">Sans fond:</p>
            <img 
              src={processedImage} 
              alt="Sans fond" 
              className="w-32 h-32 object-contain border rounded"
            />
          </div>
        )}
      </div>
      
      <Button 
        onClick={handleRemoveBackground}
        disabled={isProcessing}
        className="w-full"
      >
        {isProcessing ? 'Traitement en cours...' : 'Supprimer le fond'}
      </Button>
    </div>
  );
};