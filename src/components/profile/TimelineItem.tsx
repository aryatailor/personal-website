import React from "react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  number: number;
  content: React.ReactNode;
  variant: "yesterday" | "today" | "tomorrow";
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  number,
  content,
  variant,
}) => {
  const numberColor = variant === "today" ? "text-[#b3b3b3]" : "text-white";
  const contentColor = variant === "today" ? "text-white" : "text-[#b3b3b3]";

  return (
    <div className="flex gap-5 mb-9 max-sm:gap-[15px]">
      <div
        className={cn(
          "text-xl w-[55px] text-center max-sm:text-lg",
          numberColor,
        )}
      >
        {number}
      </div>
      <div className={cn("text-xl leading-[1.3] max-sm:text-lg", contentColor)}>
        {content}
      </div>
    </div>
  );
};

export default TimelineItem;
