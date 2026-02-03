"use client";
import React, { useEffect, useState } from 'react'

const phrases = [
  "Creative, ambitious, and passionate about technology.",
  "Searching for opportunities to shine.",
  "Turning ideas into reality.",
  "Looking for the next challenge.",
];

const TypingSubheader = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;
    if (!isDeleting && charIndex < currentPhrase.length) {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 70);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <div className="mb-8 flex flex-col items-center">
      <span className="text-indigo-200 text-xl lg:text-2xl font-light animate-fade-in delay-200">
        {text}
        <span className="text-pink-400">|</span>
      </span>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-purple-900 via-indigo-900 to-pink-700 opacity-70 blur-xl z-0" />
      <div className="z-10 text-center p-10">
        <h1 className="text-white mb-4 text-5xl lg:text-7xl font-extrabold drop-shadow-lg animate-fade-in tracking-tight">
          Hello, I'm Caroline
        </h1>
        <TypingSubheader />
        <a href={`/portfolio-website/Caroline_McMahon_Resume.pdf?v=${process.env.BUILD_TIME}`} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:scale-105 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 font-semibold animate-bounce mt-2">
          View My Resume
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6 z-10">
        <a href="https://www.instagram.com/carolinebmcmahon/" target="_blank" rel="noopener noreferrer">
          <svg className="w-10 h-10 text-pink-400 hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/></svg>
        </a>
        <a href="https://www.facebook.com/caroline.mcmahon.142" target="_blank" rel="noopener noreferrer">
          <svg className="w-10 h-10 text-blue-400 hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5.006 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89c1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17.006 22 12"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/caroline-mcmahon-99122526a/" target="_blank" rel="noopener noreferrer">
          <svg className="w-10 h-10 text-indigo-400 hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75s1.75.784 1.75 1.75s-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063c-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563c3.039 0 3.601 2.002 3.601 4.604v5.592z"/></svg>
        </a>
        <a href="https://github.com/carolinescodes" target="_blank" rel="noopener noreferrer">
          <svg className="w-10 h-10 text-white hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.416-4.042-1.416c-.546-1.387-1.333-1.756-1.333-1.756c-1.089-.745.083-.729.083-.729c1.205.084 1.84 1.236 1.84 1.236c1.07 1.834 2.809 1.304 3.495.997c.108-.775.418-1.305.762-1.605c-2.665-.305-5.466-1.334-5.466-5.93c0-1.31.469-2.381 1.236-3.221c-.124-.303-.535-1.523.117-3.176c0 0 1.008-.322 3.301 1.23c.957-.266 1.983-.399 3.003-.404c1.02.005 2.047.138 3.006.404c2.291-1.553 3.297-1.23 3.297-1.23c.653 1.653.242 2.873.119 3.176c.77.84 1.235 1.911 1.235 3.221c0 4.609-2.804 5.624-5.475 5.921c.43.371.823 1.102.823 2.222c0 1.606-.014 2.898-.014 3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/></svg>
        </a>
      </div>
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-black/40 to-transparent z-20" />
    </section>
  )
}

export default HeroSection