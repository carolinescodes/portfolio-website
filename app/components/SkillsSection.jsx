import React from 'react';

const skills = [
  'JavaScript',
  'Python',
  'Next.js',
  'Node.js',
  'HTML & CSS',
  'Git & GitHub',
  'SQL',
  'Data Analysis',
  'UI/UX Design',
  'Machine Learning',
  'Digital Art Tools',
  'APIs',
  'Streamlit',
  'C',
  'Bash/Shell Scripting',
  'Pandas',
  'Numpy',
  'Matplotlib',
  'Plotly',
  'AWS',
  'Posit Connect',
  'Excel',
  'Algorithm Design',
  'LLM Integration',
  'Time Series Modeling',
  'Linear Algebra',
  'Number Theory'
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 opacity-40 blur-2xl -z-10" />
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-pink-400 drop-shadow-lg text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-4">
          {skills.map((skill, idx) => (
            <span key={idx} className="bg-white bg-opacity-10 text-pink-400 font-semibold px-6 py-3 rounded-full shadow text-lg hover:bg-opacity-30 transition-all duration-300 text-center">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
