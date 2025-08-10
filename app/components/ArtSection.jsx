import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
      <div className="absolute inset-0 bg-gradient-to-br from-pink-700 via-purple-900 to-indigo-900 opacity-60 blur-2xl -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-pink-400 drop-shadow-lg text-center">Art Gallery</h2>
        
        {/* Dynamic responsive grid that adjusts based on number of items and screen size */}
        <div className="grid auto-fit-minmax gap-4 sm:gap-6 lg:gap-8" style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gridAutoRows: 'minmax(300px, auto)'
        }}>
          {artPieces.map((piece, idx) => (
            <Link href={`/art/${piece.slug}`} key={idx}>
              <div className="relative group rounded-xl overflow-hidden shadow-xl border-2 border-pink-400 cursor-pointer hover:border-pink-300 transition-all duration-300 h-full flex flex-col">
                <div className="flex-1 overflow-hidden">
                  <Image 
                    src={piece.image} 
                    alt={piece.title} 
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <h3 className="text-pink-400 text-lg sm:text-xl font-bold mb-2 text-center">{piece.title}</h3>
                  <p className="text-white text-sm sm:text-base text-center">{piece.subtitle}</p>
                  <p className="text-pink-300 text-xs sm:text-sm mt-2 text-center">Click to view details</p>
                </div>
              </div>
            </Link>
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
        3. Create corresponding page in /app/art/[slug]/page.jsx artData object
        The grid will automatically adjust to accommodate any number of pieces!
        */}
      </div>
    </section>
  );
};

export default ArtSection;
