
import React from 'react';
import { Lesson } from '../types';

const LESSONS: Lesson[] = [
  {
    id: '1',
    category: 'আর্থিক স্বচ্ছলতা',
    title: 'সঞ্চয়ের সহজ মানে',
    description: 'টাকা জমানো মানে কৃপণতা নয়, এটি ভবিষ্যতের প্রতি নিজের ভালোবাসা।',
    readTime: '৫ মিনিট',
    image: 'https://picsum.photos/seed/money/800/600'
  },
  {
    id: '2',
    category: 'মানসিক প্রশান্তি',
    title: 'শান্ত থেকে সিদ্ধান্ত নেওয়া',
    description: 'উত্তেজনার সময় বড় কোনো সিদ্ধান্ত না নেওয়াই বুদ্ধিমানের কাজ।',
    readTime: '৮ মিনিট',
    image: 'https://picsum.photos/seed/peace/800/600'
  },
  {
    id: '3',
    category: 'ক্যারিয়ার',
    title: 'ভবিষ্যতের নতুন দক্ষতা',
    description: 'বদলাতে থাকা এই পৃথিবীর সাথে নিজেকে মানিয়ে নেওয়ার উপায়।',
    readTime: '৬ মিনিট',
    image: 'https://picsum.photos/seed/skill/800/600'
  }
];

const Lessons: React.FC = () => {
  return (
    <section id="lessons" className="py-32 px-12 bg-white">
      <div className="mb-20 flex justify-between items-end">
        <div>
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-stone-400">শিখন মডিউল</span>
          <h2 className="text-6xl font-light mt-4 text-stone-900">আপনার শেখার পথ।</h2>
        </div>
        <a href="#" className="text-stone-900 border-b border-stone-900 pb-1 font-medium hover:text-stone-500 hover:border-stone-500 transition-all">সবগুলো দেখুন</a>
      </div>

      <div className="grid grid-cols-3 gap-16">
        {LESSONS.map((lesson) => (
          <div key={lesson.id} className="group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden mb-8 bg-stone-100">
              <img 
                src={lesson.image} 
                alt={lesson.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <span className="text-xs font-semibold tracking-widest text-stone-400 uppercase">{lesson.category}</span>
            <h3 className="text-3xl font-light mt-3 text-stone-900 group-hover:text-stone-600 transition-colors">{lesson.title}</h3>
            <p className="mt-4 text-stone-500 font-light leading-relaxed">{lesson.description}</p>
            <div className="mt-6 text-sm font-medium text-stone-400">{lesson.readTime} পাঠ</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lessons;
