import React from 'react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-indigo-900 to-black opacity-70 blur-2xl -z-10" />
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-pink-400 drop-shadow-lg text-center">Coding Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10">
          {/* PDF Summarizer */}
          <div className="bg-white bg-opacity-5 rounded-xl shadow-xl p-6 hover:scale-105 hover:bg-opacity-10 transition-transform duration-300 backdrop-blur-md border border-white/5 group">
            <h3 className="text-2xl font-semibold mb-2 text-pink-500 group-hover:opacity-100 opacity-50 transition-opacity duration-300">PDF Summarizer</h3>
            <p className="text-gray-200 mb-4 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Summarizes PDF documents using AI. Built with React, Node.js, and OpenAI API.</p>
            <a href="/projects/pdf-summarizer" className="text-pink-400 hover:underline group-hover:opacity-100 opacity-50 transition-opacity duration-300">View Details</a>
          </div>
          {/* Personal Finance App */}
          <div className="bg-white bg-opacity-5 rounded-xl shadow-xl p-6 hover:scale-105 hover:bg-opacity-10 transition-transform duration-300 backdrop-blur-md border border-white/5 group">
            <h3 className="text-2xl font-semibold mb-2 text-pink-500 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Personal Finance App</h3>
            <p className="text-gray-200 mb-4 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Track expenses, set budgets, and visualize spending. Built with React Native and Firebase.</p>
            <a href="/projects/personal-finance-app" className="text-pink-400 hover:underline group-hover:opacity-100 opacity-50 transition-opacity duration-300">View Details</a>
          </div>
          {/* Data Visualization Tool */}
          <div className="bg-white bg-opacity-5 rounded-xl shadow-xl p-6 hover:scale-105 hover:bg-opacity-10 transition-transform duration-300 backdrop-blur-md border border-white/5 group">
            <h3 className="text-2xl font-semibold mb-2 text-pink-500 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Data Visualization Tool</h3>
            <p className="text-gray-200 mb-4 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Interactive charts and dashboards for data analysis. Built with D3.js and Python Flask.</p>
            <a href="/projects/data-visualization-tool" className="text-pink-400 hover:underline group-hover:opacity-100 opacity-50 transition-opacity duration-300">View Details</a>
          </div>
          {/* Online Card Game */}
          <div className="bg-white bg-opacity-5 rounded-xl shadow-xl p-6 hover:scale-105 hover:bg-opacity-10 transition-transform duration-300 backdrop-blur-md border border-white/5 group">
            <h3 className="text-2xl font-semibold mb-2 text-pink-500 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Online Card Game</h3>
            <p className="text-gray-200 mb-4 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Multiplayer card game with real-time play. Built with React, Socket.io, and Node.js.</p>
            <a href="/projects/online-card-game" className="text-pink-400 hover:underline group-hover:opacity-100 opacity-50 transition-opacity duration-300">View Details</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
