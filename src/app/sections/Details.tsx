"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../components/ui/canvas-reveal-effect";
import { BackgroundGradient } from "../components/ui/background-gradient";

const Details: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mainHovered, setMainHovered] = useState(false);
  const [universities, setUniversities] = useState(0);
  const [judges, setJudges] = useState(0);
  const [hackathons, setHackathons] = useState(0);
  const [speakers, setSpeakers] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsInView(true);
      }
    }, {
      threshold: 0.5,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const intervalId = setInterval(() => {
        if (universities < 150) {
          setUniversities(universities + 1);
        }
        if (judges < 72) {
          setJudges(judges + 1);
        }
        if (hackathons < 21) {
          setHackathons(hackathons + 1);
        }
        if (speakers < 36) {
          setSpeakers(speakers + 1);
        }
      }, 10); // Adjust the speed by changing this value

      return () => clearInterval(intervalId);
    }
  }, [universities, judges, hackathons, speakers, isInView]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setMainHovered(true)}
      onMouseLeave={() => setMainHovered(false)}
      className="py-8 relative overflow-hidden bg-gradient-to-tr from-purple-950/10 to-purple-950/30"
    >
      {/* CanvasEffect content */}
      <AnimatePresence>
        {mainHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [168, 85, 247],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Your content goes here */}
      <div className="relative container mx-auto px-4">
        <div className="flex sm:flex-row flex-col items-center py-16 px-8">
          <div className="sm:w-full sm:block hidden">
            <div className="flex flex-col gap-16">
              <div className="flex flex-col sm:items-start items-center">
                <h3 className="text-7xl">{universities}+</h3>
                <span className="text-2xl">Universities participating</span>
              </div>
              <div className="flex sm:flex-row flex-col gap-16">
                <div className="flex flex-col items-center sm:items-start">
                  <h4 className="text-7xl">{judges}+</h4>
                  <span className="text-2xl">Judges</span>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <h4 className="text-7xl">{hackathons}</h4>
                  <span className="text-2xl">Hackathons</span>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <h4 className="text-7xl">{speakers}+</h4>
                  <span className="text-2xl">Great Speakers</span>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:hidden block">
            <BackgroundGradient>
              <div className="px-16 py-14 text-center text-2xl flex items-center justify-center m-[2px] bg-slate-900 rounded-2xl">
                {universities} + Universities
              </div>
            </BackgroundGradient>
            <div className="mt-8" />
            <BackgroundGradient>
              <div className="px-16 py-14 text-center text-2xl flex items-center justify-center m-[2px] bg-slate-900 rounded-2xl">
                {judges} + <br/>Judges
              </div>
            </BackgroundGradient>
            <div className="mt-8" />
            <BackgroundGradient>
              <div className="px-16 py-14 text-center text-2xl flex items-center justify-center m-[2px] bg-slate-900 rounded-2xl">
                {hackathons} Hackathons
              </div>
            </BackgroundGradient>
            <div className="mt-8" />
            <BackgroundGradient>
              <div className="px-16 py-14 text-center text-2xl flex items-center justify-center m-[2px] bg-slate-900 rounded-2xl">
                {speakers} Speakers
              </div>
            </BackgroundGradient>
          </div>
          <div className="sm:w-full">
            <iframe
              width="100%" // Makes the video responsive within the div
              className="mt-8 sm:mt-0 aspect-video"
              src="https://www.youtube.com/embed/gi1kkMbfNAE?si=O5kwjlx-_1_cvPJv"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
