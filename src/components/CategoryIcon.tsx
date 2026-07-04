import { LucideIcon, Brain, Leaf, Users, TrendingUp, Shield, Target, Zap, Clock } from "lucide-react";

interface CategoryIconProps {
  category: string;
  className?: string;
  size?: number;
}

const categoryIconMap: Record<string, LucideIcon> = {
  "IA & automatisation": Brain,
  "Développement durable": Leaf,
  "Prospection cabinet": Users,
  "Signaux business": TrendingUp,
  "Conformité & RGPD": Shield,
  "Ciblage & ICP": Target,
  "Social selling": Zap,
  "Timing & création": Clock,
};

const categoryColorMap: Record<string, string> = {
  "IA & automatisation": "from-purple-500 to-indigo-600",
  "Développement durable": "from-success/100 to-emerald-600",
  "Prospection cabinet": "from-blue-500 to-cyan-600",
  "Signaux business": "from-orange-500 to-red-600",
  "Conformité & RGPD": "from-gray-500 to-slate-600",
  "Ciblage & ICP": "from-teal-500 to-blue-600",
  "Social selling": "from-yellow-500 to-orange-600",
  "Timing & création": "from-rose-500 to-pink-600",
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