// Fix: Added React import to resolve 'Cannot find namespace React' for React.ReactNode on line 23
import React from 'react';

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Quiz {
  id: string;
  question: string;
  options: QuizOption[];
  explanation: string;
  highlightLineId?: string; // Points to a specific line in content to highlight on retry
}

export interface Chapter {
  id: string;
  title: string;
  content: React.ReactNode;
  quizzes: Quiz[]; // Changed from single quiz to array
}

// Fix: Added missing Lesson interface to resolve export error in components/Lessons.tsx
export interface Lesson {
  id: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  image: string;
}
