import React from 'react';
import ProjectDetailsClient from './ProjectDetailsClient';

// Generate static params for all projects
export async function generateStaticParams() {
  return [
    { slug: 'pdf-summarizer' },
    { slug: 'personal-finance-app' },
    { slug: 'data-visualization-tool' }
  ];
}

export default function ProjectDetails({ params }) {
  // Project data - this can be in the server component
  const projectData = {
    'pdf-summarizer': {
      title: 'PDF Summarizer',
      images: ['/demos/pdf1.png', '/demos/pdf2.png'],
      github: 'https://github.com/carolinescodes/pdf-summarizer',
      description: 'An intelligent PDF document summarizer that leverages OpenAI\'s GPT models to extract key insights and generate concise summaries. Features include drag-and-drop file upload, real-time processing, and customizable summary lengths. Built with React for a responsive frontend, Node.js/Express backend, and integrated with OpenAI API for natural language processing.'
    },
    'personal-finance-app': {
      title: 'Personal Finance App',
      images: ['/demos/bb1.PNG', '/demos/bb2.PNG', '/demos/bb3.PNG', '/demos/bb4.PNG'],
      github: 'https://github.com/carolinescodes/baddie-budget',
      description: 'A comprehensive personal finance management application designed to help users track expenses, set financial goals, and visualize spending patterns. Features include expense categorization, budget alerts, spending analytics with interactive charts, and secure data storage. Built with React Native for cross-platform compatibility and Firebase for real-time data synchronization.'
    },
    'data-visualization-tool': {
      title: 'Data Visualization Tool',
      images: ['/demos/dv1.png', '/demos/dv2.png', '/demos/dv3.png', '/demos/dv4.png'],
      github: 'https://github.com/carolinescodes/data-visualization-dashboard',
      description: 'An interactive data visualization dashboard that transforms complex datasets into meaningful insights through dynamic charts and graphs. Features include multiple chart types, real-time data updates, customizable filtering, and export capabilities. Built with D3.js for powerful visualizations, Python Flask for data processing, and responsive design for optimal viewing across devices.'
    }
  };

  const project = projectData[params.slug];
  if (!project) return <div className="text-center py-24 text-pink-400">Project not found.</div>;

  return <ProjectDetailsClient project={project} />;
}
