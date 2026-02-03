import React from 'react';
import Link from 'next/link';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-linear-to-br from-purple-800 via-indigo-900 to-black opacity-70 blur-2xl -z-10" />
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-pink-400 drop-shadow-lg text-center">Coding Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* PDF Summarizer */}
          <div className="bg-white bg-opacity-5 rounded-xl shadow-xl p-6 hover:scale-105 hover:bg-opacity-10 transition-transform duration-300 backdrop-blur-md border border-white/5 group">
            <h3 className="text-2xl font-semibold mb-2 text-pink-500 group-hover:opacity-100 opacity-50 transition-opacity duration-300">PDF Summarizer</h3>
            <p className="text-gray-200 mb-4 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Summarizes PDF documents using AI. Built with React, Node.js, and OpenAI API.</p>
            <Link href="/projects/pdf-summarizer" className="text-pink-400 hover:underline group-hover:opacity-100 opacity-50 transition-opacity duration-300">View Details</Link>
          </div>
          {/* Personal Finance App */}
          <div className="bg-white bg-opacity-5 rounded-xl shadow-xl p-6 hover:scale-105 hover:bg-opacity-10 transition-transform duration-300 backdrop-blur-md border border-white/5 group">
            <h3 className="text-2xl font-semibold mb-2 text-pink-500 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Personal Finance App</h3>
            <p className="text-gray-200 mb-4 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Track expenses, set budgets, and visualize spending. Built with React Native and Firebase.</p>
            <Link href="/projects/personal-finance-app" className="text-pink-400 hover:underline group-hover:opacity-100 opacity-50 transition-opacity duration-300">View Details</Link>
          </div>
          {/* Data Visualization Tool */}
          <div className="bg-white bg-opacity-5 rounded-xl shadow-xl p-6 hover:scale-105 hover:bg-opacity-10 transition-transform duration-300 backdrop-blur-md border border-white/5 group">
            <h3 className="text-2xl font-semibold mb-2 text-pink-500 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Data Visualization Tool</h3>
            <p className="text-gray-200 mb-4 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Interactive charts and dashboards for data analysis. Built with D3.js and Python Flask.</p>
            <Link href="/projects/data-visualization-tool" className="text-pink-400 hover:underline group-hover:opacity-100 opacity-50 transition-opacity duration-300">View Details</Link>
          </div>
          {/* Blackjack Game */}
          <div className="bg-white bg-opacity-5 rounded-xl shadow-xl p-6 hover:scale-105 hover:bg-opacity-10 transition-transform duration-300 backdrop-blur-md border border-white/5 group">
            <h3 className="text-2xl font-semibold mb-2 text-pink-500 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Blackjack Game</h3>
            <p className="text-gray-200 mb-4 group-hover:opacity-100 opacity-50 transition-opacity duration-300">A browser-based blackjack game with core gameplay logic and clean UI.</p>
            <Link href="https://github.com/carolinescodes/black-jack-game" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline group-hover:opacity-100 opacity-50 transition-opacity duration-300">View on GitHub</Link>
          </div>
          {/* Taylor Swift Song Sorter */}
          <div className="bg-white bg-opacity-5 rounded-xl shadow-xl p-6 hover:scale-105 hover:bg-opacity-10 transition-transform duration-300 backdrop-blur-md border border-white/5 group">
            <h3 className="text-2xl font-semibold mb-2 text-pink-500 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Taylor Swift Song Sorter</h3>
            <p className="text-gray-200 mb-4 group-hover:opacity-100 opacity-50 transition-opacity duration-300">An interactive sorter to help users rank or organize songs.</p>
            <Link href="https://github.com/carolinescodes/taylor-swift-song-sorter" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline group-hover:opacity-100 opacity-50 transition-opacity duration-300">View on GitHub</Link>
          </div>
          {/* Basic Wordle Game */}
          <div className="bg-white bg-opacity-5 rounded-xl shadow-xl p-6 hover:scale-105 hover:bg-opacity-10 transition-transform duration-300 backdrop-blur-md border border-white/5 group">
            <h3 className="text-2xl font-semibold mb-2 text-pink-500 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Basic Wordle Game</h3>
            <p className="text-gray-200 mb-4 group-hover:opacity-100 opacity-50 transition-opacity duration-300">A Wordle-style word guessing game with feedback per guess.</p>
            <Link href="https://github.com/carolinescodes/basic-wordle-game" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline group-hover:opacity-100 opacity-50 transition-opacity duration-300">View on GitHub</Link>
          </div>
          {/* Creating and Cracking Computer Ciphers */}
          <div className="bg-white bg-opacity-5 rounded-xl shadow-xl p-6 hover:scale-105 hover:bg-opacity-10 transition-transform duration-300 backdrop-blur-md border border-white/5 group">
            <h3 className="text-2xl font-semibold mb-2 text-pink-500 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Creating and Cracking Computer Ciphers</h3>
            <p className="text-gray-200 mb-4 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Projects focused on building and breaking classic cipher techniques.</p>
            <Link href="https://github.com/carolinescodes/creating-and-cracking-computer-ciphers" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline group-hover:opacity-100 opacity-50 transition-opacity duration-300">View on GitHub</Link>
          </div>
          {/* Clothing Image Identifier */}
          <div className="bg-white bg-opacity-5 rounded-xl shadow-xl p-6 hover:scale-105 hover:bg-opacity-10 transition-transform duration-300 backdrop-blur-md border border-white/5 group">
            <h3 className="text-2xl font-semibold mb-2 text-pink-500 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Clothing Image Identifier</h3>
            <p className="text-gray-200 mb-4 group-hover:opacity-100 opacity-50 transition-opacity duration-300">An image classification project for identifying clothing types.</p>
            <Link href="https://github.com/carolinescodes/clothing-image-identifier" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline group-hover:opacity-100 opacity-50 transition-opacity duration-300">View on GitHub</Link>
          </div>
          {/* TruckApp331 */}
          <div className="bg-white bg-opacity-5 rounded-xl shadow-xl p-6 hover:scale-105 hover:bg-opacity-10 transition-transform duration-300 backdrop-blur-md border border-white/5 group">
            <h3 className="text-2xl font-semibold mb-2 text-pink-500 group-hover:opacity-100 opacity-50 transition-opacity duration-300">TruckApp331</h3>
            <p className="text-gray-200 mb-4 group-hover:opacity-100 opacity-50 transition-opacity duration-300">A project focused on logistics/trucking workflows and app features.</p>
            <Link href="https://github.com/carolinescodes/truckapp331" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline group-hover:opacity-100 opacity-50 transition-opacity duration-300">View on GitHub</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
