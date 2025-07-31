import React from 'react';

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 opacity-60 blur-2xl -z-10" />
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-indigo-300 drop-shadow-lg text-center">Education</h2>
        <div className="space-y-8">
          {/* Wake Forest University */}
          <div className="bg-white bg-opacity-5 rounded-xl shadow-xl p-6 backdrop-blur-md border border-white/5 hover:scale-105 transition-transform duration-300 group">
            <h3 className="text-2xl font-semibold mb-2 text-pink-500 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Wake Forest University</h3>
            <p className="text-indigo-900 mb-2 group-hover:opacity-100 opacity-50 transition-opacity duration-300">B.S. in Computer Science, Minors in Studio Art & Mathematics</p>
            <p className="text-indigo-900 mb-2 group-hover:opacity-100 opacity-50 transition-opacity duration-300">3.56 GPA Expected Graduation May 2026</p>
            <ul className="list-disc list-inside text-indigo-900 mb-2 group-hover:opacity-100 opacity-50 transition-opacity duration-300">
              <li>Dean's List</li>
              <li>Chi Omega Fraternity</li>
              <li>Women in Computer Science</li>
              <li>Student Advisor</li>
              <li>Wake Forest Catholic Community</li>
            </ul>
          </div>
          {/* High School */}
          <div className="bg-white bg-opacity-5 rounded-xl shadow-xl p-6 backdrop-blur-md border border-white/5 hover:scale-105 transition-transform duration-300 group">
            <h3 className="text-2xl font-semibold mb-2 text-pink-500 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Georgetown Visitation Preparatory School</h3>
            <p className="text-indigo-900 mb-2 group-hover:opacity-100 opacity-50 transition-opacity duration-300">High School Diploma, Graduated 2022</p>
            <ul className="list-disc list-inside text-indigo-900 mb-2 group-hover:opacity-100 opacity-50 transition-opacity duration-300">
              <li>1799 Scholar</li>
              <li>Varsity Volleyball</li>
              <li>Mathletes</li>
              <li>Red Equity - Charity Offering Period Product Security for the Impoverished in DC</li>
              <li>Kairos Retreat Leader</li>
            </ul>
            <div className="mt-2">
              <span className="font-semibold text-indigo-200 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Clubs:</span>
              <span className="ml-2 text-indigo-900 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Christian Action Service, Spanish Culture, Think Pink, Best Buddies</span>
            </div>
          </div>
          {/* Abroad Experiences Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-5 rounded-lg shadow-md p-4 backdrop-blur-md border border-white/5 hover:scale-105 transition-transform duration-300 group">
              <h3 className="text-lg font-semibold mb-1 text-pink-500 group-hover:opacity-100 opacity-50 transition-opacity duration-300">CEA CAPA Semester Abroad</h3>
              <p className="text-indigo-900 mb-1 italic group-hover:opacity-100 opacity-50 transition-opacity duration-300">Accademia d’Arte <span className='italic'>Florence, Italy</span> &mdash; Fall 2024</p>
              <ul className="list-disc list-inside text-indigo-900 mb-1 group-hover:opacity-100 opacity-50 transition-opacity duration-300">
                <li>Studied global cities, Renaissance art, and hands-on artistic techniques through coursework in composition drawing, oil painting, and art history</li>
                <li>Participated in final student art show featuring four of my pieces</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-5 rounded-lg shadow-md p-4 backdrop-blur-md border border-white/5 hover:scale-105 transition-transform duration-300 group">
              <h3 className="text-lg font-semibold mb-1 text-pink-500 group-hover:opacity-100 opacity-50 transition-opacity duration-300">The London School of Economics and Political Science</h3>
              <p className="text-indigo-900 mb-1 italic group-hover:opacity-100 opacity-50 transition-opacity duration-300">The Ethics of Data and Artificial Intelligence Course, <span className='italic'>London, England</span> &mdash; Summer 2023</p>
              <ul className="list-disc list-inside text-indigo-900 mb-1 group-hover:opacity-100 opacity-50 transition-opacity duration-300">
                <li>Explored ethical, societal, and economic implications of AI systems and big data development.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
