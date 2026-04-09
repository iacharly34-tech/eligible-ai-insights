import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface DemoConsoleProps {
  codeLines: string[];
  isRunning: boolean;
  showFull: boolean;
  onToggleShowFull: () => void;
}

export const DemoConsole = ({ codeLines, isRunning, showFull, onToggleShowFull }: DemoConsoleProps) => {
  const { t } = useLanguage();
  return (
    <div className="bg-card rounded-lg border shadow-sm p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-foreground text-sm uppercase tracking-wide flex items-center gap-2 m-0">
          <Terminal className="w-4 h-4" />
          {t('demo.console')}
        </h3>
        <Button variant="outline" size="sm" onClick={onToggleShowFull} className="h-8">
          {showFull ? t('demo.seeLess') : t('demo.seeMore')}
        </Button>
      </div>
      <div className="bg-card rounded-lg p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-success/100 rounded-full"></div>
          </div>
          <span className="text-green-400 text-xs font-mono">charly-analysis.js</span>
        </div>
        <div className={`space-y-0.5 text-xs font-mono ${showFull ? "h-48 sm:h-56 md:h-64 lg:h-72" : "h-20 sm:h-24 md:h-28 lg:h-32"} overflow-y-auto bg-black/20 rounded p-2`}>
          {codeLines.map((line, index) => (
            <div key={index} className="text-green-400 break-all">
              <span className="text-muted-foreground mr-1 text-xs">{index + 1}.</span>
              <span className="text-xs">{line}</span>
            </div>
          ))}
          {codeLines.length > 0 && isRunning && (
            <div className="text-green-400 animate-pulse">
              <span className="text-muted-foreground mr-1 text-xs">{codeLines.length + 1}.</span>
              <span className="text-xs">█</span>
            </div>
          )}
          {codeLines.length === 0 && (
            <div className="text-muted-foreground text-xs italic">{t('demo.console.waiting')}</div>
          )}
        </div>
      </div>
    </div>
  );
};
