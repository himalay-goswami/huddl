import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export interface UniversalTimelineProps {
  universalRepoLabel: string;
  days: Array<{
    day: number;
    entries: string[];
  }>;
}

const UniversalTimeline: React.FC<UniversalTimelineProps> = ({ universalRepoLabel, days }) => {
  return (
    <TooltipProvider>
      <div className="flex flex-col items-center w-full py-8">
        {/* Universal Repo Node */}
        <Card className="rounded-2xl shadow-sm bg-muted/60 border border-muted-foreground/10 mb-6">
          <CardHeader className="flex flex-col items-center p-4">
            <CardTitle className="text-base font-semibold tracking-tight">
              {universalRepoLabel}
            </CardTitle>
          </CardHeader>
        </Card>
        {/* Vertical Timeline */}
        <div className="relative flex flex-col items-center w-full max-w-xs">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-muted-foreground/20 z-0" style={{ minHeight: days.length * 48 }} />
          <div className="flex flex-col gap-2 w-full z-10">
            {days.map((dayObj) => (
              <Tooltip key={dayObj.day}>
                <TooltipTrigger asChild>
                  <div className="flex items-center w-full">
                    <div className="flex-1" />
                    <Card
                      className={`rounded-full px-4 py-2 text-sm font-medium shadow-none border border-muted-foreground/10 bg-background/80 transition-colors ${dayObj.entries.length === 0 ? "opacity-60" : ""} cursor-pointer hover:bg-muted/40`}
                      // TODO: onClick={() => openModal(dayObj)}
                    >
                      <CardContent className="p-0 flex items-center gap-2">
                        <Badge
                          variant={dayObj.entries.length > 0 ? "default" : "outline"}
                          className="rounded-full px-2 py-1 text-xs mr-2"
                        >
                          Day {String(dayObj.day).padStart(2, "0")}
                        </Badge>
                        <span className="text-muted-foreground text-xs">
                          {dayObj.entries.length > 0 ? "" : "no logs"}
                        </span>
                      </CardContent>
                    </Card>
                    <div className="flex-1" />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right" className="text-xs">
                  {dayObj.entries.length > 0
                    ? `${dayObj.entries.length} entr${dayObj.entries.length === 1 ? "y" : "ies"}`
                    : "No entries for this day"}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default UniversalTimeline;