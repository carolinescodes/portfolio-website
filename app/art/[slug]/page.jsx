import React from 'react';
import Image from 'next/image';

export default async function ArtDetails({ params }) {
  const { slug } = await params;
  // Art pieces data - updated to match ArtSection.jsx
  const artData = {
    'art1': {
      title: 'Geese at Dawn',
      image: '/ART/art1.jpg',
      medium: 'Oil on Canvas',
      size: '36" x 24"',
      year: '2023',
      description: ''
    },
    'art2': {
      title: 'Gracie Portrait',
      image: '/ART/art2.jpg',
      medium: 'Acrylic on Canvas',
      size: '18" x 24"',
      year: '2023',
      description: 'A heartfelt portrait of Gracie, capturing her personality and spirit through careful attention to detail and expressive brushwork.'
    },
    'art3': {
      title: 'Portrait Study',
      image: '/ART/art3.jpg',
      medium: 'Oil on Canvas',
      size: '18" x 12"',
      year: '2024',
      description: 'A quick 45 minute study practicing brushwork and true alla prima techniques in attempt to master more emotional strokes.'
    },
    'art4': {
      title: 'Ponte Vecchio',
      image: '/ART/art4.JPG',
      medium: 'Oil on Wood',
      size: '24" x 18"',
      year: '2024',
      description: 'A detailed study of the famous Ponte Vecchio bridge in Florence, capturing the architectural beauty and historic charm of this iconic landmark. Done during my semester abroad in Florence.'
    },
    'art5': {
      title: 'By the Lake',
      image: '/ART/art5.JPG',
      medium: 'Watercolor on Paper',
      size: '5" x 7"',
      year: '2024',
      description: 'A quick watercolor practice depicting the feeling of one of my favorite places, Smith Mountain Lake.'
    },
    'art6': {
      title: 'Oranges Still Life',
      image: '/ART/art6.jpg',
      medium: 'Oil on Canvas',
      size: '18" x 24"',
      year: '2024',
      description: 'A classic still life composition featuring oranges and a flower vase. Done during my semester abroad in Florence. Meant to focus on practicing reflection with oils.'
    },
    'art7': {
      title: 'Western Duality',
      image: '/ART/art7.JPG',
      medium: 'Oil on Canvas',
      size: '36" x 24"',
      year: '2025',
      description: 'An emotional original composition exploring how gender can interpret traditionally masculine and feminine experiences.'
    },
    'art8': {
      title: 'Docks at Bellagio',
      image: '/ART/art8.jpg',
      medium: 'Watercolor on Paper',
      size: '5" x 7"',
      year: '2022',
      description: 'A watercolor study of the picturesque docks at Bellagio, capturing the Mediterranean light and the charming architecture of Lake Como.'
    },
    'art9': {
      title: 'Dinner with an Old Friend',
      image: '/ART/art9.JPG',
      medium: 'Oil on Canvas',
      size: '12" x 18"',
      year: '2022',
      description: 'A quick study of an oyster dinner and a glass of wine. Left unfinished due to personal decision after adoring the child-like brightness of the blue underpainting.'
    }
  };

  const artwork = artData[slug];
  if (!artwork) return <div className="text-center py-24 text-pink-400">Artwork not found.</div>;

  return (
    <section className="py-24 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-pink-400 mb-12 text-center">{artwork.title}</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-4xl">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image
            src={artwork.image}
            alt={artwork.title}
            width={400}
            height={500}
            className="rounded-xl shadow-xl object-cover"
            style={{ maxHeight: '500px', width: 'auto' }}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-md mb-6" style={{backgroundColor: 'rgba(255,255,255,0.15)'}}>
            <div className="text-pink-400 font-semibold text-lg mb-2">Details</div>
            <div className="text-white space-y-2">
              <p style={{color: 'white'}}><span className="text-pink-300">Medium: </span>{artwork.medium}</p>
              <p style={{color: 'white'}}><span className="text-pink-300">Size: </span>{artwork.size}</p>
              <p style={{color: 'white'}}><span className="text-pink-300">Year: </span>{artwork.year}</p>
            </div>
          </div>
          <p className="text-lg text-white max-w-md text-center md:text-left bg-white bg-opacity-10 rounded-xl p-6 shadow-md" style={{backgroundColor: 'rgba(255,255,255,0.15)', color: 'white'}}>
            {artwork.description}
          </p>
        </div>
      </div>
    </section>
  );
}
