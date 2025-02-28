"use client";

import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";
import BeyondCode from '@/app/assets/images/beyondcode.png'
import Csharp from '@/app/assets/images/csharp.png'
import Rair from '@/app/assets/images/rair.png'
import sharpeco from '@/app/assets/images/sharpeco.png'
import Stratis from '@/app/assets/images/stratis.png'

export function Sponsors() {
  return (
    <div className="h-[10rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Beyond Code",
    name: "Charles Dickens",
    title: "Beyond the Code",
    image: BeyondCode
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "CSHARP.TV",
    title: "CSHARP.TV",
    image: Csharp
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "RAIR Protocol",
    title: "A Dream Within a Dream",
    image: Rair
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Sharp Economy",
    title: "Sharp Economy",
    image: sharpeco
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Stratis",
    title: "Moby-Dick",
    image: Stratis
  },
];
