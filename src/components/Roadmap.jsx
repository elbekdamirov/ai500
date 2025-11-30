import React from 'react';

const roadmap = [
  {
    phase: "Hozirgi Bosqich",
    title: "G'oya + Prototiplash",
    items: [
      "Muammoni tahlil qilish",
      "Yechim konsepsiyasi",
      "UI/UX prototiplash",
      "AI modullarini rejalashtirish"
    ],
    status: "current"
  },
  {
    phase: "1-2 Hafta",
    title: "MVP Versiya",
    items: [
      "Fermer uchun buyurtma sahifasi",
      "AI Matching funksiyasi",
      "Adolatli narx diapazoni",
      "Oddiy admin panel"
    ],
    status: "upcoming"
  },
  {
    phase: "Keyingi Bosqich",
    title: "AI & Test",
    items: [
      "ML modellarni optimizatsiya",
      "Fraud/Risk detection",
      "Beta test (Mahalliy fermerlar)"
    ],
    status: "upcoming"
  },
  {
    phase: "Launch",
    title: "To'liq Ishga Tushirish",
    items: [
      "Mobil versiya optimizatsiyasi",
      "AgroBank integratsiyasi",
      "Reklama va kengaytirish"
    ],
    status: "upcoming"
  }
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-20 bg-black border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Loyiha Rejasi
          </h2>
          <p className="text-lg text-gray-400">
            Loyihani rivojlantirish va bozorga olib chiqish strategiyasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmap.map((phase, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 border-2 transition-all duration-300 ${
                phase.status === 'current' 
                  ? 'bg-primary-950/50 border-primary-500 shadow-lg shadow-primary-500/20' 
                  : 'bg-gray-900 border-gray-800 hover:border-gray-700'
              }`}
            >
              <div className="mb-6">
                <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold ${
                  phase.status === 'current' 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-gray-800 text-gray-400'
                }`}>
                  {phase.phase}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{phase.title}</h3>
              <ul className="space-y-3">
                {phase.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-400 text-sm">
                    <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
