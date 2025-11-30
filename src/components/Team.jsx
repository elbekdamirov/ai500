import React from 'react';

const team = [
  {
    name: "Asal Botirova",
    role: "Research & Presentation Lead",
    image: "/asal.jpg",
    linkedin: "https://www.linkedin.com/in/asal-botirova",
    description: "Loyihalarni tadqiq qilish, foydalanuvchi muammolarini aniqlash va pitching bo'yicha mutaxassis. Muammoning real bozor qiymatini tushuntiradi va loyiha strategiyasini boshqaradi."
  },
  {
    name: "Elbek Damirov",
    role: "Full-Stack Web Developer",
    image: "/elbek.png",
    linkedin: "https://www.linkedin.com/in/elbekdamirov/",
    description: "Platformaning frontend interfeysi va foydalanuvchi tajribasi (UX) uchun mas'ul. React, Next.js va TailwindCSS yordamida tez va qulay interfeys yaratadi."
  },
  {
    name: "Mironshoh Xolmurodov",
    role: "Python & AI Developer",
    image: "/mironshoh.jpg",
    linkedin: "https://www.linkedin.com/in/mironshoh-xolmurodov/",
    description: "AI Matching algoritmi, narx baholash va risk aniqlash modullarini ishlab chiquvchi. Python va Machine Learning bo'yicha mutaxassis."
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-black border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Bizning Jamoa
          </h2>
          <p className="text-lg text-gray-400">
            Muammoni chuqur tushungan, texnik bilim va mahalliy bozor tajribasiga ega jamoa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-primary-500 group">
              <div className="mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 rounded-xl mx-auto object-cover border-4 border-gray-800 group-hover:border-primary-500 transition-colors"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">{member.name}</h3>
              <p className="text-primary-500 text-sm font-medium mb-4 text-center">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{member.description}</p>
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-400 hover:text-[#0077b5] transition-colors mx-auto"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="ml-2 text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
