import React from 'react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedIn: string;
  monologue: string;
}

const TEAM: TeamMember[] = [
  {
    id: 'member1',
    name: 'Subham Bairagi',
    role: 'Team Leader',
    image: 'https://via.placeholder.com/400x400?text=Subham', // 🔴 REPLACE: Add actual image path
    linkedIn: 'https://www.linkedin.com/in/subham-bairagi-06b7012a1', // 🔴 REPLACE: Add LinkedIn URL
    monologue: 'Financial literacy shouldn\'t feel distant. We\'re building Arthaniti to bridge that gap—making wealth wisdom accessible through stories, not spreadsheets.'
  },
  {
    id: 'member2',
    name: 'Debam Das',
    role: 'Engineering & Architecture',
    image: './Assets/DebamDas.jpg', // 🔴 REPLACE: Add actual image path
    linkedIn: 'https://www.linkedin.com/in/debam-das-993581357/', // 🔴 REPLACE: Add LinkedIn URL
    monologue: 'Code is craft. Every component, every interaction is intentional. We\'re obsessed with creating a seamless experience that feels like it was always meant to be.'
  },
  {
    id: 'member3',
    name: 'Sayan Das',
    role: 'Design & Experience',
    image: 'https://via.placeholder.com/400x400?text=Sayan', // 🔴 REPLACE: Add actual image path
    linkedIn: 'https://linkedin.com/in/sayan-das', // 🔴 REPLACE: Add LinkedIn URL
    monologue: 'Great design whispers, it doesn\'t shout. Minimalism isn\'t emptiness—it\'s clarity. That\'s what we\'re chasing with every pixel.'
  },
  {
    id: 'member4',
    name: 'Sandipan Majumder',
    role: 'Content & Community',
    image: 'https://via.placeholder.com/400x400?text=Sandipan', // 🔴 REPLACE: Add actual image path
    linkedIn: 'https://linkedin.com/in/sandipan-majumder', // 🔴 REPLACE: Add LinkedIn URL
    monologue: 'Language matters. Stories matter. We\'re here to translate complex financial concepts into conversations that feel human, warm, and deeply Bengali.'
  }
];

const About: React.FC = () => {
  return (
    <main className="bg-white text-stone-900">
      {/* Hero Section */}
      <section className="min-h-[60vh] px-12 py-40 flex flex-col items-center justify-center bg-gradient-to-b from-stone-50 to-white border-b border-stone-100">
        <div className="max-w-3xl text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-7xl md:text-8xl font-light tracking-tight text-stone-900 select-none">
              আমাদের দল
            </h1>
            <p className="text-2xl font-light text-stone-500 tracking-wide select-none">
              অর্থনীতি ™
            </p>
          </div>

          <p className="text-xl md:text-2xl font-light text-stone-600 leading-relaxed max-w-2xl mx-auto select-none">
            Team ByteForce on a mission to make financial wisdom accessible in Bengali. We believe wealth literacy isn't a luxury—it's a right.
          </p>

          <div className="h-px w-12 bg-stone-300 mx-auto mt-12" />
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="px-12 py-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
            {TEAM.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="px-12 py-32 bg-stone-50 border-t border-stone-100 flex flex-col items-center justify-center text-center">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-light text-stone-900 select-none">
            Built with intention.
          </h2>
          <p className="text-lg text-stone-600 font-light leading-relaxed select-none">
            Every decision we make is guided by a single principle: Does this help someone understand their financial future better?
          </p>
          <div className="h-px w-12 bg-stone-300 mx-auto mt-8" />
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fade-in:nth-child(1) { animation-delay: 0.1s; }
        .animate-fade-in:nth-child(2) { animation-delay: 0.2s; }
        .animate-fade-in:nth-child(3) { animation-delay: 0.3s; }
        .animate-fade-in:nth-child(4) { animation-delay: 0.4s; }
      `}</style>
    </main>
  );
};

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="group animate-fade-in">
      <div className="space-y-8">
        {/* Image Container */}
        <div className="overflow-hidden bg-stone-100 aspect-square rounded-sm border border-stone-200 transition-all duration-500 group-hover:border-stone-400">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            draggable="false"
          />
        </div>

        {/* Name + LinkedIn */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 group/name">
            <h3 className="text-3xl md:text-4xl font-light text-stone-900 select-none">
              {member.name}
            </h3>
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-30 group-hover/name:opacity-60 transition-opacity duration-300 flex-shrink-0 mt-1"
              aria-label={`${member.name} LinkedIn`}
            >
              <svg
                className="w-6 h-6 text-stone-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
          <p className="text-sm uppercase tracking-widest text-stone-500 font-medium select-none">
            {member.role}
          </p>
        </div>

        {/* Monologue */}
        <p className="text-lg font-light text-stone-700 leading-relaxed select-none">
          "{member.monologue}"
        </p>
      </div>
    </div>
  );
};

export default About;