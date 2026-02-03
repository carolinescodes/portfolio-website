import React from 'react';
import ProjectDetailsClient from './ProjectDetailsClient';

// Generate static params for all projects
export async function generateStaticParams() {
  return [
    { slug: 'pdf-summarizer' },
    { slug: 'personal-finance-app' },
    { slug: 'data-visualization-tool' },
    { slug: 'black-jack-game' },
    { slug: 'taylor-swift-song-sorter' },
    { slug: 'basic-wordle-game' },
    { slug: 'creating-and-cracking-computer-ciphers' },
    { slug: 'clothing-image-identifier' },
    { slug: 'truckapp331' }
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
    },
    'black-jack-game': {
      title: 'Blackjack Game',
      images: [],
      github: 'https://github.com/carolinescodes/black-jack-game',
      description: 'A blackjack game that implements core gameplay mechanics, card dealing, and win/loss logic with a clean, user-friendly interface.'
    },
    'taylor-swift-song-sorter': {
      title: 'Taylor Swift Song Sorter',
      images: [],
      github: 'https://github.com/carolinescodes/taylor-swift-song-sorter',
      description: 'An interactive song sorting experience that lets users compare and organize tracks into personalized rankings.'
    },
    'basic-wordle-game': {
      title: 'Basic Wordle Game',
      images: [],
      github: 'https://github.com/carolinescodes/basic-wordle-game',
      description: 'A Wordle-inspired word guessing game that provides per-guess feedback and tracks player progress.'
    },
    'creating-and-cracking-computer-ciphers': {
      title: 'Creating and Cracking Computer Ciphers',
      images: [],
      github: 'https://github.com/carolinescodes/creating-and-cracking-computer-ciphers',
      description: 'A collection of projects exploring classic ciphers, encryption methods, and techniques for breaking them.'
    },
    'clothing-image-identifier': {
      title: 'Clothing Image Identifier',
      images: [],
      github: 'https://github.com/carolinescodes/clothing-image-identifier',
      description: 'An image classification project that identifies clothing types using a machine learning model.'
    },
    'truckapp331': {
      title: 'Trucking App',
      images: [],
      github: 'https://github.com/carolinescodes/truckapp331',
      description: 'A logistics-focused application concept for coordinating trucking workflows, deliveries, and scheduling.'
    }
  };

  const project = projectData[params.slug];
  if (!project) return <div className="text-center py-24 text-pink-400">Project not found.</div>;

  return <ProjectDetailsClient project={project} />;
}
