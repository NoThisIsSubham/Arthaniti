import React from 'react';
import GeminiImage from '../assets/Gemini_Generated_Image_bac4tlbac4tlbac4.png';  // ⬅️ Use the full filename

const About: React.FC = () => {
  return (
    <section className="min-h-screen py-32 px-12 bg-stone-50 flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-light text-stone-900 mb-12">আমাদের সম্পর্কে</h1>
      
      {/* Gemini image */}
      <img 
        src={GeminiImage} 
        alt="Gemini AI" 
        className="w-48 h-48 mb-12 rounded-full shadow-lg border border-stone-200"
      />

      {/* Team names */}
      <div className="space-y-6 text-2xl font-light text-stone-700">
        <p>Subham Bairagi</p>
        <p>Debam Das</p>
        <p>Sayan Das</p>
        <p>Sandipan Majumder</p>
      </div>
    </section>
  );
};

export default About;