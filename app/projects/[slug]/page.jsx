import React from 'react';
import Image from 'next/image';

export default function ProjectDetails({ params }) {
  // Update with actual project names and videos
  const projectData = {
    'pdf-summarizer': {
      title: 'PDF Summarizer',
      video: '/videos/pdf-summarizer-demo.mp4',
      github: 'https://github.com/yourusername/pdf-summarizer',
      description: 'Summarizes PDF documents using AI. Built with React, Node.js, and OpenAI API.'
    },
    'personal-finance-app': {
      title: 'Personal Finance App',
      video: '/videos/personal-finance-demo.mp4',
      github: 'https://github.com/yourusername/personal-finance-app',
      description: 'Track expenses, set budgets, and visualize spending. Built with React Native and Firebase.'
    },
    'data-visualization-tool': {
      title: 'Data Visualization Tool',
      video: '/videos/data-viz-demo.mp4',
      github: 'https://github.com/yourusername/data-visualization-tool',
      description: 'Interactive charts and dashboards for data analysis. Built with D3.js and Python Flask.'
    },
    'online-card-game': {
      title: 'Online Card Game',
      video: '/videos/card-game-demo.mp4',
      github: 'https://github.com/yourusername/online-card-game',
      description: 'Multiplayer card game with real-time play. Built with React, Socket.io, and Node.js.'
    }
  };

  const project = projectData[params.slug];
  if (!project) return <div className="text-center py-24 text-pink-400">Project not found.</div>;

  return (
    <section className="py-24 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-pink-400 mb-12 text-center">{project.title}</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-4xl">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <video 
            src={project.video} 
            controls 
            autoPlay 
            muted 
            loop 
            className="rounded-xl shadow-xl w-full max-w-md"
            style={{ maxHeight: '400px' }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300 mb-6">
            View on GitHub
          </a>
          <p className="text-lg text-white max-w-md text-center md:text-left bg-white bg-opacity-10 rounded-xl p-6 shadow-md">{project.description}</p>
        </div>
      </div>
    </section>
  );
}
