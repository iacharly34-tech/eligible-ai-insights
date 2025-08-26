import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share2, Linkedin, Twitter, Copy, Check } from "lucide-react";
import { useState } from "react";

interface SocialShareProps {
  title: string;
  url: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "minimal" | "floating";
}

export const SocialShare = ({ title, url, size = "md", variant = "default" }: SocialShareProps) => {
  const [copied, setCopied] = useState(false);
  
  // Sécuriser l'accès à window
  const fullUrl = typeof window !== 'undefined' ? `${window.location.origin}${url}` : url;
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(fullUrl);
  
  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(fullUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    if (typeof window !== 'undefined') {
      window.open(shareLinks[platform], '_blank', 'width=600,height=400');
    }
  };

  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-9 w-9", 
    lg: "h-10 w-10"
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };

  if (variant === "minimal") {
    return (
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleShare('linkedin')}
          className="text-gray-600 hover:text-blue-600 hover:bg-blue-50"
        >
          <Linkedin className={iconSizes[size]} />
        </Button>
        <Button
          variant="ghost" 
          size="sm"
          onClick={() => handleShare('twitter')}
          className="text-gray-600 hover:text-blue-400 hover:bg-blue-50"
        >
          <Twitter className={iconSizes[size]} />
        </Button>
        <Button
          variant="ghost"
          size="sm" 
          onClick={copyToClipboard}
          className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        >
          {copied ? <Check className={iconSizes[size]} /> : <Copy className={iconSizes[size]} />}
        </Button>
      </div>
    );
  }

  if (variant === "floating") {
    return (
      <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-md border">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleShare('linkedin')}
          className={`${sizeClasses[size]} rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50`}
        >
          <Linkedin className={iconSizes[size]} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleShare('twitter')}
          className={`${sizeClasses[size]} rounded-full text-gray-600 hover:text-blue-400 hover:bg-blue-50`}
        >
          <Twitter className={iconSizes[size]} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className={`${sizeClasses[size]} rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100`}
        >
          {copied ? <Check className={iconSizes[size]} /> : <Copy className={iconSizes[size]} />}
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Badge variant="outline" className="text-xs text-gray-500 border-gray-300">
        <Share2 className="w-3 h-3 mr-1" />
        Partager
      </Badge>
      
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare('linkedin')}
          className="text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
        >
          <Linkedin className={iconSizes[size]} />
          <span className="hidden sm:inline ml-2">LinkedIn</span>
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare('twitter')}
          className="text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400 transition-all"
        >
          <Twitter className={iconSizes[size]} />
          <span className="hidden sm:inline ml-2">Twitter</span>
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={copyToClipboard}
          className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:border-gray-300 transition-all"
        >
          {copied ? <Check className={iconSizes[size]} /> : <Copy className={iconSizes[size]} />}
          <span className="hidden sm:inline ml-2">
            {copied ? "Copié !" : "Copier"}
          </span>
        </Button>
      </div>
    </div>
  );
};