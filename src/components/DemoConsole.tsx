import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DemoConsoleProps {
  codeLines: string[];
  isRunning: boolean;
  showFull: boolean;
  onToggleShowFull: () => void;
}

export const DemoConsole = ({ codeLines, isRunning, showFull, onToggleShowFull }: DemoConsoleProps) => {
  return (
    <div className="bg-white rounded-lg border shadow-sm p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide flex items-center gap-2 m-0">
          <Terminal className="w-4 h-4" />
          Console Charly IA
        </h3>
        <Button variant="outline" size="sm" onClick={onToggleShowFull} className="h-8">
          {showFull ? "Voir moins" : "Voir plus"}
        </Button>
      </div>
      <div className="bg-gray-900 rounded-lg p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-green-400 text-xs font-mono">charly-analysis.js</span>
        </div>
        <div className={`space-y-0.5 text-xs font-mono ${showFull ? "h-48 sm:h-56 md:h-64 lg:h-72" : "h-20 sm:h-24 md:h-28 lg:h-32"} overflow-y-auto bg-black/20 rounded p-2`}>
          {codeLines.map((line, index) => (
            <div key={index} className="text-green-400 break-all">
              <span className="text-gray-500 mr-1 text-xs">{index + 1}.</span>
              <span className="text-xs">{line}</span>
            </div>
          ))}
          {codeLines.length > 0 && isRunning && (
            <div className="text-green-400 animate-pulse">
              <span className="text-gray-500 mr-1 text-xs">{codeLines.length + 1}.</span>
              <span className="text-xs">█</span>
            </div>
          )}
          {codeLines.length === 0 && (
            <div className="text-gray-500 text-xs italic">Charly IA en attente...</div>
          )}
        </div>
      </div>
    </div>
  );
};
