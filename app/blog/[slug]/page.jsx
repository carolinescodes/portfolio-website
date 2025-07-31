import React from 'react';
import Link from 'next/link';

const blogData = {
  'what-am-i-doing': {
    title: 'What Am I Doing',
    date: 'January 31, 2025',
    category: 'Life Updates',
    content: `
*Last updated: January 31, 2025*
    `
  },
  'what-am-i-thinking': {
    title: 'What Am I Thinking',
    date: 'January 31, 2025',
    category: 'Thoughts',
    content: `
*Last updated: January 31, 2025*
    `
  }
};

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = blogData[slug];

  if (!post) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl text-pink-400">Blog post not found</h1>
        <Link href="/blog" className="text-pink-300 hover:text-pink-400 mt-4 inline-block">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <section className="py-24 min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-700 opacity-60 blur-2xl -z-10" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog */}
        <Link href="/blog" className="inline-flex items-center text-pink-300 hover:text-pink-400 transition-colors mb-8">
          ← Back to Blog
        </Link>

        {/* Post Header */}
        <div className="bg-white bg-opacity-10 rounded-xl p-8 shadow-xl backdrop-blur-md border border-pink-400/30 mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-pink-300 text-sm">{post.date}</span>
          </div>
          <h1 className="text-4xl font-bold text-pink-400 mb-4">{post.title}</h1>
        </div>

        {/* Post Content */}
        <div className="bg-white bg-opacity-10 rounded-xl p-8 shadow-xl backdrop-blur-md border border-pink-400/30">
          <div className="prose prose-invert prose-pink max-w-none">
            <div 
              className="text-white leading-relaxed space-y-6"
              style={{ whiteSpace: 'pre-line' }}
            >
              {post.content.split('\n').map((line, index) => {
                if (line.startsWith('# ')) {
                  return <h1 key={index} className="text-3xl font-bold text-pink-400 mt-8 mb-4">{line.substring(2)}</h1>;
                } else if (line.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-semibold text-pink-300 mt-6 mb-3">{line.substring(3)}</h2>;
                } else if (line.startsWith('- ')) {
                  return <li key={index} className="text-white ml-4 mb-1">{line.substring(2)}</li>;
                } else if (line.startsWith('*') && line.endsWith('*')) {
                  return <p key={index} className="text-pink-300 italic text-center mt-8">{line}</p>;
                } else if (line.trim() === '') {
                  return <br key={index} />;
                } else {
                  return <p key={index} className="text-white mb-4">{line}</p>;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
