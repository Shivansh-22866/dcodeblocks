'use client'

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Details from "./sections/Details";
import { Sponsors } from "./sections/Sponsors";
import LoadingScreen from "@/app/components/LoadingScreen";
import Footer from "./sections/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // Simulates a loading delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      {!isLoading && (
        <div className="dark">
          <Header />
          <Hero />
          <Details />
          <Sponsors />
          <Footer/>
        </div>
      )}
    </>
  );
}
