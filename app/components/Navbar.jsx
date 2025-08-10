"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  const handleNavigation = (section) => {
    if (section.startsWith('#')) {
      // For hash sections, navigate to home page with hash
      router.push('/' + section);
    } else if (section === '') {
      // Navigate to home page
      router.push('/');
    } else {
      // Navigate to other pages
      router.push(section);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <span className="text-2xl font-bold text-pink-400 tracking-tight font-serif italic">Caroline McMahon</span>
        <ul className="flex gap-8 text-lg font-medium">
          <li><button onClick={() => handleNavigation('')} className="text-white hover:text-pink-400 transition-colors duration-200">Home</button></li>
          <li><button onClick={() => handleNavigation('#projects')} className="text-white hover:text-pink-400 transition-colors duration-200">Projects</button></li>
          <li><button onClick={() => handleNavigation('#experience')} className="text-white hover:text-pink-400 transition-colors duration-200">Experience</button></li>
          <li><button onClick={() => handleNavigation('#education')} className="text-white hover:text-pink-400 transition-colors duration-200">Education</button></li>
          <li><button onClick={() => handleNavigation('#skills')} className="text-white hover:text-pink-400 transition-colors duration-200">Skills</button></li>
          <li><button onClick={() => handleNavigation('#mystory')} className="text-white hover:text-pink-400 transition-colors duration-200">My Story</button></li>
          <li><button onClick={() => handleNavigation('#art')} className="text-white hover:text-pink-400 transition-colors duration-200">Art</button></li>
          <li><button onClick={() => handleNavigation('#contact')} className="text-white hover:text-pink-400 transition-colors duration-200">Contact</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
