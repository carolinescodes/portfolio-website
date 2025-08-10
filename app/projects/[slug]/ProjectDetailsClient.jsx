"use client";
import React, { useState } from 'react';

export default function ProjectDetailsClient({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Determine if this is a mobile app project (personal finance)
  const isMobileProject = project.title === 'Personal Finance App';
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <section className="py-24 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-pink-400 mb-12 text-center">{project.title}</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-4xl">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className={`relative rounded-xl shadow-xl w-full ${isMobileProject ? 'max-w-56' : 'max-w-md'}`}>
            <img 
              src={`/portfolio-website${project.images[currentImageIndex]}`}
              alt={`${project.title} demo ${currentImageIndex + 1}`}
              className={`rounded-xl w-full h-auto ${isMobileProject ? 'object-contain bg-gray-100' : 'object-cover'}`}
              style={isMobileProject ? { maxHeight: '500px', minHeight: '300px' } : { maxHeight: '400px' }}
            />
            {project.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  ←
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  →
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-pink-400' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
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
