import React from 'react';

const problems = [
  {
    title: "Texnika va Mutaxassis Topish Qiyin",
    description: "Traktor, kombayn, yer haydash yoki sug‘orish tizimi o‘rnatadigan mutaxassisni topish qiyin. Fermerlar ko‘pincha telefon orqali tanish-bilish orqali izlaydi — bu esa vaqtni oladi va kafolat bermaydi.",
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    title: "Narxlar Shaffof Emas",
    description: "Xizmat narxlari bir xil emas — ba’zida fermerlar oshirilgan yoki adolatsiz narxlarga rozi bo‘lishga majbur bo‘lishadi.",
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Ishonchsiz Pudratchilar",
    description: "Ishonchli pudratchini ajratish qiyin: profillari soxta bo‘lishi, kelishilgan vaqtda kelmaslik, sifatsiz xizmat ko‘rsatish hollari ko‘p.",
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )
  },
  {
    title: "Mablag‘larning Noto‘g‘ri Sarflanishi",
    description: "AgroBankning texnika-subsidiya yoki kredit doirasidagi xizmatlar ham nazorat qilinmaydigan bozorda noto‘g‘ri sarflanishi mumkin.",
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Platforma Yo‘qligi",
    description: "Asosiy muammo — fermerlar va xizmat ko‘rsatuvchilar o‘rtasida aniq, ishonchli, xavfsiz va tezkor bog‘lovchi platforma yo‘qligi.",
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  }
];

const ProblemSolution = () => {
  return (
    <section id="solution" className="py-20 bg-black overflow-hidden border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Muammo va Yechim
          </h2>
          <p className="text-lg text-gray-400">
            O‘zbekiston qishloq xo‘jaligidagi real muammolar va ularga bizning innovatsion yechimimiz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Problem Section */}
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-20 h-20 bg-red-900/30 rounded-full blur-2xl"></div>
            <div className="bg-red-950/50 rounded-3xl p-8 border border-red-900/50 relative z-10 h-full">
              <h3 className="text-2xl font-bold text-red-400 mb-8 flex items-center">
                <span className="w-10 h-10 bg-red-900/50 rounded-full flex items-center justify-center mr-3 text-red-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </span>
                Mavjud Muammolar
              </h3>
              <div className="space-y-6">
                {problems.map((item, index) => (
                  <div key={index} className="flex items-start bg-gray-900 p-4 rounded-xl shadow-sm border border-gray-800">
                    <div className="flex-shrink-0 mt-1 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="relative">
            <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary-900/30 rounded-full blur-2xl"></div>
            <div className="bg-primary-950/50 rounded-3xl p-8 border border-primary-900/50 relative z-10 h-full">
              <h3 className="text-2xl font-bold text-primary-400 mb-8 flex items-center">
                <span className="w-10 h-10 bg-primary-900/50 rounded-full flex items-center justify-center mr-3 text-primary-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Bizning Yechim
              </h3>
              
              <p className="text-gray-300 mb-8 text-lg">
                Biz taklif qilayotgan yechim — bu AI asosida ishlaydigan agro-xizmatlar platformasi bo‘lib, fermerlar va texnika/xizmat egalari bir joyda bog‘lanadi.
              </p>

              <div className="grid grid-cols-1 gap-6">
                 <div className="bg-gray-900 p-5 rounded-xl shadow-sm border border-gray-800 flex items-start">
                   <div className="flex-shrink-0 mr-4 mt-1">
                     <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                   </div>
                   <div>
                     <h4 className="font-bold text-primary-400 mb-1">AI Matching</h4>
                     <p className="text-sm text-gray-400">Fermer talabiga mos eng yaxshi 3-5 ta xizmatni avtomatik topish.</p>
                   </div>
                 </div>

                 <div className="bg-gray-900 p-5 rounded-xl shadow-sm border border-gray-800 flex items-start">
                   <div className="flex-shrink-0 mr-4 mt-1">
                     <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                   </div>
                   <div>
                     <h4 className="font-bold text-primary-400 mb-1">Adolatli Narx</h4>
                     <p className="text-sm text-gray-400">Bozor narxlari asosida adolatli narx diapazonini hisoblash.</p>
                   </div>
                 </div>

                 <div className="bg-gray-900 p-5 rounded-xl shadow-sm border border-gray-800 flex items-start">
                   <div className="flex-shrink-0 mr-4 mt-1">
                     <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                   </div>
                   <div>
                     <h4 className="font-bold text-primary-400 mb-1">Ishonchlilik Reytingi</h4>
                     <p className="text-sm text-gray-400">Soxta profillarni aniqlash va ishonchlilik ballini berish.</p>
                   </div>
                 </div>

                 <div className="bg-gray-900 p-5 rounded-xl shadow-sm border border-gray-800 flex items-start">
                   <div className="flex-shrink-0 mr-4 mt-1">
                     <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                     </svg>
                   </div>
                   <div>
                     <h4 className="font-bold text-primary-400 mb-1">Smart Scheduling</h4>
                     <p className="text-sm text-gray-400">Texnika bandligiga qarab eng qulay vaqtni belgilash.</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
