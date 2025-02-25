import React from 'react'
import Image from 'next/image'
import BorderImg from '@/app/assets/images/button-border.png'
import BorderFocusImg from '@/app/assets/images/button-border-focus.png'
import { twMerge } from 'tailwind-merge'

type Props = {
  text: string;
  size: 'small' | 'large'; // Only size prop now
}

const CustomButton = ({ text, size }: Props) => {
  // Merge Tailwind classes for padding, text size, etc. based on the 'size' prop
  const buttonClasses = twMerge(
    'relative z-10 text-center bg-transparent border-0', // common classes
    size === 'small'
      ? 'text-sm py-2 px-4' // Small button styles
      : 'sm:text-lg text-md sm:py-3 sm:px-6 py-2 px-4' // Large button styles
  );

  return (
    <div className="relative inline-block group/button">
      <Image src={BorderImg} className="absolute inset-0 w-full h-full group-hover/button:opacity-0 transition-opacity duration-300" alt="Button Border" />
      <Image src={BorderFocusImg} className="absolute opacity-0 inset-0 w-full h-full group-hover/button:opacity-100 transition-opacity duration-300" alt="Button Border" />
      <button className={buttonClasses}>
        {text}
      </button>
    </div>
  )
}

export default CustomButton;
