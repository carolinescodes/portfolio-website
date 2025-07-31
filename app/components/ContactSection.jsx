"use client";
import React, { useState } from 'react';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add email service integration here (e.g., EmailJS, Formspree)
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-700 via-purple-900 to-indigo-900 opacity-40 blur-2xl -z-10" />
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-pink-400 drop-shadow-lg text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="relative flex flex-col gap-8 items-center">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-20 -z-10" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-400 rounded-full blur-2xl opacity-20 -z-10" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="px-6 py-4 rounded-full bg-white bg-opacity-20 text-pink-400 placeholder-pink-300 focus:outline-none shadow-md w-full max-w-lg border border-pink-400/30"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="px-6 py-4 rounded-full bg-white bg-opacity-20 text-pink-400 placeholder-pink-300 focus:outline-none shadow-md w-full max-w-lg border border-pink-400/30"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="px-6 py-4 rounded-2xl bg-white bg-opacity-20 text-pink-400 placeholder-pink-300 focus:outline-none shadow-md w-full max-w-lg border border-pink-400/30"
            rows={5}
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>
          {submitted && (
            <p className="text-center text-pink-400 font-semibold mt-4">Thank you for reaching out! I'll get back to you soon.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
