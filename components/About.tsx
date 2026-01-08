import React from 'react';
import SubhamImage from '../Assets/Subham.jpg';
import DebamImage from '../Assets/Debam.jpg';
import SayanImage from '../Assets/Sayan.jpg';
import SandipanImage from '../Assets/Sandipan.jpg';

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
    role: 'Leader & Visionary',
    image: SubhamImage,
    linkedIn: 'https://www.linkedin.com/in/subham-bairagi-06b7012a1/',
    monologue: 'Arthaniti was born from the vision that finance can be simple and relatable. In Bengali, ByteForce brings lessons to life, helping everyone understand concepts, not giving advice.'
  },
  {
    id: 'member2',
    name: 'Debam Das',
    role: 'Engineering & Architecture',
    image: DebamImage,
    linkedIn: 'https://www.linkedin.com/in/debam-das-993581357/',
    monologue: 'I turn ideas into interactive experiences. Minimalistic GUI and quizzes make learning with Kaka Babu smooth, clear, and engaging. Education should be empowering, not intimidating.'
  },
  {
    id: 'member3',
    name: 'Sayan Das',
    role: 'Design & Experience',
    image: SayanImage,
    linkedIn: 'https://www.linkedin.com/in/sayan-das-478961398/',
    monologue: 'Every screen, every tap matters. I make sure Arthaniti intuitive and enjoyable, so learning in Bengali feels natural and effortless'
  },
  {
    id: 'member4',
    name: 'Sandipan Majumder',
    role: 'Content & Community',
    image: SandipanImage,
    linkedIn: 'https://www.linkedin.com/in/sandipan-majumder-65303539b/',
    monologue: 'I craft lessons into stories that stick. Arthaniti guides users gently, making finance approachable without ever giving advice.'
  }
];

const About: React.FC = () => {
  return (
    <main className="bg-white text-stone-900">
      {/* Hero Section */}
      <section className="min-h-[60vh] px-12 py-40 flex flex-col items-center justify-center bg-gradient-to-b from-stone-50 to-white border-b border-stone-100 hero-section-fade">
        <div className="max-w-3xl text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-7xl md:text-8xl font-light tracking-tight text-stone-900 select-none hero-title-fade">
              আমাদের দল
            </h1>
            <p className="text-2xl font-light text-stone-500 tracking-wide select-none hero-subtitle-fade">
              অর্থনীতি ™
            </p>
          </div>

          <p className="text-xl md:text-2xl font-light text-stone-600 leading-relaxed max-w-2xl mx-auto select-none hero-description-fade">
            Team ByteForce on a mission to make financial wisdom accessible in Bengali. We believe wealth literacy isn't a luxury—it's a right.
          </p>

          <div className="h-px w-12 bg-stone-300 mx-auto mt-12 hero-divider-fade" />
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
      <section className="px-12 py-32 bg-stone-50 border-t border-stone-100 flex flex-col items-center justify-center text-center closing-section-fade">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-light text-stone-900 select-none closing-title-fade">
            Built with intention.
          </h2>
          <p className="text-lg text-stone-600 font-light leading-relaxed select-none closing-description-fade">
            Every decision we make is guided by a single principle: Does this help someone understand their financial future better?
          </p>
          <div className="h-px w-12 bg-stone-300 mx-auto mt-8 closing-divider-fade" />
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

        /* Hero Section Animations */
        .hero-section-fade {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }

        .hero-title-fade {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards 0.1s;
        }

        .hero-subtitle-fade {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards 0.2s;
        }

        .hero-description-fade {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards 0.3s;
        }

        .hero-divider-fade {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards 0.4s;
        }

        /* Closing Section Animations */
        .closing-section-fade {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }

        .closing-title-fade {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards 0.1s;
        }

        .closing-description-fade {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards 0.2s;
        }

        .closing-divider-fade {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards 0.3s;
        }

        /* Respect prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .hero-section-fade,
          .hero-title-fade,
          .hero-subtitle-fade,
          .hero-description-fade,
          .hero-divider-fade,
          .closing-section-fade,
          .closing-title-fade,
          .closing-description-fade,
          .closing-divider-fade,
          .animate-fade-in {
            animation: none;
            opacity: 1;
          }
        }
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