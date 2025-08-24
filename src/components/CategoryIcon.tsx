import { LucideIcon, Brain, Leaf, Users, TrendingUp, Shield, Target, Zap, Clock } from "lucide-react";

interface CategoryIconProps {
  category: string;
  className?: string;
  size?: number;
}

const categoryIconMap: Record<string, LucideIcon> = {
  "IA & automatisation": Brain,
  "Critères RSE": Leaf,
  "PME & stratégies AO": Users,
  "Signaux faibles": TrendingUp,
  "Conformité & sécurité": Shield,
  "Ciblage opportunités": Target,
  "Innovation publique": Zap,
  "Délais & procédures": Clock,
};

const categoryColorMap: Record<string, string> = {
  "IA & automatisation": "from-purple-500 to-indigo-600",
  "Critères RSE": "from-green-500 to-emerald-600", 
  "PME & stratégies AO": "from-blue-500 to-cyan-600",
  "Signaux faibles": "from-orange-500 to-red-600",
  "Conformité & sécurité": "from-gray-500 to-slate-600",
  "Ciblage opportunités": "from-teal-500 to-blue-600",
  "Innovation publique": "from-yellow-500 to-orange-600",
  "Délais & procédures": "from-rose-500 to-pink-600",
};

export const CategoryIcon = ({ category, className = "", size = 24 }: CategoryIconProps) => {
  const Icon = categoryIconMap[category] || Brain;
  const gradient = categoryColorMap[category] || "from-blue-500 to-indigo-600";

  return (
    <div className={`bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center ${className}`}>
      <Icon size={size} className="text-white" />
    </div>
  );
};

export const getCategoryColor = (category: string) => {
  return categoryColorMap[category] || "from-blue-500 to-indigo-600";
};