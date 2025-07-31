import React from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'what-am-i-doing',
    title: 'What Am I Doing',
    description: '',
    date: 'January 31, 2025',
    category: 'Life Updates'
  },
  {
    slug: 'what-am-i-thinking',
    title: 'What Am I Thinking',
    description: '',
    date: 'January 31, 2025',
    category: 'Thoughts'
  }
];

const BlogPage = () => {
  return (
    <section className="py-24 min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-700 opacity-60 blur-2xl -z-10" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-pink-400 drop-shadow-lg text-center">My Blog</h1>
        
        <div className="grid gap-8">
          {blogPosts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={index}>
              <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-xl border-2 border-pink-400 cursor-pointer hover:border-pink-300 hover:scale-105 transition-all duration-300 backdrop-blur-md">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-pink-300 text-sm">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-pink-400 mb-3">{post.title}</h2>
                {post.description && <p className="text-white text-lg leading-relaxed">{post.description}</p>}
                <div className="mt-4">
                  <span className="text-pink-300 text-sm hover:text-pink-400 transition-colors">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
