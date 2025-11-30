import React from 'react';

const reasons = [
  {
    title: "Muammoni Chuqur Tushunish",
    description: "Biz faqat texnologiya yaratmayapmiz — biz O‘zbekiston qishloq xo‘jaligi bozoridagi real muammolarni tushunamiz. Jamoamizda soha bo‘yicha tajribaga ega mutaxassislar bor.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Mukammal Jamoa Balansi",
    description: "Strategiya (Asal), Texnologiya (Elbek) va Sun'iy Intellekt (Mironshoh) — har bir soha bo‘yicha kuchli mutaxassislar birlashgan.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Texnika va AI Integratsiyasi",
    description: "Biz shunchaki kod yozmaymiz, balki muammoning o‘ziga mos AI yechimlarini (Matching, Price Estimation, Fraud Detection) ishlab chiqamiz.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Mahalliy Bozorga Moslashuv",
    description: "Biz O‘zbekiston hududlari, fermerlar dunyoqarashi va AgroBank kredit mexanizmlarini hisobga olgan holda yechim taklif qilamiz.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Uzoq Muddatli Motivatsiya",
    description: "Bu loyiha shunchaki hakaton uchun emas. Biz buni real iqtisodiy samaraga ega startapga aylantirishni maqsad qilganmiz.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Nega Aynan Bizning Jamoa?
          </h2>
          <p className="text-lg text-gray-400">
            Bizning ustunligimiz — texnik bilim, mahalliy bozor tushunchasi va kuchli motivatsiya birlashuvida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-primary-500 transition-colors duration-300 hover:transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
