import React from 'react';

const benefits = [
  {
    role: "Fermer Uchun",
    items: [
      "Tez va oson xizmat topish",
      "Adolatli va shaffof narxlar",
      "Ishonchli va tekshirilgan pudratchilar",
      "Kafolatlangan sifat"
    ],
    icon: (
      <svg className="w-12 h-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    bg: "bg-green-50"
  },
  {
    role: "Xizmat Ko‘rsatuvchi Uchun",
    items: [
      "Yangi mijozlar bazasi",
      "Aniq va rejalashtirilgan jadval",
      "Kamroq bo‘sh vaqt (bekor turishni kamaytirish)",
      "Daromadni oshirish imkoniyati"
    ],
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    bg: "bg-blue-50"
  },
  {
    role: "AgroBank Uchun",
    items: [
      "Kredit va subsidiyalarning shaffofligi",
      "Mablag‘larning maqsadli sarflanishi nazorati",
      "Raqamli iqtisodiyotni qo‘llab-quvvatlash",
      "Real vaqt rejimida monitoring"
    ],
    icon: (
      <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    bg: "bg-purple-50"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-black border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Yechimning Afzalliklari
          </h2>
          <p className="text-lg text-gray-400">
            Platformamiz barcha ishtirokchilar uchun manfaatli yechim taklif etadi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`rounded-2xl p-8 bg-gray-900 border border-gray-800 hover:border-primary-500 transition-all hover:shadow-lg`}>
              <div className="mb-6 bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center shadow-sm mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-6 text-center">{benefit.role}</h3>
              <ul className="space-y-3">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
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

export default Benefits;
