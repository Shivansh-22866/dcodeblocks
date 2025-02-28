"use client";

import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";
import BeyondCode from '@/app/assets/images/beyondcode.png'
import Csharp from '@/app/assets/images/csharp.png'
import Rair from '@/app/assets/images/rair.png'
import sharpeco from '@/app/assets/images/sharpeco.png'
import Stratis from '@/app/assets/images/stratis.png'
import { Fragment } from "react";
import Image from 'next/image'

export function Sponsors() {
  const images = [
    BeyondCode, Csharp, Rair, sharpeco, Stratis
  ]
  return (
    <div className="mt-10 overflow-clip z-30">
    <div className="bg-white overflow-hidden -mx-1">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-4 py-1 -translate-x-0">
          <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:25s] [animation-direction:reverse]">
            {[...new Array(5)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="inline-flex gap-8 px-16 items-center"
                  >
                    <Image src={image} alt="scroll" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}