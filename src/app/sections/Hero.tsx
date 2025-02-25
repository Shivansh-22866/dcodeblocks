import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Singularity from "@/app/assets/images/singularity.png";
import Image from "next/image";
import CustomButton from "../components/CustomButton";
import HackIndia from "@/app/assets/images/hackindia.png";
import { motion } from "framer-motion";
import Scroll1 from '@/app/assets/images/scroll1.png'
import Scroll2 from '@/app/assets/images/scroll2.png'
import Scroll3 from '@/app/assets/images/scroll3.png'
import Scroll4 from '@/app/assets/images/scroll4.png'

const Hero = () => {
  const images = [
    Scroll1,
    Scroll2,
    Scroll3,
    Scroll4
  ]
  return (
    <div className="relative w-full h-fit overflow-hidden mt-8">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white gap-6">
        <span>
          <Image src={HackIndia} alt="HackIndia" />
          <Navbar />
        </span>
        <Image src={Singularity} alt="SingularityNET" />
        <h1
          className="xl:text-8xl lg:text-7xl md:text-5xl sm:text-5xl text-3xl font-bold tracking-widest flex"
          style={{ textShadow: "0 5px 8px rgba(255, 255, 255, 0.7)" }}
        >
          <span className="bg-orange-500 inline-block sm:pl-3 sm:pt-4 rounded-md border border-white align-middle">
            Ha
          </span>
          <span className="inline-block sm:pl-3 sm:pt-4 align-middle">
            ckIndia2025
          </span>
        </h1>
        <h2 className="text-4xl font-bold">
          India&apos;s Biggest Web3 & AI Hackathon
        </h2>
        <div className="px-6 py-4 rounded-lg border border-purple-400 bg-gradient-to-l from-purple-950 to-purple-800">
          February 28 - September 28
        </div>

        <div className="flex gap-8 items-center justify-center">
          <span>
            <span className="text-orange-500">$150+</span> Price Pool
          </span>
          <span className="h-8 border-2 border-white"></span>
          <span>
            <span className="text-orange-500">150+</span> Universities
          </span>
          <span className="h-8 border-2 border-white"></span>
          <span>
            <span className="text-orange-500">25000+</span> Students
          </span>
        </div>

        <CustomButton text="Register Now!" size="large" />
        
        <div className="mt-10 overflow-clip z-30">
        <div className="bg-white overflow-hidden -mx-1">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-4 py-1 -translate-x-0">
              <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:15s]">
                {[...new Array(2)].fill(0).map((_, idx) => (
                  <Fragment key={idx}>
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="inline-flex gap-4 items-center"
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
      </div>

    </div>
  );
};

export default Hero;
