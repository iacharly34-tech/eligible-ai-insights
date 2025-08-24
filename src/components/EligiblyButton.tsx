// Composant Button harmonisé pour Eligibly.ai
import { Button as ShadcnButton, ButtonProps } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Download, Mail } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { forwardRef } from "react";

export interface EligiblyButtonProps extends ButtonProps {
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
}

export const EligiblyButton = forwardRef<HTMLButtonElement, EligiblyButtonProps>(
  ({ children, icon: Icon, iconPosition = 'right', loading = false, className = '', ...props }, ref) => {
    const iconSize = props.size === 'sm' ? 16 : props.size === 'lg' ? 20 : 18;

    return (
      <ShadcnButton
        ref={ref}
        className={`
          bg-gradient-to-r from-blue-600 to-indigo-600 
          hover:from-blue-700 hover:to-indigo-700 
          text-white border-0 
          shadow-lg hover:shadow-xl 
          transition-all duration-300 
          font-semibold 
          rounded-lg 
          flex items-center gap-2 
          group
          ${className}
        `}
        disabled={loading}
        {...props}
      >
        {loading && (
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-b-transparent mr-2" />
        )}
        
        {Icon && iconPosition === 'left' && (
          <Icon size={iconSize} className="group-hover:-translate-x-0.5 transition-transform" />
        )}
        
        <span className="truncate">{children}</span>
        
        {Icon && iconPosition === 'right' && (
          <Icon size={iconSize} className="group-hover:translate-x-0.5 transition-transform" />
        )}
      </ShadcnButton>
    );
  }
);

EligiblyButton.displayName = "EligiblyButton";

// Boutons prédéfinis
export const CTAButton = (props: Omit<EligiblyButtonProps, 'icon'>) => (
  <EligiblyButton icon={ArrowRight} {...props} />
);

export const SecondaryButton = (props: EligiblyButtonProps) => (
  <ShadcnButton 
    variant="outline" 
    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-semibold rounded-lg"
    {...props}
  />
);