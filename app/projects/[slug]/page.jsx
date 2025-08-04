import React from 'react';
import Image from 'next/image';

// Generate static params for all projects
export async function generateStaticParams() {
  return [
    { slug: 'pdf-summarizer' },
    { slug: 'personal-finance-app' },
    { slug: 'data-visualization-tool' }
  ];
}

export default function ProjectDetails({ params }) {
  // Update with actual project names and videos
  const projectData = {
    'pdf-summarizer': {
      title: 'PDF Summarizer',
      video: '/videos/pdf-summarizer-demo.mp4',
      github: 'https://github.com/carolinescodes/pdf-summarizer',
      description: 'An intelligent PDF document summarizer that leverages OpenAI\'s GPT models to extract key insights and generate concise summaries. Features include drag-and-drop file upload, real-time processing, and customizable summary lengths. Built with React for a responsive frontend, Node.js/Express backend, and integrated with OpenAI API for natural language processing.'
    },
    'personal-finance-app': {
      title: 'Personal Finance App',
      video: '/videos/personal-finance-demo.mp4',
      github: 'https://github.com/carolinescodes/baddie-budget',
      description: 'A comprehensive personal finance management application designed to help users track expenses, set financial goals, and visualize spending patterns. Features include expense categorization, budget alerts, spending analytics with interactive charts, and secure data storage. Built with React Native for cross-platform compatibility and Firebase for real-time data synchronization.'
    },
    'data-visualization-tool': {
      title: 'Data Visualization Tool',
      video: '/videos/data-viz-demo.mp4',
      github: 'https://github.com/carolinescodes/data-visualization-dashboard',
      description: 'An interactive data visualization dashboard that transforms complex datasets into meaningful insights through dynamic charts and graphs. Features include multiple chart types, real-time data updates, customizable filtering, and export capabilities. Built with D3.js for powerful visualizations, Python Flask for data processing, and responsive design for optimal viewing across devices.'
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
          <p className="text-lg text-gray-800 max-w-md text-center md:text-left bg-white bg-opacity-90 rounded-xl p-6 shadow-md">{project.description}</p>
        </div>
      </div>
    </section>
  );
}
