"use client";

import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Singularity from "@/app/assets/images/singularity.png";
import Image from "next/image";
import CustomButton from "../components/CustomButton";
import Scroll1 from "@/app/assets/images/scroll1.png";
import Scroll2 from "@/app/assets/images/scroll2.png";
import Scroll3 from "@/app/assets/images/scroll3.png";
import Scroll4 from "@/app/assets/images/scroll4.png";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import { SparklesCore } from "../components/ui/sparkles";
import { Button } from "../components/ui/moving-border";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

const Hero = () => {
  const images = [Scroll1, Scroll2, Scroll3, Scroll4];
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 0]); // Fade out between 20% and 100% scroll progress
  const translateY = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, -200]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [1, 1, 0]);
  const titleTranslateY = useTransform(scrollYProgress, [0, 0.25, 1], [0, 0, -200]);
  const dateOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);
  const trailOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.55, 0]);
  const dateTranslateY = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0, -200]);

  const words = [
    {
      text: "India's",
    },
    {
      text: "Biggest",
    },
    {
      text: "Web3",
    },
    {
      text: "&"
    },
    {
      text: "AI"
    },
    {
      text: "Hackathon"
    }
  ]
  
  return (
    <div className="relative w-full h-fit overflow-hidden mt-8">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-70"
        autoPlay
        loop
        muted
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center !mt-0 justify-center w-full h-full text-white gap-6">
        <motion.div
          className="relative sm:flex sm:items-end z-50"
          initial={{ opacity: 0, y: -50 }}
          viewport={{once: true}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Navbar />
        </motion.div>
        <motion.div
          style={{ opacity, translateY }}
        >
          <Image className="sm:w-[20rem] w-[10rem]" src={Singularity} alt="SingularityNET" />
        </motion.div>
        <motion.div
          style={{ opacity: titleOpacity, translateY: titleTranslateY }}
        >
            <div className="relative block">
                        <h1
            className="xl:text-8xl lg:text-7xl md:text-5xl sm:text-5xl text-4xl font-bold sm:tracking-widest tracking-wide flex"
            style={{ textShadow: "0 5px 8px rgba(255, 255, 255, 0.7)" }}
          >
    <div className="relative inline-block">
      {/* SparklesCore with the span inside it */}
      <SparklesCore
        className="absolute inset-0"
        particleSize={2}  
        minSize={1}  
        maxSize={3}  
        particleColor="#FFD700"  
        particleDensity={40} 
        speed={6}
        background="transparent"
      />
      
      {/* The text that will have sparkles around it */}
      <span className="bg-orange-500 inline-block sm:pl-3 sm:pt-4 px-1 rounded-md border border-white align-middle">
        Ha
      </span>
    </div>
            <span className="inline-block sm:pl-3 sm:pt-4 align-middle">
              ckIndia2025
            </span>
          </h1>
            </div>
        </motion.div>
        <motion.div
          style={{ opacity: titleOpacity, translateY: titleTranslateY }}
        >
          <div className="flex items-center justify-center text-center">
          <TypewriterEffectSmooth words={words}></TypewriterEffectSmooth>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.75 }}
          viewport={{once: true}}
          style={{opacity: trailOpacity}}
        >
          <div className="w-[40rem] relative scale-75 sm:scale-100">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px] w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px] w-1/4" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 3 }} animate={{ opacity: 1, scale: 1 }} viewport={{once: true}} transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
        style={{ opacity: dateOpacity, translateY: dateTranslateY }}>
        <CardContainer className="">
          <CardBody className="h-fit w-fit">
            <CardItem
              translateZ={60}
              translateX={5}
              translateY={-5}
              className="text-xl font-bold text-neutral-600 dark:text-white flex items-center justify-center"
            >
              <Button
                borderRadius="1.75rem"
                className=" bg-gradient-to-r from-purple-900 to-purple-950 text-black text-lg dark:text-white border-neutral-200 dark:border-slate-800"
              >
                February 28 - September 28
              </Button>
            </CardItem>
          </CardBody>
        </CardContainer>
        </motion.div>

        <div className="flex sm:gap-8 gap-4 items-center justify-center sm:text-xl md:text-2xl lg:text-3xl text-sm">
          <motion.span className="flex sm:flex-row flex-col sm:gap-1 items-center justify-center"
            initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.75 }} viewport={{once: true}}>
            <span className="text-orange-500">$150+</span>
            <span>Prize Pool</span>
          </motion.span>
          <motion.span className="h-8 border-2 border-white" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.75 }} viewport={{once: true}}></motion.span>
          <motion.span className="flex sm:flex-row flex-col sm:gap-1 items-center justify-center" initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.75 }} viewport={{once: true}}>
            <span className="text-orange-500">150+</span> 
            <span>Universities</span>
          </motion.span>
          <motion.span className="h-8 border-2 border-white" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.75 }} viewport={{once: true}}></motion.span>
          <motion.span className="flex sm:flex-row flex-col sm:gap-1 items-center justify-center" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeInOut", delay: 1.75 }} viewport={{once: true}}>
            <span className="text-orange-500">25000+</span>
            <span>Students</span>
          </motion.span>
        </div>

        <CustomButton text="Register Now!" size="large" />

        <div className="mt-10 overflow-clip z-30">
          <div className="bg-white overflow-hidden -mx-1">
            <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex gap-4 py-1 -translate-x-0">
                <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:25s]">
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
