import React from 'react';

const artPieces = [
  {
    slug: 'art1',
    image: `/ART/art1.jpg`,
    title: `Geese at Dawn`,
    subtitle: `Oil on Canvas`
  },
  {
    slug: 'art2',
    image: `/ART/art2.jpg`,
    title: `Gracie Portrait`,
    subtitle: `Acrylic on Canvas`
  },
  {
    slug: 'art3',
    image: `/ART/art3.jpg`,
    title: `Portrait Study`,
    subtitle: `Oil on Canvas`
  },
  {
    slug: 'art4',
    image: `/ART/art4.JPG`,
    title: `Ponte Vecchio`,
    subtitle: `Oil on Wood`
  },
  {
    slug: 'art5',
    image: `/ART/art5.JPG`,
    title: `By the Lake`,
    subtitle: `Watercolor on Paper`
  },
  {
    slug: 'art6',
    image: `/ART/art6.jpg`,
    title: `Oranges Still Life`,
    subtitle: `Oil on Canvas`
  },
  {
    slug: 'art7',
    image: `/ART/art7.JPG`,
    title: `Western Duality`,
    subtitle: `Oil on Canvas`
  },
  {
    slug: 'art8',
    image: `/ART/art8.jpg`,
    title: `Docks at Bellagio`,
    subtitle: `Watercolor on Paper`
  },
  {
    slug: 'art9',
    image: `/ART/art9.JPG`,
    title: `Dinner with an Old Friend`,
    subtitle: `Oil on Canvas`
  }
];

const ArtSection = () => {
  return (
    <section id="art" className="py-24 relative">
      <div className="absolute inset-0 bg-linear-to-br from-pink-700 via-purple-900 to-indigo-900 opacity-60 blur-2xl -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-pink-400 drop-shadow-lg text-center">Art Gallery</h2>
        
        {/* Raw collage gallery wall */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 lg:gap-8">
          {artPieces.map((piece, idx) => (
            <div key={idx} className="mb-4 sm:mb-6 lg:mb-8 break-inside-avoid">
              <div className="relative group overflow-hidden">
                <img 
                  src={`/portfolio-website${piece.image}?v=${process.env.BUILD_TIME}`}
                  alt={piece.title} 
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <h3 className="text-pink-400 text-lg sm:text-xl font-bold mb-2 text-center">{piece.title}</h3>
                  <p className="text-white text-sm sm:text-base text-center">{piece.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Instructions for easy adding of new artwork */}
        {/* 
          To add new artwork:
          1. Add your image to /public/ART/ folder
          2. Add a new object to the artPieces array above with:
            - slug: 'art10' (increment number)
            - image: '/ART/your-image.jpg'
            - title: 'Your Artwork Title'
            - subtitle: 'Medium/Technique'
          The collage wall will automatically adjust to accommodate any number of pieces!
        */}
      </div>
    </section>
  );
};

export default ArtSection;
