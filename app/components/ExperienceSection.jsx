import React from 'react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 opacity-60 blur-2xl -z-10" />
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-indigo-300 drop-shadow-lg text-center">Professional Experience</h2>
        <div className="space-y-8">
          {/* Experience 1 */}
          <div className="bg-white bg-opacity-5 rounded-xl shadow-xl p-6 backdrop-blur-md border border-white/5 hover:scale-105 transition-transform duration-300 group">
            <h3 className="text-2xl font-semibold mb-2 text-pink-500 group-hover:opacity-100 opacity-50 transition-opacity duration-300">AI Digital Technolog Intern @ GE Aerospace</h3>
            <p className="text-indigo-900 mb-2 group-hover:opacity-100 opacity-50 transition-opacity duration-300">June 2025 - Present</p>
            <ul className="list-disc list-inside text-indigo-900 group-hover:opacity-100 opacity-50 transition-opacity duration-300">
              <li>Developed and enhanced an internal Streamlit application for GE Aerospace’s long-range forecasting project, predicting engine utilization on aircrafts over the next 20 years using time series modeling</li>
              <li>Improved application latency dramatically, added advanced features such as file deletion, data filtering, and average departures visualization, and built interactive data visualizations comparing actual vs. predicted outputs to support model validation and stakeholder confidence</li>
              <li>Collaborated to integrate an LLM-powered chatbot trained on forecast data and embedded within the app for contextual Q&A to support the internal marketing team</li>
              <li>Used Python, Pandas, and Streamlit, deploying via Posit Connect and using Git for version control</li>
              <li>Organized and led a team-wide summer pickleball event, coordinating off-site logistics and increasing team engagement across the Data Science and Analytics division</li>
            </ul>
          </div>
          {/* Experience 2 */}
          <div className="bg-white bg-opacity-5 rounded-xl shadow-xl p-6 backdrop-blur-md border border-white/5 hover:scale-105 transition-transform duration-300 group">
            <h3 className="text-2xl font-semibold mb-2 text-pink-500 group-hover:opacity-100 opacity-50 transition-opacity duration-300">Sales and Marketing Intern @ Aflac</h3>
            <p className="text-indigo-900 mb-2 group-hover:opacity-100 opacity-50 transition-opacity duration-300">May 2024 - Sep 2024</p>
            <ul className="list-disc list-inside text-indigo-900 group-hover:opacity-100 opacity-50 transition-opacity duration-300">
              <li>Collaborated with a mentor and team of interns to schedule meetings, bringing in new clients</li>
              <li>Presented products to business owners, effectively communicating value and securing partnerships</li>
              <li>Facilitated employee enrollment in diverse benefit plans, ensuring comprehensive understanding and satisfaction among stakeholders</li>
              <li>Utilized CRM tools and data analytics to track client interactions and optimize sales strategies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
