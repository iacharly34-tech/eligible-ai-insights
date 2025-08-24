import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";
import { SocialShare } from "@/components/ui/social-share";
import { CategoryIcon, getCategoryColor } from "@/components/CategoryIcon";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

interface ArticleCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  author?: string;
  url: string;
  variant?: "featured" | "standard";
}

export const ArticleCard = ({ 
  title, 
  description, 
  category, 
  date, 
  readTime, 
  author = "Charly, votre copilote AO",
  url,
  variant = "standard"
}: ArticleCardProps) => {
  const gradient = getCategoryColor(category);

  if (variant === "featured") {
    return (
      <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white shadow-lg h-full hover:-translate-y-2">
        <CardContent className="p-0">
          <div className={`h-48 bg-gradient-to-br ${gradient} relative overflow-hidden rounded-t-lg`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-4 left-4">
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                Guide complet
              </Badge>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3">
                <CategoryIcon category={category} size={32} className="bg-transparent" />
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
              <Clock className="w-3 h-3" />
              <span>{readTime}</span>
              <span>•</span>
              <Calendar className="w-3 h-3" />
              <span>{date}</span>
            </div>
            
            <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
              {title}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
              {description}
            </p>
            
            <div className="mb-4">
              <SocialShare 
                title={title}
                url={url}
                variant="minimal"
                size="sm"
              />
            </div>
            
            <SafeLink to={url}>
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Lire le guide
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </SafeLink>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white h-full hover:-translate-y-1">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <CategoryIcon 
            category={category} 
            className="w-12 h-12 group-hover:scale-110 transition-transform" 
            size={24}
          />
          <Badge 
            variant="outline" 
            className={`text-xs border-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent border-current`}
          >
            {category}
          </Badge>
        </div>
        
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
          <Calendar className="w-3 h-3" />
          <span>{date}</span>
          <span>•</span>
          <Clock className="w-3 h-3" />
          <span>{readTime}</span>
          <span>•</span>
          <User className="w-3 h-3" />
          <span className="truncate">{author}</span>
        </div>
        
        <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        
        <div className="mb-4">
          <SocialShare 
            title={title}
            url={url}
            variant="minimal"
            size="sm"
          />
        </div>
        
        <SafeLink to={url} className="mt-auto">
          <Button 
            size="sm" 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Lire l'article
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </SafeLink>
      </CardContent>
    </Card>
  );
};