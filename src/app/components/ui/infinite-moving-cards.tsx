"use client";

import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState, useRef } from "react";

interface InfiniteMovingCardsProps {
  items: {
    name: string;
    image: StaticImageData;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as Node;
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  const CustomFollowerPointer = ({
    x,
    y,
    title,
  }: {
    x: number;
    y: number;
    title?: string;
  }) => {
    return (
      <div
        style={{
          position: "absolute",
          top: y,
          left: x,
          pointerEvents: "none",
          zIndex: 1000,
        }}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="1"
          viewBox="0 0 16 16"
          className="h-6 w-6 text-purple-600 transform -rotate-[70deg] -translate-x-[12px] -translate-y-[10px]"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
        </svg>
        <div
          className="px-2 py-2 bg-purple-950 text-white whitespace-nowrap min-w-max text-xs rounded-full"
          style={{
            position: "absolute",
            top: "20px",
            left: "-10px",
          }}
        >
          {title || "William Shakespeare"}
        </div>
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, _idx) => {
          const [pointerX, setPointerX] = useState(0);
          const [pointerY, setPointerY] = useState(0);
          const [isInside, setIsInside] = useState(false);
          const cardRef = useRef<HTMLLIElement>(null);

          const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
            if (cardRef.current) {
              const rect = cardRef.current.getBoundingClientRect();
              setPointerX(e.clientX - rect.left);
              setPointerY(e.clientY - rect.top);
            }
          };

          const handleMouseEnter = () => {
            setIsInside(true);
          };

          const handleMouseLeave = () => {
            setIsInside(false);
          };

          return (
            <li
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="w-[350px] max-w-full relative rounded-2xl border border-b-0 cursor-none flex-shrink-0 bg-white border-slate-700 px-8 py-6 md:w-[450px]"
              key={item.name}
            >
              {isInside && (
                <CustomFollowerPointer
                  x={pointerX}
                  y={pointerY}
                  title={`${item.name}`}
                />
              )}
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <div className="relative z-20 flex items-center justify-center">
                        <Image src={item.image} alt={item.name} />
                </div>
              </blockquote>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
