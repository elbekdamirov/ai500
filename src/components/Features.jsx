import React from 'react';

const features = [
  {
    title: "AI Matching",
    description: "Fermer yozadigan talab (yer maydoni, lokatsiya, ekin turi, vaqt) asosida AI eng mos 3–5 ta xizmat ko‘rsatuvchini tavsiya qiladi. Masalan: 5 gektar paxta uchun qaysi traktor, qaysi mutaxassis eng qulay — AI avtomatik tanlaydi.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: "bg-blue-500"
  },
  {
    title: "AI Narx Baholash",
    description: "Xizmat bo‘yicha bozor narxlari asosida AI taxminiy adolatli narx diapazonini chiqaradi. Fermer haddan tashqari qimmat taklifni ko‘rsa darhol biladi.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "bg-green-500"
  },
  {
    title: "Ishonchlilik Reytingi",
    description: "AI xizmat ko‘rsatuvchi haqidagi reytinglar, sharhlar, profildagi nomuvofiqliklar asosida ishonchlilik balli beradi. Soxta yoki xavfli profil aniqlansa, platforma ogohlantiradi.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "bg-purple-500"
  },
  {
    title: "Avtomatik Jadval",
    description: "AI xizmat ko‘rsatuvchining bo‘sh va band vaqtlariga qarab eng qulay vaqtni tavsiya qiladi. Bu texnikaning bekor turishini kamaytiradi, fermer esa vaqtida xizmat oladi.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-orange-500"
  },
  {
    title: "AI Chatbot Yordami",
    description: "Texnika bilmaydigan fermerlar so‘rovlar yoki buyurtmalarni AI chat orqali oson kiritadi. Tabiiy tilni tushunish orqali muloqot qiladi.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    color: "bg-teal-500"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-black border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Platformaning Imkoniyatlari
          </h2>
          <p className="text-lg text-gray-400">
            Bizning AI texnologiyamiz qishloq xo‘jaligidagi eng og‘riqli muammolarni hal qilishga qaratilgan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-800 hover:border-primary-500">
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
