import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1920&auto=format&fit=crop" 
          alt="Agriculture Background" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/50 text-primary-400 text-sm font-medium mb-8 border border-primary-600/30 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
            O‘zbekiston qishloq xo‘jaligi uchun yangi davr
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-8 drop-shadow-lg">
            Fermer va Xizmatlarni <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              AI Yordamida Bog‘laymiz
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            AgroXizmat — bu fermerlar va texnika egalari o‘rtasidagi ishonchli ko‘prik. 
            Adolatli narx, tezkor xizmat va kafolatlangan sifatni ta'minlaymiz.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#solution" className="px-8 py-4 rounded-full bg-primary-600 text-white font-bold text-lg hover:bg-primary-500 transition-all shadow-lg shadow-primary-500/30 transform hover:-translate-y-1 hover:scale-105 inline-block">
              Xizmat Topish
            </a>
            <a href="#features" className="px-8 py-4 rounded-full bg-white/10 text-white font-bold text-lg border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all transform hover:-translate-y-1 inline-block">
              Batafsil Ma'lumot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
