import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface InfoTooltipProps {
  title: string;
  text: string;
  className?: string;
}

const InfoTooltip = ({ title, text, className = "" }: InfoTooltipProps) => {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className={`inline-flex items-center justify-center rounded-full p-1 hover:bg-accent/10 transition-colors duration-200 group ${className}`}
            aria-label={title}
          >
            <Info className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors duration-200" />
          </button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p className="font-semibold mb-1">{title}</p>
          <p className="text-sm">{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default InfoTooltip;
