import React from 'react';

const Demo = () => {
  return (
    <section id="demo" className="py-20 bg-black border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Platforma Demosi
          </h2>
          <p className="text-lg text-gray-400">
            AgroXizmat platformasining ishlash jarayoni va imkoniyatlari bilan tanishing.
          </p>
        </div>

        {/* Video Player */}
        <div className="mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 shadow-primary-500/20 aspect-video">
            <video 
              controls 
              className="w-full h-full object-cover"
              poster="/thumbnail.png"
            >
              <source src="/AgroXizmat.mp4" type="video/mp4" />
              Sizning brauzeringiz video formatini qo'llab-quvvatlamaydi.
            </video>
          </div>
        </div>

        {/* Description Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Videoda nima ko'rsatilgan */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-primary-500 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-10 h-10 bg-primary-900/50 rounded-full flex items-center justify-center mr-3 text-primary-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </span>
              Videoda nima ko'rsatilgan
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="mr-2 text-primary-500">•</span> Fermerlar uchun xizmatlarni tanlash interfeysi
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary-500">•</span> Texnika buyurtma qilish jarayoni
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary-500">•</span> Ariza yuborish formasi
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary-500">•</span> Profil sahifasi va xizmatlar ro'yxati
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary-500">•</span> Chatbot yordam funksiyasi
              </li>
            </ul>
            <p className="mt-4 text-gray-500 text-sm italic">
              Bu demo orqali foydalanuvchi qanday qilib bir necha bosqichda Agrobank xizmatlariga murojaat qilishi mumkinligi amalda ko'rsatiladi.
            </p>
          </div>

          {/* Muammo va Yechim */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-primary-500 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-10 h-10 bg-primary-900/50 rounded-full flex items-center justify-center mr-3 text-primary-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </span>
              Muammo va Yechim
            </h3>
            
            <div className="mb-6">
              <h4 className="font-bold text-red-400 mb-2">Muammo</h4>
              <p className="text-gray-400 text-sm">
                Fermerlarda Agrobank xizmatlarini topish, texnika yoki xizmat buyurtma qilish, kerakli ma'lumotlarni olish — murakkab, vaqt talab qiladi. Ko'pchilik uchun jarayon qog'ozbozlik, telefon orqali qidirish va turli bo'limlarga murojaat qilishga bog'langan.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-primary-400 mb-2">Yechim</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-primary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fermerlar Agrobankning barcha xizmatlarini bitta platforma ichida topadi
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-primary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  "Texnika buyurtma qilish" jarayoni 3 bosqichga soddalashtirilgan
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-primary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Chatbot yordamchisi AI orqali real vaqt tavsiyalar beradi
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-primary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Murojaatlar avtomatik shakllantiriladi va fermerga qaysi xizmat mosligini aniqlab beradi
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-primary-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fermer profilida barcha buyurtmalar monitoring qilinadi
                </li>
              </ul>
            </div>
          </div>

          {/* Texnologiyalar */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-primary-500 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-10 h-10 bg-primary-900/50 rounded-full flex items-center justify-center mr-3 text-primary-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              Texnologiyalar va AI
            </h3>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Frontend</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• React</li>
                  <li>• TailwindCSS</li>
                  <li>• ShadCN UI</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Backend</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• base44</li>
                  <li>• REST API</li>
                  <li>• base44 database</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">AI Modullar</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-primary-400 font-bold text-sm">1. AgroXizmat AI Advisor</h5>
                  <p className="text-gray-400 text-xs">Foydalanuvchi matnini tahlil qiladi, xizmatlarni taklif qiladi.</p>
                </div>
                <div>
                  <h5 className="text-primary-400 font-bold text-sm">2. Smart Form Generator</h5>
                  <p className="text-gray-400 text-xs">Matn asosida hujjatlarni avtomatik to'ldiradi.</p>
                </div>
                <div>
                  <h5 className="text-primary-400 font-bold text-sm">3. AI Chatbot</h5>
                  <p className="text-gray-400 text-xs">Savollarga javob beradi va buyurtmada yordam beradi.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Loyiha Holati */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-primary-500 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-10 h-10 bg-primary-900/50 rounded-full flex items-center justify-center mr-3 text-primary-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Loyiha Holati
            </h3>
            
            <div className="mb-6">
              <h4 className="font-bold text-white mb-2">Hozirgi holat: <span className="text-primary-500">Prototype</span></h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Asosiy sahifalar tayyor
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI Chatbot prototipi ishlaydi
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Profil va buyurtmalar ro'yxati ishlaydi
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-3">Keyingi qadamlar</h4>
              <ol className="space-y-2 text-gray-400 text-sm list-decimal list-inside">
                <li>Agrobankning haqiqiy APIlariga integratsiya</li>
                <li>AI maslahat modulini kuchaytirish</li>
                <li>Fermerlar uchun mobil ilova versiyasi</li>
                <li>Xizmatlarni avtomatlashtirish</li>
                <li>Admin panel va monitoring</li>
                <li>Real foydalanishga tayyorlash</li>
              </ol>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Demo;
