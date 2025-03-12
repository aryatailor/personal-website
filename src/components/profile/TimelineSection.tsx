import React from "react";
import { cn } from "@/lib/utils";
import TimelineItem from "./TimelineItem";

export interface TimelineItemData {
  id: number;
  content: React.ReactNode;
}

interface TimelineSectionProps {
  title: string;
  items: TimelineItemData[];
  variant: "yesterday" | "today" | "tomorrow";
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  title,
  items,
  variant,
}) => {
  const titleColor = variant === "today" ? "text-[#b3b3b3]" : "text-white";

  return (
    <div className="flex-1">
      <div className={cn("text-xl mb-10", titleColor)}>{title}</div>
      {items.map((item) => (
        <TimelineItem
          key={item.id}
          number={item.id}
          content={item.content}
          variant={variant}
        />
      ))}
    </div>
  );
};

export default TimelineSection;
