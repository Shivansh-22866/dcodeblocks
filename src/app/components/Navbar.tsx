'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomButton from './CustomButton';
import Link from 'next/link';
import Image from 'next/image';
import HackIndia from '@/app/assets/images/hackindia.png'
import Dcodeblock from '@/app/assets/images/dcodeblockslogo.png'

// You can customize these menu items
const menuItems = [
  { title: 'Overview', path: '/' },
  { title: 'Create Team', path: '/' },
  { title: 'Prizes & Sponsors', path: '/' },
  { title: 'FAQs', path: '/' },
  { title: 'Judging & Rules', path: '/' },
  { title: 'Resources', path: '/' },
];

// This value determines when the navbar becomes sticky
const SCROLL_THRESHOLD = 200; // Adjust this value as needed

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldStick, setShouldStick] = useState(false);

  // Track scroll position to determine when to make navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setShouldStick(true);
      } else {
        setShouldStick(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      {/* Main Navbar - Initially normal, becomes sticky after scrolling */}
      <nav 
        className={`w-full transition-all duration-300 z-50
          ${shouldStick ? 'fixed left-0 top-0 bg-purple-950/40 backdrop-blur-lg mx-auto shadow-lg' : 'relative bg-transparent'}`}
      >
        <div className={`${shouldStick ? 'w-full' : "w-[90vw]"} px-4 sm:px-6 lg:px-8`}>
          <div className={`flex justify-between sm:justify-center gap-6 items-center h-16`}>
            {/* Logo */}
            <div className={`flex-shrink-0`}>
              <Link href="/" className="text-white text-xl font-bold">
                <Image src={HackIndia} className={`${isMobile ? 'w-24' : ''}`} alt='HackIndia' />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:hidden lg:flex items-center space-x-2">
              {menuItems.map((item) => (
                <Link 
                  key={item.title} 
                  href={item.path}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <CustomButton text={item.title} size='small' />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="block md:hidden lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none mr-2"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-5">
                  <motion.span
                    className="absolute h-0.5 w-6 bg-white rounded-sm"
                    animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute h-0.5 w-6 bg-white rounded-sm top-2"
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute h-0.5 w-6 bg-white rounded-sm top-4"
                    animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Placeholder div that appears when navbar becomes fixed to prevent content jump */}
      {shouldStick && (
        <div className="h-16"></div>
      )}

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-stone-950 z-50 md:hidden overflow-y-auto"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
          >
            <div className="p-6 space-y-8">
              <div className="flex justify-between items-center">
                <span className="text-white text-xl font-bold">
                  <Image src={Dcodeblock} alt="Dcodeblocks" />
                </span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link 
                    key={item.title} 
                    href={item.path}
                    className="text-gray-300 hover:text-white py-2 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <CustomButton text={item.title} size="large" />
                  </Link>
                ))}
                <div className="pt-4">
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;