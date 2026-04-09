import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { removeBackground, loadImageFromUrl } from '../utils/backgroundRemoval';
import { Upload, Download, Loader2, Image as ImageIcon, Wand2 } from 'lucide-react';

// Import new background-free character images
import aiCharacterFemaleNoBg from '../assets/ai-character-female-no-bg.png';
import aiCharacterMaleNoBg from '../assets/ai-character-male-no-bg.png';
import aiCharacterFuturisticNoBg from '../assets/ai-character-futuristic-no-bg.png';
import charlyCharacterNoBg from '../assets/charly-character-no-bg.png';

export const BackgroundRemover: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const characterImages = [
    { name: 'Personnage féminin IA', src: aiCharacterFemaleNoBg },
    { name: 'Personnage masculin IA', src: aiCharacterMaleNoBg },
    { name: 'Personnage futuriste IA', src: aiCharacterFuturisticNoBg },
    { name: 'Charly (Assistant IA)', src: charlyCharacterNoBg },
  ];

  const downloadAllImages = () => {
    characterImages.forEach((image, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = image.src;
        link.download = `${image.name.toLowerCase().replace(/\s+/g, '-')}-no-bg.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 200); // Delay each download by 200ms
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="w-5 h-5" />
          Personnages IA sans arrière-plan
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Collection de personnages IA avec arrière-plans transparents, prêts à l'emploi.
          </p>
          <Button onClick={downloadAllImages} className="mb-6">
            <Download className="w-4 h-4 mr-2" />
            Télécharger toutes les images
          </Button>
        </div>

        {/* Character Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {characterImages.map((character, index) => (
            <div key={index} className="space-y-2">
              <div className="aspect-square border border-border rounded-lg overflow-hidden bg-secondary dark:bg-card p-4" style={{
                backgroundImage: `
                  linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
                  linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
                  linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
                  linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
              }}>
                <img
                  src={character.src}
                  alt={character.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-sm font-medium text-center">{character.name}</p>
              <Button 
                size="sm" 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = character.src;
                  link.download = `${character.name.toLowerCase().replace(/\s+/g, '-')}-no-bg.png`;
                  link.click();
                }}
              >
                <Download className="w-3 h-3 mr-1" />
                Télécharger
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};