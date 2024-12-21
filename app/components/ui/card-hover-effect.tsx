import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons/lib";
import { LinkPreview } from "./link-preview";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    text: string;
    Icon: IconType;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Changed to const

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.Icon;

        return (
          <div
            key={idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-white dark:bg-slate-600/[0.6] block rounded-xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="rounded-md w-full p-4 overflow-hidden bg-black group-hover:ring-2 cursor-pointer ring-green-500 relative z-20 transition-all duration-500">
              <LinkPreview url={item.link} className="font-bold">
                <div className="py-10 z-50 relative">
                  <Icon className="w-8 h-8 mx-auto" />
                  <p className="text-2xl font-bold text-center text-gray-300">
                    {item.text}
                  </p>
                </div>
              </LinkPreview>
            </div>
          </div>
        );
      })}
    </div>
  );
};
